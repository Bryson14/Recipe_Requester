function Time ({handleChange, time, nextStep}) {

    function enterKey(e) {
        if (e.key === 'Enter') {
            nextStep();
        }
    }
    
    return (
        <div>
            <h1 className="page-title">Time</h1>
            How much time will this take?
            <input type="number" value={time} onKeyDown={enterKey} onChange={handleChange("totalTime")} />
        </div>
    )
}

export default Time;