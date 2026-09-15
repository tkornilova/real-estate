import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__address">
          <p>Санкт-Петербург, Владимирский пр., д. 3 лит. А, офис 701</p>
        </div>
        <a className="footer__phone link" href="tel:+78121112233">
          + 7 (812) 111-22-33
        </a>
        <a className="footer__feedback link" href="mailto:test@gmail.com">
          Напишите нам
        </a>
      </div>
    </footer>
  );
};
