import { Header } from '../../components/base/Header/Header';
import { Intro } from '../../components/sections/Intro/Intro';
import { Offers } from '../../components/sections/Offers/Offers';
import { Feedback } from '../../components/sections/Feedback/Feedback';
import { FindUs } from '../../components/sections/FindUs/FindUs';
import { Cards } from '../../components/sections/Cards/Cards';
import { Footer } from '../../components/base/Footer/Footer';

const cardsData = [
  {
    number: '3000',
    text: 'Агентств',
    id: 1,
  },
  {
    number: '10,000',
    text: 'Партнеров',
    id: 2,
  },
  {
    number: '80,000',
    text: 'Квартир в базе',
    id: 3,
  },
  {
    number: '100+',
    text: 'Застройщиков',
    id: 4,
  },
  {
    number: '200',
    text: 'Сотрудников',
    id: 5,
  },
];

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Offers />
        <Feedback />
        <FindUs />
        <Cards cards={cardsData} />
      </main>
      <Footer />
    </>
  );
};
