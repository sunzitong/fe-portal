import styles from './Loading.scss'

export default ({ content }) => (
  <div className={styles.loadingContainer}>
    <div className={styles.loading} />
    <div className={styles.loadingContent}>{content}</div>
  </div>
)
