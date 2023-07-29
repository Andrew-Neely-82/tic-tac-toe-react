import { DarkModeContext } from "../../../context/DarkModeContext";
import { Button } from "@mui/material";
import { useContext } from "react";
import "./style.scss";

const Box = ({ value, onClick }) => {
  const { darkMode } = useContext(DarkModeContext);
  const style = `box ${value === "X" ? "x" : "o"} ${darkMode ? "dark" : "light"}`;

  const props = {
    className: style,
    variant: "contained",
    onClick: onClick,
  };

  return <Button {...props}>{value}</Button>;
};

export default Box;
