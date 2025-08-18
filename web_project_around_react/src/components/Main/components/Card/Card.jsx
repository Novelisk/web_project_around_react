function Card(props) {
  const { name, link, isLiked } = props.card;
  const { card, onCardClick, onCardLike, onCardDelete } = props;

  const imageComponent = (
    <img
      src={link}
      alt={name}
      className="card__image"
      onClick={() => onCardClick(card)}
    />
  );

  const handleLikeClick = () => {
    onCardLike(card);
  };

  const handleDeleteClick = () => {
    onCardDelete(card);
  };

  return (
    <li className="card">
      {imageComponent}
      <button
        aria-label="Delete card"
        className="card__delete-btn"
        type="button"
        onClick={handleDeleteClick}
      ></button>
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          className={`card__like-btn ${isLiked ? 'card__like-btn_active' : ''}`}
          type="button"
          onClick={handleLikeClick}
        ></button>
      </div>
    </li>
  );
}

export default Card;
