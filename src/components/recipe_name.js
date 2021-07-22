import {Link} from 'react-router-dom';

function Naming () {
    
    return (
        <div className="vert-split-div">
            <h3 className="span-left">Recipe Grabber</h3>
            <Link to="/category">
                <button className="span-left"></button>
            </Link>
            <h1  className="span-left">What's the name of your recipe?</h1>
            <input type="text" className="span-left"></input>
            

        </div>
    )
}

export default Naming;