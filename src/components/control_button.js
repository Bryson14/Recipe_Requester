function ControlButton ({func, text}) {

    return (
        <button onClick={func} className="next-button">{text}</button>
    )   
}

export default ControlButton;