import QuestionData from '../data/QuestionData';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../App';
const Quiz = () => {
    //console.log(QuestionData)
    const [current,setCurrent] = useState(0);
    const [answers, setAnswer] = useState(Array(QuestionData.length).fill(""));
    const {score, setScore,setAppState} = useContext(DataContext);

   const selectedChoice = answers[current];
    const selectAnswer = (choice) => {
        setAnswer((prevAnswer) => {
            const updateAnswers = [...prevAnswer];
            updateAnswers[current] = choice;
            return updateAnswers;
        })
    }
    
    const submitQuiz = () => {
        const finalScore = answers.reduce((total, answer, index) => {
            if (answer === QuestionData[index].answer) {
            return total + 1;
            }

            return total;
        }, 0);

        setScore(finalScore);
        setAppState("score");
    };

    const prevQuestion = () => {
        if(current > 0){
            setCurrent(current-1)
        }
    }

    const nextQuestion = () => {
        if(selectedChoice === "") return;

        if(current === QuestionData.length-1){
            submitQuiz();
        }else{
            setCurrent(current+1);
        }
    }


    return(
        <>
        <div className="quiz">
            <h1>{QuestionData[current].question}</h1>
            <div className = "choices">
                <button className={selectedChoice === "A" ? "selected" : ""} onClick = {()=> selectAnswer("A")}>{QuestionData[current].A}</button>
                <button className={selectedChoice === "B" ? "selected" : ""} onClick = {()=> selectAnswer("B")}>{QuestionData[current].B}</button>
                <button className={selectedChoice === "C" ? "selected" : ""} onClick = {()=> selectAnswer("C")}>{QuestionData[current].C}</button>
                <button className={selectedChoice === "D" ? "selected" : ""} onClick = {()=> selectAnswer("D")}>{QuestionData[current].D}</button>
            </div>
            <p>{`${current+1} / ${QuestionData.length}`}</p>
            <div
                className="navigation"
                role="group"
                aria-label="การนำทางคำถาม"
            >
                <button disabled={current === 0} onClick={prevQuestion}>ย้อนกลับ</button>
                <button disabled={selectedChoice === ""} onClick={nextQuestion}>{current === QuestionData.length-1 ? "ส่งคำตอบ" : "ถัดไป"}</button>
            </div>
            
        </div>
        </>
    )
}
export default Quiz;
