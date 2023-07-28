import Button from "@mui/material/Button";

import "./style.scss";

const ResetButton = ({ resetBoard }) => {
  const props = {
    className: "ResetButton__",
    variant: "contained",
    onClick: resetBoard,
  };
  return <Button {...props}>Reset</Button>;
};
export default ResetButton;
