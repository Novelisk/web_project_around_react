import { useState, useEffect } from 'react';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';
import Popup from './Main/components/Popup/Popup.jsx';
import NewCard from './Main/components/NewCard/NewCard';
import EditProfile from './Main/components/EditProfile/EditProfile';
import EditAvatar from './Main/components/EditAvatar/EditAvatar';
import ImagePopup from './Main/components/ImagePopup/ImagePopup';
import api from '../utils/api.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  // Load initial cards and current user info
  useEffect(() => {
    api
      .getUserInfo()
      .then(setCurrentUser)
      .catch((err) =>
        console.log(`Error ${err} al obtener información de usuario.`)
      );
    api
      .getInitialCards()
      .then(setCards)
      .catch((err) => console.log(`Error ${err} al obtener las tarjetas`));
  }, []);

  // Handle popups
  const handleOpenPopup = (popup) => setPopup(popup);
  const handleClosePopup = () => setPopup(null);

  // Handle Open/Close image
  const handleCardClick = (card) => setSelectedCard(card);
  const handleCloseImagePopup = () => setSelectedCard(null);

  // Update user info
  const handleUpdateUser = async (data) => {
    try {
      const newUserData = await api.updateUserInfo(data);
      setCurrentUser(newUserData);
      handleClosePopup();
    } catch (error) {
      console.error(error);
    }
  };

  // Handle like on card
  const handleCardLike = async (card) => {
    try {
      const isLiked = card.isLiked;
      const newCard = await api.changeLikeCardStatus(card._id, !isLiked);
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    } catch (err) {
      console.log(`Error: ${err} `);
    }
  };

  // Handle card delete
  const handleCardDelete = async (card) => {
    try {
      await api.deleteCard(card._id);
      setCards((state) =>
        state.filter((currentCard) => currentCard._id !== card._id)
      );
    } catch (err) {
      console.log(`Error: ${err} al eliminar la tarjeta`);
    }
  };

  // Add new card
  const handleAddPlaceSubmit = async ({ name, link }) => {
    try {
      const newCard = await api.addNewCard({ name, link });
      setCards([newCard, ...cards]);
      handleClosePopup();
    } catch (err) {
      console.log(`Error: ${err} al agregar nueva tarjeta.`);
    }
  };

  // Update user's vatar
  const handleUpdateAvatar = async ({ avatar }) => {
    try {
      const updatedUserAvatar = await api.updateAvatar({ avatar });
      setCurrentUser(updatedUserAvatar);
      handleClosePopup();
    } catch (err) {
      console.log(`Error: ${err} al actualizar avatar de usuario.`);
    }
  };

  // Popups
  const NewCardPopup = {
    title: 'Nuevo Lugar',
    children: <NewCard onAddPlaceSubmit={handleAddPlaceSubmit} />,
  };
  const EditProfilePopup = {
    title: 'Acerca de mi',
    children: <EditProfile /*onUpdateUser={handleUpdateUser}*/ />,
  };
  const EditAvatarPopup = {
    title: 'Cambiar foto de perfil',
    children: <EditAvatar onUpdateAvatar={handleUpdateAvatar} />,
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page">
        <Header />
        <Main
          popups={{
            newCard: NewCardPopup,
            editProfile: EditProfilePopup,
            editAvatar: EditAvatarPopup,
          }}
          onOpenPopup={handleOpenPopup}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}

        {selectedCard && (
          <ImagePopup card={selectedCard} onClose={handleCloseImagePopup} />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
