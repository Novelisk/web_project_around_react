function NewCard() {
  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          maxLength="30"
          minLength="1"
          name="name"
          placeholder="Nuevo lugar"
          type="text"
          required
        />
        <div className="popup__underline"></div>
        <span className="popup__error" name="card-name-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="card-link"
          name="link"
          placeholder="Enlace de la imagen"
          type="url"
          required
        />
        <div className="popup__underline popup__underline_last"></div>
        <span className="popup__error" name="card-link-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Crear
      </button>
    </form>
  );
}

export default NewCard;
