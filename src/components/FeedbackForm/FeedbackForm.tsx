'use client';

import React, { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { feedbackSchema } from "@/lib/validations/feedback";
import { FeedbackFormData } from "@/lib/types/feedback";
import styles from './FeedbackForm.module.scss';

// Форма обратной связи

const FeedbackForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit: SubmitHandler<FeedbackFormData> = async (data) => {
    // Обработка данных формы
    // Здесь добавить логику отправки данных на сервер
    console.log(data);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        console.log(response);

        console.warn("Ошибка при отправке данных")
        throw new Error("Ошибка при отправке данных");
      }
      setSubmitSuccess(true);
    } catch (err) {
      setSubmitError("Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='main-wrapper'>
      <div className={styles.form}>
        <div className={styles.form__container}>
          <div className={styles.form__description}>
            <p className={styles.form__heading}>
              мы на связи
            </p>
            <p className={styles.form__subHeading}>
              Обращайтесь за консультацией,<br className="br-desc" /> и мы решим ваш вопрос. В другом месте вас обманут ещё больше.
            </p>
            <p className={styles.form__text}>Так же Вы можете написать нам на почту <a href="mailto:delobykova@yandex.com" className={styles.form__mail}> delobykova@yandex.com</a></p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} id={"contactUsForm"} className={styles.form__form}>
            <div className={styles.form__group}>
              <input
                id="name"
                placeholder="Имя"
                {...register('name')}
                className={styles.form__input}
              />
              <span className={styles.form__activeBar}></span>
              {errors.name && <p className={styles.form__error}>{errors.name.message}</p>}
            </div>
            <div className={styles.form__group}>
              <input
                id="email"
                type="email"
                placeholder="E-Mail"
                {...register('email')}
                className={styles.form__input}
              />
              <span className={styles.form__activeBar}></span>
              {errors.email && <p className={styles.form__error}>{errors.email.message}</p>}
            </div>
            <div className={styles.form__group}>
              <input
                id="phone"
                type="tel"
                placeholder="Телефон"
                {...register('phone')}
                className={styles.form__input}
              />
              <span className={styles.form__activeBar}></span>
              {errors.phone && <p className={styles.form__error}>{errors.phone.message}</p>}
            </div>
            <div className={styles.form__group}>
              <input
                id="company"
                placeholder="Компания или сфера бизнеса"
                {...register('company')}
                className={styles.form__input}
              />
              <span className={styles.form__activeBar}></span>
            </div>
            <button
              type="submit"
              className={styles.form__submit}
            >
              Оставить заявку
            </button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default FeedbackForm;