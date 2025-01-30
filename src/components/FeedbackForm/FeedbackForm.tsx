'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import styles from './FeedbackForm.module.scss';

// Форма обратной связи
// Схема валидации с использованием Zod
const formSchema = z.object({
  name: z.string().min(1, { message: 'Имя обязательно' }),
  email: z.string().email({ message: 'Некорректный email' }),
  phone: z.string().min(10, { message: 'Телефон должен содержать минимум 10 символов' }),
  company: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const FeedbackForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // Обработка данных формы
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