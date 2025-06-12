export function FormEvent(){
    function formSubmit(e){
        e.preventDefault();
    }
    return(
        <>
        <div className=" d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <form className="form-control w-25" onSubmit={formSubmit}>
            <label id="username" className="form-label">UserName: </label>
            <div className="m-2">
                <input type="text" className="form-control" name="username" />
            </div>
            <button className="btn btn-primary w-100">Login</button>
        </form>
        </div>
        </>
    )
}