import Search from '../components/common/Search/Search';
import React from 'react';
import { ICharacter, IStateCharacter, PropsComponent } from 'type/type';
import ListCharacter from 'components/ListCharacter/CharactersList';
import './Home.scss';
import Loading from 'components/common/Loading/Loading';
import Modal from 'components/common/Modal/Modal';

const HOST = 'https://the-one-api.dev/v2/';
const TOKEN = 'utxRxt1T7kr6gmJDi5LI';

class Home extends React.Component<PropsComponent, IStateCharacter> {
  constructor(props: PropsComponent) {
    super(props);
    this.state = {
      cards: [],
      isLoaded: false,
      showCard: {} as ICharacter,
      activeModal: false,
    };
    this.filterList = this.filterList.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  closeModal = () => {
    this.setState({ activeModal: false });
  };
  showModal = (content: ICharacter) => {
    this.setState({ showCard: content, activeModal: true });
  };

  async filterList(text: string) {
    this.setState({ isLoaded: false });
    const userText = text.trim()[0].toLocaleUpperCase() + text.trim().slice(1).toLocaleLowerCase();

    try {
      const response = await fetch(`${HOST}character?race=${userText}&limit=100`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          Accept: 'application/json',
        },
      });
      const data = await response.json();

      this.setState({ cards: data.docs, isLoaded: true });
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch(`${HOST}character?limit=100`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          Accept: 'application/json',
        },
      });
      const data = await response.json();

      this.setState({ cards: data.docs, isLoaded: true });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { cards, isLoaded, activeModal, showCard } = this.state;
    return (
      <section className="home container">
        <h2>It&apos;s homepage</h2>
        <Search
          filter={this.filterList}
          label="Input example race characte: Elf, Human, Hobbit, Orc, Dwarf, Orc"
        />
        <>
          <div>
            <Loading isLoaded={isLoaded} />
          </div>
          {cards.length !== 0 ? (
            <ListCharacter cards={cards} onShowModal={this.showModal} />
          ) : (
            <div>no data found</div>
          )}
        </>
        <Modal card={showCard} isModalActive={activeModal} onClose={this.closeModal} />
      </section>
    );
  }
}

export default Home;
