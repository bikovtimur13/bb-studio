import React, { useEffect, useState } from 'react';
import styles from "./Reviews.module.scss";
import { ReviewData } from './_types';

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/review');
        if (!response.ok) {
          throw new Error('Ошибка загрузки отзывов');
        }
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Произошла ошибка');
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  if (loading) return <div className="main-wrapper"><p>Загрузка...</p></div>;
  if (error) return <div className="main-wrapper"><p>Ошибка: {error}</p></div>;

  return (
    <div className="main-wrapper">
      <section className={styles.reviews}>
        <h2 className={styles.reviews__heading}>Отзывы</h2>
        {reviews.length > 0 ? (
          <div className={styles.reviews__list}>

            {reviews.map((review, index) => (
              <div key={index} className={styles.reviews__item}>

                <p className={styles.reviews__text}>{review.review}</p>
                <div className={styles.reviews__meta}>
                  <img
                    src={review.image}
                    alt={`Логотип компании ${review.company}`}
                    className={styles.reviews__logo}
                  />
                  <span className={styles.reviews__company}>{review.company}</span>
                </div>

              </div>
            ))}

          </div>
        ) : (
          <p className={styles.reviews__noReviews}>Нет отзывов для отображения.</p>
        )}
      </section>
    </div>
  );
};

export default Reviews;