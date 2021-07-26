function Time ({handleChange, time}) {
    
    return (
        <div>
            How much time will this take?
            <input type="number" value={time} onChange={handleChange("totalTime")} />
        </div>
    )
}

export default Time;