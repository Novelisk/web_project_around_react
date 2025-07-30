function EditProfile() {
  return (
    <form
      className="popup__form"
      name="profile-form"
      id="profile-form"
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="profile-name"
          maxLength="40"
          minLength="2"
          name="name"
          placeholder="Nombre"
          type="text"
          required
        />
        <div className="popup__underline"></div>
        <span className="popup__error" name="card-name-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="profile-about"
          maxLength="200"
          minLength="2"
          name="name"
          placeholder="Acerca de mi..."
          type="text"
          required
        />
        <div className="popup__underline popup__underline_last"></div>
        <span className="popup__error" name="card-link-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}

export default EditProfile;
