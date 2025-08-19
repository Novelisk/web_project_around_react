import { useContext } from 'react';
import avatar_logo from '../../../images/profile_avatar.png';
import Card from './components/Card/Card';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Popup from './components/Popup/Popup.jsx';

function Main(props) {
  const { popups, onOpenPopup, onCardClick, cards, onCardLike, onCardDelete } =
    props;
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={currentUser?.avatar || avatar_logo}
            alt="Image of the avatar of the explorer Jacques Cousteau."
            className="profile__avatar"
          />
          <button
            aria-label="Edit avatar"
            className="profile__avatar-edit profile-avatar__edit"
            type="button"
            onClick={() => onOpenPopup(popups.editAvatar)}
          ></button>
        </div>
        <div className="profile__info">
          <h2 className="profile__name">{currentUser?.name}</h2>
          <button
            aria-label="Edit profile"
            className="profile__edit-btn"
            type="button"
            onClick={() => onOpenPopup(popups.editProfile)}
          ></button>
          <p className="profile__about">{currentUser?.about}</p>
        </div>
        <button
          aria-label="Add card"
          className="profile__add-btn"
          type="button"
          onClick={() => onOpenPopup(popups.newCard)}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>

      {/* {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )} */}
    </main>
  );
}

export default Main;
