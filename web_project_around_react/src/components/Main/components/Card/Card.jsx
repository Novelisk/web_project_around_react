function Card(props) {
  const { name, link, isLiked } = props.card;
  const { onCardClick, card } = props;

  const imageComponent = (
    <img
      src={link}
      alt={name}
      className="card__image"
      onClick={() => onCardClick(card)}
    />
  );
  return (
    <li className="card">
      {imageComponent}
      <button
        aria-label="Delete card"
        className="card__delete-btn"
        type="button"
      ></button>
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          className={`card__like-btn ${isLiked ? 'card__like-btn_active' : ''}`}
          type="button"
        ></button>
      </div>
    </li>
  );
}

export default Card;
