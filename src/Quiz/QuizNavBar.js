import styles from './QuizNavBar.module.css'
export default function QuizNavBar({ navBgColor }) {
    return (
        <nav style={navBgColor ? { backgroundColor: navBgColor } : { backgroundColor :"#fff"}} className={styles.nav}>
            <div className={styles.questionProgress}>
                <p>
                </p>
                <span>
                    1/10
                </span>
            </div>

            <div className={styles.progressCircle}>
                <img src='progress-circle_timmer.png' alt="progress circle" />
            </div>

            <div>
                <h3 className={styles.count}>Count: 6/10</h3>
            </div>
        </nav>
    )
}