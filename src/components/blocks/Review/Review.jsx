import { useState } from 'react';
import './Review.scss';

export const Review = ({ name, img, textStart, textEnd }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="review">
      <img className="review__img" src={img} alt="Фото пользователя" width="150" height="150" />

      <span className="review__name">{name}</span>

      <div className="review__wrapper">
        <p className="review__text text">{textStart}</p>
        <div className={`review__inner ${isOpen ? 'review__inner--open' : ''}`}>
          <p className="review__text text">{textEnd}</p>
        </div>
      </div>

      <button className="review__more" type="button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Скрыть' : 'Подробнее'}
      </button>
    </div>
  );
};
