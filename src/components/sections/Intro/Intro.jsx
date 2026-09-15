import './Intro.scss';
import introImage from '../../../assets/images/intro.svg';
import { Form } from '../../blocks/Form/Form';

export const Intro = () => {
  return (
    <section className="page-section intro" id="intro">
      <div className="container">
        <div className="intro__wrapper">
          <h1 className="intro__title">Недвижимость Санкт-Петербурга и Москвы</h1>
          <Form />
        </div>

        <div className="intro__img">
          <img src={introImage} alt="Картинка девочка читает" width="466" height="502" />
        </div>
      </div>
    </section>
  );
};
