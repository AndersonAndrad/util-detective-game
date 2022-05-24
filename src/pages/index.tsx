import FooterButtom from "../components/footerButtons";
import Header from "../components/header";
import styles from '../styles/index.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <h1>test</h1>
      <FooterButtom />
    </div>
  )
}