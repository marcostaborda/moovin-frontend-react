import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

interface ContainerProps {
  children: ReactNode
}

export function MainContainer({ children }: ContainerProps) {
  return (
    <main className={styles.mainContainer}>
      {children}
    </main>
  )
}