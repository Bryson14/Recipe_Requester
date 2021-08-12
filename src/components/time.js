import StepNumber from "./step_number";

function Time({ handleChange, time, cookTime, prepTime, nextStep, name }) {
  function enterKey(e) {
    if (e.key === "Enter" && time > 0 && prepTime > 0 && cookTime > 0) {
      nextStep();
    }
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row my-2">
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
            <h2>Time</h2>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <StepNumber number="Step 3 of 5" className="ml-4" />
          </div>
        </div>
      </div>
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
