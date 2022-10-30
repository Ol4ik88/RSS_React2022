import Search from '../components/common/Search/Search';
import React, { useEffect, useState } from 'react';
import { ICharacter } from 'type/type';
import CharactersList from 'components/ListCharacter/CharactersList';
import './Home.scss';
import Loading from 'components/common/Loading/Loading';
import Modal from 'components/common/Modal/Modal';
import useAppContext from 'store/appContext';
import RadioSwitcher from 'components/common/RadioSwitcher/RadioSwitcher';
import Pagination from 'react-js-pagination';

const HOST = 'https://the-one-api.dev/v2/';
const TOKEN = 'utxRxt1T7kr6gmJDi5LI';

function Home() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isClickSort, setIsClickSort] = useState(false);
  const [isClickLimit, setIsClickLimit] = useState(false);
  const [showCard, setShowCard] = useState({} as ICharacter);
  const [activeModal, setActiveModal] = useState(false);
  const { homeData, saveHomeResult, saveHomeLimit, saveHomeSort, saveHomePagination } =
    useAppContext();
  const { cards, textSearch, limit, sorting, paginationOptioons } = homeData;
  const { currentPage, pageCount, totalElements } = paginationOptioons;

  const showModal = (content: ICharacter) => {
    setShowCard(content);
    setActiveModal(true);
  };

  async function filterList(
    text: string = textSearch,
    limitCards = limit,
    sortCards = sorting,
    pageNumber = 1
  ) {
    setIsLoaded(false);
    try {
      const response = await fetch(
        `${HOST}character?race=/${text}/i&sort=${sortCards}&limit=${limitCards}&page=${pageNumber}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            Accept: 'application/json',
          },
        }
      );
      const data = await response.json();
      saveHomeResult(data.docs);
      saveHomePagination(pageNumber, data.pages, data.total);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }

  const handlePageChange = async (pageNumber: number) => {
    filterList(undefined, undefined, undefined, pageNumber);
  };

  useEffect(() => {
    handlePageChange(currentPage);
    console.log(`use1`);
  }, []);

  useEffect(() => {
    if (isClickSort || isClickLimit) {
      filterList(textSearch, limit, sorting);
      console.log(`use2 ${limit} ${sorting}`);
    }
  }, [limit, sorting]);

  return (
    <section className="home container">
      <h2>It&apos;s homepage</h2>
      <section className="search">
        <Search
          filter={filterList}
          label="Input example race characte: Elf, Human, Hobbit, Orc, Dwarf, Orc"
        />
        <RadioSwitcher
          label="limit for page"
          name="limit"
          values={['10', '50', '100']}
          option={limit}
          setOption={saveHomeLimit}
          isClick={() => setIsClickLimit(true)}
        />
        <RadioSwitcher
          label="sorting"
          name="sorting"
          values={['name:asc', 'name:desc', 'gender:asc', 'gender:desc']}
          option={sorting}
          setOption={saveHomeSort}
          isClick={() => setIsClickSort(true)}
        />
      </section>

      <>
        <Loading isLoaded={isLoaded} />
        {cards.length !== 0 ? (
          <>
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={+limit}
              totalItemsCount={totalElements}
              pageRangeDisplayed={pageCount > 1 ? 3 : 1}
              onChange={handlePageChange}
            />
            <CharactersList cards={cards} onShowModal={showModal} />
          </>
        ) : (
          <div>no data found</div>
        )}
      </>
      <Modal card={showCard} isModalActive={activeModal} setActive={setActiveModal} />
    </section>
  );
}

export default Home;
