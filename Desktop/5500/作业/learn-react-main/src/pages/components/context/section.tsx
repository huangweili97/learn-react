import { useContext } from 'react';
import { LevelContext } from './levelContext';
import styles from '@/styles/Home.module.css';

export default function Section({ children }: { children: React.ReactNode }) {
  const level = useContext(LevelContext);
  console.log(level);
  return (
    <section className={styles.section}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
