import { Map } from '../../blocks/Map/Map';

export const FindUs = () => {
  return (
    <section className="page-section find-us" id="find-us">
      <div className="container">
        <div className="page-description">
          <h2 className="title">Как нас найти</h2>
          <p className="text">
            Наш офис расположен в удобном месте. Посмотрите адрес на карте и проложите удобный
            маршрут до нас. Мы находимся по адресу г. Санкт-Петербург, Владимирский пр., д. 3 лит.
            А, офис 701.
          </p>
        </div>

        <Map />
      </div>
    </section>
  );
};
