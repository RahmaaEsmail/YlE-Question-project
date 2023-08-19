import QuizNavBar from "./QuizNavBar";
import styles from './Quiz-1.module.css'
export default function Quiz() {
    return (
     <>
        <QuizNavBar/>
        <div className={styles.quizContainer}>
           <div>
              <QuestionBox/>
           </div>
        </div>
     </>
    )
}

function QuestionBox() {
    return (
        <div>
            <h2 className={styles.questionNumber}>Question-1</h2>
            <h4 className={styles.questionHeading}>What is school and why do we go there?</h4>
            <QuestionList/>
            <Buttons/>
        </div>
    )
}

function QuestionList() {
    return (
        <ul>
          <Question/>
        </ul>
    )
}

function Question() {
    return (
        <>
        <li>The worst place in the world and we go to it by force</li>
        <li>Best place in the world (hypocrite)</li>
        <li>I don't know</li>
        <li>All choices are wrong</li>
        </>
    )
}

function Buttons() {
    return(
        <div className={styles.buttons}>
            <button className={styles.missBtn}>miss</button>
            <button className={styles.nextBtn}>Next</button>
        </div>
    )
}