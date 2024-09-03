import styles from "./portraits.module.css"

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.header}>Header</div>
      <div className={styles.sideBar}>Sidebar</div>
      <div className={styles.main}></div>
      <div className={styles.footer}>Footer</div>
    </div>
  )
}
