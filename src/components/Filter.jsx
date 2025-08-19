import "../components/Filter.css"

export default function Filter({filterData,category,setCategory}){

    function filterHandler(title){
        setCategory(title); 
    }

    return (
        <div className="filterMain">
            {filterData.map((data) =>{
                return <button
                    onClick={() => filterHandler(data.title)}  
                    className="btn" key={data.id}
                    style={ category === data.title ?
                          { border: ".2rem solid green" } 
                        : { border: "none", opacity: ".9" } 
                    }

                 >
                    {data.title}
                </button> 
            })}
        </div>
    )
}