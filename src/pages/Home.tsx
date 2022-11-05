import Search from '../components/common/Search/Search';
import React, { useEffect, useState } from 'react';
import { ICharacter } from 'type/type';
import CharactersList from 'components/ListCharacter/CharactersList';
import './Home.scss';
import Loading from 'components/common/Loading/Loading';
import Modal from 'components/common/Modal/Modal';
import RadioSwitcher from 'components/common/RadioSwitcher/RadioSwitcher';
import Pagination from 'react-js-pagination';
import { useAppDispatch, useAppSelector } from 'store/hook';
import { setCards, setSorting, setLimit, selectHomeState } from 'store/homeSlice';

function Home() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isClickSort, setIsClickSort] = useState(false);
  const [isClickLimit, setIsClickLimit] = useState(false);
  const [showCard, setShowCard] = useState({} as ICharacter);
  const [activeModal, setActiveModal] = useState(false);
  const { cards, textSearch, limit, sorting, currentPage, pageCount, totalElements } =
    useAppSelector(selectHomeState);
  const dispatch = useAppDispatch();

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
      await dispatch(setCards(text, limitCards, sortCards, pageNumber));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  }

  const handlePageChange = async (pageNumber: number) => {
    filterList(undefined, undefined, undefined, pageNumber);
  };

  useEffect(() => {
    handlePageChange(currentPage);
  }, []);

  useEffect(() => {
    if (isClickSort || isClickLimit) {
      filterList(textSearch, limit, sorting);
    }
  }, [limit, sorting, isClickSort, isClickLimit]);

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
          setOption={setLimit}
          isClick={() => setIsClickLimit(true)}
        />
        <RadioSwitcher
          label="sorting"
          name="sorting"
          values={['name:asc', 'name:desc', 'gender:asc', 'gender:desc']}
          option={sorting}
          setOption={setSorting}
          isClick={() => setIsClickSort(true)}
        />
      </section>

      <>
        <Loading isLoaded={isLoaded} />
        {cards?.length !== 0 ? (
          <>
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={Number(limit)}
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
