function EditAvatar() {
  return (
    <form className="popup__form">
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="avatar-link"
          name="link"
          placeholder="Enlace de la imagen"
          type="url"
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

export default EditAvatar;
