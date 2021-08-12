const RenderRecipe = ({
  name,
  category,
  totaltime,
  preptime,
  cooktime,
  ingredients,
  instructions,
  recipeBook,
}) => {
  debugger;

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  return (
    <div className="container my-4 card">
      <div className="row">
        <h2 className="card-titled card-header">{name}</h2>
        <p className="card-subtitle my-2 text-muted">
          Category: <b>{category}</b> Time: <b>{totaltime} min.</b> Prep Time:{" "}
          <b>{preptime} min.</b> Cook Time: <b>{cooktime} min.</b>
        </p>
        <div className="col-lg-6 col-md-12">
          <h4 className="card-subtitle">Ingredients</h4>
          <ol className="list-group">
            {ingredients.map((ingre, idx) => (
              <li className="list-group-item" key={idx}>
                {ingre}
              </li>
            ))}
          </ol>
        </div>
        <div className="col-lg-6 col-md-12">
          <h4 className="card-subtitle">Instructions</h4>
          <ol className="list-group">
            {instructions.map((instruc, idx) => (
              <li className="list-group-item" key={idx}>
                {instruc}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {recipeBook ? (
        <></>
      ) : (
        <p className="lead">Thank you for you recipe! Created {today}</p>
      )}
    </div>
  );
};

export default RenderRecipe;
