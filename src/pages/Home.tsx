import Search from '../components/common/Search/Search';
import React, { useEffect, useState } from 'react';
import { ICharacter, IStateCharacter, PropsComponent } from 'type/type';
import ListCharacter from 'components/ListCharacter/ListCharacter';
import './Home.scss';
import Loading from 'components/common/Loading/Loading';
import Modal from 'components/common/Modal/Modal';

const HOST = 'https://the-one-api.dev/v2/';
const TOKEN = 'utxRxt1T7kr6gmJDi5LI';

function Home() {
  const [cards, setCards] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCard, setShowCard] = useState({} as ICharacter);
  const [activeModal, setActiveModal] = useState(false);

  const showModal = (content: ICharacter) => {
    setShowCard(content);
    setActiveModal(true);
  };

  async function filterList(text: string) {
    setIsLoaded(false);
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
      setCards(data.docs);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllCards() {
    try {
      const response = await fetch(`${HOST}character?limit=100`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          Accept: 'application/json',
        },
      });
      const data = await response.json();
      setCards(data.docs);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <section className="home container">
      <h2>It&apos;s homepage</h2>
      {
        <Search
          filter={filterList}
          label="Input example race characte: Elf, Human, Hobbit, Orc, Dwarf, Orc"
        />
      }
      <>
        {!isLoaded ? (
          <div>
            <Loading />
          </div>
        ) : cards.length !== 0 ? (
          <>
            <h2>Character Information about The Lord of the Rings</h2>
            <ListCharacter cards={cards} onShowModal={showModal} />
          </>
        ) : (
          <div>no data found</div>
        )}
      </>
      <Modal card={showCard} activeModal={activeModal} setActive={setActiveModal} />
    </section>
  );
}

export default Home;
