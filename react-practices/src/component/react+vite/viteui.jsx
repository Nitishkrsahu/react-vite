import { useState } from "react"
import '../../../src/App.css'
export function Vite(){
    const [count, setCount] = useState(0)
    function countClick(){
        setCount(count + 1);
    }
    return(
        <>
        <div className="d-flex justify-content-center align-items-center flex-column bg-dark" style={{height: "100vh"}}>
            <img src="../../../react.svg" alt="React-Logo" width="80" className="logoIcon"/>
            <button className="btn btn-primary px-4 mt-3" onClick={countClick}>Count {count}</button>
        </div>
        </>
    )
}