import Button from 'components/common/Button/Button';
import CharacterInfo from 'components/common/CharacterInfo/CharacterInfo';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAppContext from 'store/appContext';
import './Character.scss';

function Character() {
  const { homeData } = useAppContext();
  const { cards } = homeData;
  const { characterId } = useParams();
  const card = cards.find((item) => item._id == characterId);
  const navigate = useNavigate();
  useEffect(() => {
    if (!card) {
      navigate('/');
    }
  }, []);
  return (
    <>
      {card && (
        <div className="information card">
          <h2>{card.name}</h2>
          <CharacterInfo card={card} />
          <Button type="button" disabled={false} text="Back" onClick={() => navigate(-1)} />
        </div>
      )}
    </>
  );
}

export default Character;
