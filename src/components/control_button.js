function ControlButton({ func, text }) {
  return (
    <button onClick={func} className="btn-spacer btn btn-primary">
      {text}
    </button>
  );
}

export default ControlButton;
