import React from 'react';
import styles from './ContactForm.module.css';
import { GlassCard } from '../../../components/molecules/GlassCard';
import Button from '../../../components/atoms/Button/Button';

// A simple uncontrolled form for demonstration
export const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here
    alert('Форма отправлена (демонстрация)');
  };

  return (
    <GlassCard variant="lg" glow="purple">
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.title}>Напишите нам</h3>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Ваше имя" className={styles.input} required />
          <input type="tel" placeholder="Ваш телефон" className={styles.input} required />
        </div>
        <textarea placeholder="Ваше сообщение" className={styles.textarea} rows={5} required />
        <Button type="submit" variant="primary" size="lg" className={styles.submitButton}>
          Отправить
        </Button>
      </form>
    </GlassCard>
  );
};
