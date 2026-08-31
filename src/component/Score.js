import QuestionData from '../data/QuestionData';
import {DataContext} from '../App';
import { useContext } from 'react';
const Score = () => {
    const {score,setAppState,setScore} = useContext(DataContext);

    const restartApp=() => {
        setScore(0)
        setAppState("menu")
    }
    return(
        <>
        <div className="score">
            <h1>สรุปผลคะแนน</h1>
            <h2>{score}/{QuestionData.length}</h2>
            <button onClick={()=> restartApp()}>ทำแบบทดสอบอีกครั้ง</button>
        </div>
        </>
    )
}
export default Score;