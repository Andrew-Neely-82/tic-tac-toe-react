import './style.scss'

const ResetButton = ({ resetBoard }) => {
  const props = {
    className: "ResetButton__",
    onClick: resetBoard,
  };
  return <button {...props}>Reset</button>;
};
export default ResetButton;
