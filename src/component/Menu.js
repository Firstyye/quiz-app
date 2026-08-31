import { useContext } from 'react';
import { DataContext } from '../App';
const Menu = () => {
    const {setAppState} = useContext(DataContext);
    return(
        <>
        <div className="menu">
            <h1>Menu component</h1>
            <button onClick={()=>setAppState("quiz")}>เริ่มทำแนวข้อสอบ</button>
        </div>
        </>
    )
}
export default Menu;