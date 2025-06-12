import React from 'react'

function IntervalDemo() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center flex-column' style={{height: "100vh"}}>
        <button className='btn  btn-primary px-4'>Load Image</button>
        <img src="../../../public/fashion.png" alt="fashion" width={300}/>
        <progress></progress>
    </div>
    </>
  )
}

export default IntervalDemo