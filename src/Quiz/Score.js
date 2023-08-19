import QuizNavBar from "./QuizNavBar"
import styles from './Score.module.css'
export default function Score() {
    return (
        <div>
            <QuizNavBar navBgColor={"#f2f2f2"}/>
            <div className={styles.scoreContainer}>
            <div data-score="5">
                <img src="Group.png" alt="emoji background"/>
            <button>Complete</button>
            </div>
        </div>
        </div>
    )
}