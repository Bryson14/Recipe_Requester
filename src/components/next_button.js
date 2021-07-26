import {Link} from 'react-router-dom';

function NextButton ({text, url, dataName, data}) {
    debugger;

    if (dataName == null && data == null) {
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
                  dataName: data,
                },
              }}>
                  <button className="next-button">{text}</button>
            </Link>
        )
    }    
}

export default NextButton;