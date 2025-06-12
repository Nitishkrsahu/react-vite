export function ButtonEvent(){
    function insertClick(id, title, city){
        console.log(`Id = ${id} \n Product = ${title} \n Location = ${city}`)
    }
    return(
        <>
        <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <button className="btn btn-primary px-4" onClick={(e)=>insertClick(23, 'Tv', ["Hyd", "Delhi"])}>Insert</button>
        </div>
        </>
    )
}