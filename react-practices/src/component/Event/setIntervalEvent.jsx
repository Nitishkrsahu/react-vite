import { useState, useRef } from "react"

export function SetIntervalEvent() {

    let [msg, setMsg] = useState("");
    var thread = useRef(null);
    function msg1() {
        setMsg(msg += "http://127.0.0.1:8080");
    }
    function onClickStart() {
        thread.current = setInterval(msg1, 2000);
    }
    function onClickAbort(){
        clearInterval(thread.current);
    }
    return (
        <>
            <button onClick={onClickStart} className="btn btn-primary">Ping Me</button>
            <button onClick={onClickAbort} className="btn btn-warning">Abort</button>
            <p>{msg}</p>
        </>
    )
}