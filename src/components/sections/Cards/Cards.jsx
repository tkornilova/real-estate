import { Card } from '../../blocks/Card/Card';

import './Cards.scss';

export const Cards = ({ cards }) => {
  return (
    <section className="page-section cards">
      <div className="container">
        <h2 className="visually-hidden">Достижения нашей компании</h2>
        <ul className="cards__list">
          {cards.map((item) => (
            <li key={item.id} className="cards__item">
              <Card number={item.number} text={item.text} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
