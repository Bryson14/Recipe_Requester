function ControlButton ({func, text}) {

    return (
        <button onClick={func} className="next-button btn btn-primary">{text}</button>
    )   
}

export default ControlButton;