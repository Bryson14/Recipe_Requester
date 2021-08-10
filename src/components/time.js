function Time({ handleChange, time, cookTime, prepTime, nextStep, name }) {
  function enterKey(e) {
    if (e.key === "Enter" && time > 0 && prepTime > 0 && cookTime > 0) {
      nextStep();
    }
  }

  return (
    <div>
      <h1 className="page-title">Time</h1>
      <p>
        What's the total time to make <i>{name}</i>?
      </p>
      <input
        type="number"
        pattern="\d*"
        className="form-control"
        placeholder="Total Time in Minutes"
        value={time}
        onKeyDown={enterKey}
        onChange={handleChange("totalTime")}
      />

      <p>
        How much time is needed to prep <i>{name}</i>?
      </p>
      <input
        type="number"
        pattern="\d*"
        className="form-control"
        placeholder="Prep Time in Minutes"
        value={prepTime}
        onKeyDown={enterKey}
        onChange={handleChange("prepTime")}
      />

      <p>
        How long does <i>{name}</i> need to cook for?
      </p>
      <input
        type="number"
        pattern="\d*"
        className="form-control"
        placeholder="Cook Time in Minutes"
        value={cookTime}
        onKeyDown={enterKey}
        onChange={handleChange("cookTime")}
      />
    </div>
  );
}

export default Time;
