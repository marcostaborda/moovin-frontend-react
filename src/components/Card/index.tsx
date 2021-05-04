import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

interface CardProps {
  title: string;
  children: ReactNode
}

export function Card({ title, children }: CardProps) {
  return (
    <div className={styles.cardContainer}>
      <header>
        <h6>{title}</h6>
      </header>
      {children}
    </div>
  )
}