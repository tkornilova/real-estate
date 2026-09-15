import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo logo">
          <svg width="75" height="41" aria-hidden="true">
            <use href={`${import.meta.env.BASE_URL}icons.svg#logo-icon`} />
          </svg>
        </div>
        <ul className="header__list">
          <li className="header__item">
            <a className="header__link link link--accent" href="#intro">
              Оставить заявку
            </a>
          </li>
          <li className="header__item">
            <a className="header__link link link--accent" href="#offers">
              Предложения
            </a>
          </li>
          <li className="header__item">
            <a className="header__link link link--accent" href="#feedback">
              Отзывы
            </a>
          </li>
          <li className="header__item">
            <a className="header__link link link--accent" href="#find-us">
              Адрес
            </a>
          </li>
        </ul>
        <button className="header__button button button--red" type="button">
          Кнопка
        </button>
      </div>
    </header>
  );
};
