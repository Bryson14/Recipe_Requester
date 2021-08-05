function Thanks ({name}) {
    
    return (
        <div>
            <h1 className="page-title">Thank You!</h1>
            <p>You time here will keep <b><i>{name !==""? name : "your recipe"}</i></b> alive.</p>
        </div>
    )
}

export default Thanks;