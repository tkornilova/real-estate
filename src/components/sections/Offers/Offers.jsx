import { Slider } from '../../blocks/Slider/Slider';

export const Offers = () => {
  return (
    <section className="page-section offers" id="offers">
      <div className="container">
        <div className="page-description">
          <h2 className="title">Варианты квартир</h2>
          <p className="text">
            Мы собрали лучшие предложения, чтобы вам было проще найти подходящий вариант. В нашей
            базе есть квартиры разной площади и стоимости, в популярных районах и новых жилых
            комплексах. Выбирайте понравившийся объект, изучайте детали и оставляйте заявку — мы
            поможем разобраться с условиями и ответим на все вопросы.
          </p>
        </div>

        <Slider />
      </div>
    </section>
  );
};
