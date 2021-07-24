import {Link} from 'react-router-dom';

function NextButton ({text, url, state}) {

    if (state == null) {
        return (
        <Link to={url}>
            <button className="next-button">{text}</button>
        </Link>
    )

    } else {
        return (
            <Link to={{
                pathname: url,
                state: {
                  data: state,
                },
              }}>
                  <button className="next-button">{text}</button>
            </Link>
        )
    }    
}

export default NextButton;