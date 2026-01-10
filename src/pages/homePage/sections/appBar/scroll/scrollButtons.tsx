import { Button } from "@mui/material";
import ScrollElement from "./scrollElement";
import "./Buttons.css";
const ScrollButtons = (id: string, name: string) => {
  return (
    <Button className="button" onClick={() => ScrollElement(id)}>
      {name}
    </Button>
  );
};

export default ScrollButtons;
