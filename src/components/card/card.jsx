
export const Card = ({
    subject,
    todoDate,
    todoTime,
    tag,
    status,
    notes,
    handler = () => {},
    dataTarget = "",
}) => {
    return <>
        <div className="card mx-auto my-3" style={{ width: "22rem" }}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                <h5 className="card-title">{subject}</h5>
                <div className="" onClick={handler}>
                    <span style={{cursor : "pointer"}} 
                    className="border border-secondary border-primary rounded-circle p-2 bg-primary text-light"
                    data-toggle="modal" data-target={dataTarget}>
                        &#9998;
                    </span>
                </div>
                </div>
                
                
                <h6 className="card-subtitle mb-2 text-muted">{tag}</h6>
                <p className="card-text">{notes}</p>
                <div className="container">
                    <div className="row row-cols-3">
                        <div className="small col-3 text-secondary  p-1 bg-primary mx-1 text-light text-center rounded">{status}</div>
                        <div className="small col-3 text-secondary  p-1 bg-primary mx-1 text-light text-center rounded">{todoDate}</div>
                        <div className="small col-3 text-secondary  p-1 bg-primary mx-1 text-light text-center rounded">{todoTime}</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

