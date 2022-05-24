import styles from './styles.module.scss'

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div>
        <label>
          <span>Armas: 0</span>
        </label>
        <label>
          <span>Suspeitos: 0</span>
        </label>
        <label>
          <span>Locais: 0</span>
        </label>
      </div>
      <div>
        <label>
          Opcoes
        </label>
      </div>
    </div>
  )
}