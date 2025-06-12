import { useRef, useState } from "react"

export function TimerEvent() {
    const [msg, setMsg] = useState("");
    var thread = useRef(null);
    function msg1() {
        setMsg("I am in Msg 1.");
    }
    function msg2() {
        setMsg("I am in Msg 2.");
    }
    function msg3() {
        setMsg("I am in Msg 3.");
    }
    function onBtnClick() {
        setTimeout(msg1, 2000);
        thread.current = setTimeout(msg2, 4000);
        setTimeout(msg3, 6000)
    }
    function onBtnCancel(){
        clearTimeout(thread.current);
    }
    return (
        <>
            <div className="m-5">
                <button className="btn btn-primary px-4" onClick={onBtnClick}>show Msg</button>
                <button className="btn btn-warning px-3" onClick={onBtnCancel}>Cancel Msg 2</button>
                <h5 className="text-center">{msg}</h5>
            </div>
        </>
    )
}