import { useEffect, useState } from "react"

export function InputBox(){
    const [name, setName] = useState('')
    useEffect(()=>{
        setName(inputText)
    },[])
    return(
        <>
        <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <input type="text" className="form-control" value={name}/>
            <p>Hello ${name}</p>
        </div>
        </>
    )
}