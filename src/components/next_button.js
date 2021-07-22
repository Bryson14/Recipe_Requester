import {Link} from 'react-router-dom';

function NextButton ({text, url}) {
    
    return (
        <Link to={url}>
            <button className="next-button">{text}</button>
        </Link>
    )
}

export default NextButton;