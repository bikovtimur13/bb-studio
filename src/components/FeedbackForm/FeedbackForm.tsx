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
      <form onSubmit={handleSubmit(onSubmit)} id={"contactUsForm"} className={styles.form}>
        <div className={styles.form__group}>
          <label htmlFor="name" className={styles.form__label}>
            Имя
          </label>
          <input
            id="name"

            {...register('name')}
            className={styles.form__input}
          />
          {errors.name && <p className={styles.form__error}>{errors.name.message}</p>}
        </div>
        <div className={styles.form__group}>
          <label htmlFor="email" className={styles.form__label}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            {...register('email')}
            className={styles.form__input}
          />
          {errors.email && <p className={styles.form__error}>{errors.email.message}</p>}
        </div>
        <div className={styles.form__group}>
          <label htmlFor="phone" className={styles.form__label}>
            Телефон
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className={styles.form__input}
          />
          {errors.phone && <p className={styles.form__error}>{errors.phone.message}</p>}
        </div>
        <div className={styles.form__group}>
          <label htmlFor="company" className={styles.form__label}>
            Наименование компании (необязательно)
          </label>
          <input
            id="company"
            {...register('company')}
            className={styles.form__input}
          />
        </div>
        <button
          type="submit"
          className={styles.form__submit}
        >
          Отправить
        </button>
      </form>
    </div>
  );

}

export default FeedbackForm;