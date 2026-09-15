import './NotFound.scss';

import { Header } from '../../components/base/Header/Header';
import { Footer } from '../../components/base/Footer/Footer';

export const NotFound = () => {
  return (
    <>
      <Header />
      <main>
        <section className="page-section not-found">
          <div className="container">
            <div className="page-description">
              <h2 className="title">Страница не найдена</h2>
              <p className="text">
                К сожалению, такой страницы не существует или она была перемещена. Вернитесь на
                главную и продолжите поиск подходящей недвижимости.
              </p>
              <a href="/" className="link">
                Перейти на главную страницу
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
