import styles from './styles.module.scss';

export default function FooterButtom() {
  return (
    <div className={styles.footerButtomContainer}>
      <button>Todas as anotacoes</button>
      <div>
        <button>Suspeitos</button>
        <button>Armas</button>
        <button>Locais</button>
      </div>
    </div>
  )
}