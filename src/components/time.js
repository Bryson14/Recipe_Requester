function Time ({handleChange, time}) {
    
    return (
        <div>
            <h1 className="page-title">Time</h1>
            How much time will this take?
            <input type="number" value={time} onChange={handleChange("totalTime")} />
        </div>
    )
}

export default Time;