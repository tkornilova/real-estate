import { Reviews } from '../../blocks/Reviews/Reviews';

export const Feedback = () => {
  return (
    <section className="page-section feedback" id="feedback">
      <div className="container">
        <div className="page-description">
          <h2 className="title">Отзывы наших клиентов</h2>
          <p className="text">
            Мы ценим доверие наших клиентов и всегда стремимся сделать процесс покупки или продажи
            недвижимости максимально комфортным. Делимся отзывами тех, кто уже воспользовался нашими
            услугами.
          </p>
        </div>

        <Reviews />
      </div>
    </section>
  );
};
