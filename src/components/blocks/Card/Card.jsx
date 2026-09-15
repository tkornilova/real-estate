import './Card.scss';

export const Card = ({ number, text }) => {
  return (
    <div className="card">
      <span className="card__number">{number}</span>
      <p className="card__text">{text}</p>
    </div>
  );
};
