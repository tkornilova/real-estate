import './Form.scss';

export const Form = () => {
  return (
    <form action="#" className="form">
      <div className="form__wrapper">
        <label className="form__label">
          Выбрать город
          <select className="form__select" name="city" required>
            <option value="">Выбрать город</option>
            <option value="moscow">Москва</option>
            <option value="spb">Санкт-Петербург</option>
          </select>
        </label>

        <label className="form__label">
          Ваш e-mail
          <input
            className="form__email"
            type="email"
            name="email"
            placeholder="info@mail.ru"
            required
          />
        </label>
      </div>

      <button className="form__button button button--red" type="submit">
        Отправить
      </button>

      <div className="form__agreement">
        <input className="form__checkbox" type="checkbox" id="agreement" required />
        <label className="form__agreement-text" htmlFor="agreement">
          Отправляя нам данную форму вы соглашаетесь с{' '}
          <a href="#" className="link form__link">
            политикой конфиденциальности
          </a>
        </label>
      </div>
    </form>
  );
};
