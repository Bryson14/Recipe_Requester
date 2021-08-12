import StepNumber from "./step_number";

function RecipeName({ handleChange, name, nextStep }) {
  function enterKey(e) {
    if (e.key === "Enter") {
      nextStep();
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row my-2">
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
            <h2>What is the name of your recipe?</h2>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <StepNumber number="Step 1 of 5" className="ml-4" />
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <p>
                Something clever like{" "}
                <b>
                  <i>Grandma's Killer Cinnamon Orange Rolls</i>
                </b>{" "}
                sounds better than just{" "}
                <b>
                  <i>Cinnamon Rolls</i>
                </b>
                .
              </p>
            </div>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={handleChange("name")}
                maxLength="100"
                onKeyDown={enterKey}
                autoFocus
                placeholder="Recipe Name"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeName;
