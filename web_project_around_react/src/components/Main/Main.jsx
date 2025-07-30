import { useState } from 'react';
import avatar_logo from '../../../images/profile_avatar.png';
import Popup from './components/Popup/Popup';
import NewCard from './components/NewCard/NewCard';
import EditProfile from './components/EditProfile/EditProfile';
import EditAvatar from './components/EditAvatar/EditAvatar';
import Card from './components/Card/Card';
import ImagePopup from './components/ImagePopup/ImagePopup';

const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

console.log(cards);

function Main() {
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const NewCardPopup = { title: 'Nuevo Lugar', children: <NewCard /> };
  const EditProfilePopup = { title: 'Acerca de mi', children: <EditProfile /> };
  const EditAvatarPopup = {
    title: 'Cambiar foto de perfil',
    children: <EditAvatar />,
  };
  const CardImagePopup = { title: '', children: <ImagePopup /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={avatar_logo}
            alt="Image of and avatar of the explorer Jacques Cousteau."
            className="profile__avatar"
          />
          <button
            aria-label="Edit avatar"
            className="profile__avatar-edit"
            type="button"
            onClick={() => handleOpenPopup(EditAvatarPopup)}
          ></button>
        </div>
        <div className="profile__info">
          <h2 className="profile__name">Jacques Cousteau</h2>
          <button
            aria-label="Edit profile"
            className="profile__edit-btn"
            type="button"
            onClick={() => handleOpenPopup(EditProfilePopup)}
          ></button>
          <p className="profile__about">Explorador.</p>
        </div>
        <button
          aria-label="Add card"
          className="profile__add-btn"
          type="button"
          onClick={() => handleOpenPopup(NewCardPopup)}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            handleOpenPopup={handleOpenPopup}
            onCardClick={() => setSelectedCard(card)}
          />
        ))}
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}

      {selectedCard && (
        <ImagePopup card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </main>
  );
}
export default Main;
