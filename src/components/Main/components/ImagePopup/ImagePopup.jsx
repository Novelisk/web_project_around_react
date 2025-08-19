function ImagePopup({ card, onClose }) {
  return (
    <div className="popup popup_type_image" id="popup-image">
      <button
        aria-label="Close modal"
        className="popup__close"
        type="button"
        onClick={onClose}
      />
      {card && (
        <>
          <img src={card.link} alt={card.name} className="popup__image-img" />
          <p className="popup__image-title">{card.name}</p>
        </>
      )}
    </div>
  );
}

export default ImagePopup;
