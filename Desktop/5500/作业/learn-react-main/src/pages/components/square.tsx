import styles from '@/styles/Home.module.css';
function Square({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.square}>
      <p>A Generic Square</p>
      {children}
    </div>
  )
}

export default function Holder() {
  return (
    <div>
      <Square>
        <img
          className="avatar"
          src={'https://i.imgur.com/YfeOqp2s.jpg'}
          alt={'Katsuko Saruhashi'}
          width={300}
          height={300}
        />
      </Square>
      <Square>
        <label htmlFor="image"> 
          <b> Katsuko Saruhashi  </b>
        </label>
      </Square>
      
    </div>
  )
}
