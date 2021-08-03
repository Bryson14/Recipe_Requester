function Time ({handleChange, time, cookTime, prepTime, nextStep}) {

    function enterKey(e) {
        if (e.key === 'Enter' && time > 0 && prepTime > 0 && cookTime > 0) {
            nextStep();
        }
    }
    
    return (
        <div>
            <h1 className="page-title">Time</h1>
            <p>What's the total time to cook this?</p>
            <input type="number" value={time} onKeyDown={enterKey} onChange={handleChange("totalTime")} />

            <p>How much time to prep this meal?</p>
            <input type="number" value={prepTime} onKeyDown={enterKey} onChange={handleChange("prepTime")} />

            <p>How long does this meal need to cook for?</p>
            <input type="number" value={cookTime} onKeyDown={enterKey} onChange={handleChange("cookTime")} />
        </div>
    )
}

export default Time;