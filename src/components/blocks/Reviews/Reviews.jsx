import { Review } from '../Review/Review';
import './Reviews.scss';

import reviewImg1 from '../../../assets/images/reviews/reviews-1.jpg';
import reviewImg2 from '../../../assets/images/reviews/reviews-2.jpg';
import reviewImg3 from '../../../assets/images/reviews/reviews-3.jpg';
import reviewImg4 from '../../../assets/images/reviews/reviews-4.jpg';

const reviewData = [
  {
    id: 1,
    name: 'Анна',
    img: reviewImg1,
    textStart:
      'Очень довольна работой агентства. Помогли быстро найти квартиру, которая полностью подошла по нашим требованиям.',
    textEnd:
      'Специалист был всегда на связи, подробно отвечал на вопросы и помогал на каждом этапе сделки. Отдельно понравилось, что нам не пытались навязать неподходящие варианты.',
  },
  {
    id: 2,
    name: 'Олег',
    img: reviewImg2,
    textStart: 'Обратился за помощью в покупке квартиры и остался очень доволен результатом.',
    textEnd:
      'Мне предложили несколько подходящих вариантов, подробно рассказали о каждом и помогли сравнить их между собой. В итоге нашли квартиру в нужном районе и уложились в запланированный бюджет.',
  },
  {
    id: 3,
    name: 'Егор',
    img: reviewImg3,
    textStart:
      'Хорошее агентство, с которым приятно работать. Всё прошло спокойно и без лишней суеты.',
    textEnd:
      'Специалист учитывал все наши пожелания и всегда заранее предупреждал о важных моментах. Благодаря этому покупка квартиры прошла намного проще, чем мы ожидали.',
  },
  {
    id: 4,
    name: 'Виктория',
    img: reviewImg4,
    textStart:
      'Спасибо за профессиональную работу и внимательное отношение. Квартиру нашли довольно быстро.',
    textEnd:
      'Нам показали несколько интересных вариантов и помогли разобраться во всех нюансах. Остались довольны результатом и смело можем рекомендовать агентство.',
  },
];

export const Reviews = () => {
  return (
    <ul className="reviews">
      {reviewData.map((user) => (
        <li key={user.id} className="reviews__item">
          <Review
            name={user.name}
            img={user.img}
            textStart={user.textStart}
            textEnd={user.textEnd}
          />
        </li>
      ))}
    </ul>
  );
};
