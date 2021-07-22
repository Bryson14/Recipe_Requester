import {Link} from 'react-router-dom';

function Welcome ({requester}) {
    
    return (
        <div className="vert-split-div">
            <h3 className="span-left">Recipe Grabber</h3>
            <Link to="/recipe-name">
                <button className="span-left">Start</button>
            </Link>
            <h1  className="span-left">{requester} wants a recipe from you!</h1>
            <p  className="span-left">5 Minutes now saves a recipe for a generation.</p>
            <img  className="img-vert-half span-right" src={process.env.PUBLIC_URL + '/images/roberto-valdivia-rcUw6b4iYe0-unsplash.jpg'} 
            alt="Homemade pizza which has been passed down for generations" />

        </div>
    )
}

export default Welcome;