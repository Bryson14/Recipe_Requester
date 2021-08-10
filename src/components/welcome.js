import pic from "../images/roberto-valdivia-rcUw6b4iYe0-unsplash.jpg";
import { useHistory } from "react-router-dom";

function Welcome({ nextStep, requester }) {
  let history = useHistory();

  function goToRecipes(e) {
    history.push("/recipes");
  }

  return (
    <div>
      <div className="vert-split-div left">
        <h3 className="span-left">Recipe Grabber</h3>
        <button onClick={nextStep} className="span-left btn btn-warning">
          Start
        </button>
        <h1 className="span-left">{requester} wants a recipe from you!</h1>
        <p className="span-left">
          5 Minutes now saves a recipe for a generation.
        </p>
        <img
          className="img-vert-half span-right"
          src={pic}
          alt="Homemade pizza which has been passed down for generations"
        />
      </div>
      <div>
        <button className="btn btn-secondary" onClick={goToRecipes}>
          See Recipe Book!
        </button>
      </div>
    </div>
  );
}

export default Welcome;
