import "./style.scss";

const Box = ({ value, onClick }) => {
  const style = value === "X" ? "box x" : "box o";

  const props = {
    className: style,
    onClick: onClick,
  };

  return <button {...props}>X</button>;
};
export default Box;
