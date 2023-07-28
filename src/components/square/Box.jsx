import Button from "@mui/material/Button";
import "./style.scss";

const Box = ({ value, onClick }) => {
  const style = value === "X" ? "box x" : "box o";

  const props = {
    className: style,
    variant: "contained",
    onClick: onClick,
  };

  return <Button {...props}>{value}</Button>;
};
export default Box;
