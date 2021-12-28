import './Input.css';

function Input(props) {
  return (
    <div className="input">
      <label htmlFor={props.name}>{props.label}</label>
      <input onChange={props.onChange} id={props.name} type={props.type} />
    </div>
  );
}

export default Input;