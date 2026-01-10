import { AppBar, IconButton, Toolbar, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./AppBar.css";
import { useState } from "react";
import ScrollElement from "./scroll/scrollElement";
import ScrollButtons from "./scroll/scrollButtons";

const PortfolioAppBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <AppBar className="portfolioAppBar">
      <Toolbar>
        <IconButton
          className="appBarIconButton"
          size="large"
          aria-label="menu"
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          <MenuIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          className="portfolioMenu"
        >
          <MenuItem
            onClick={() => {
              ScrollElement("presentation");
              setAnchorEl(null);
            }}
          >
            Presentation
          </MenuItem>
          <MenuItem
            onClick={() => {
              ScrollElement("about");
              setAnchorEl(null);
            }}
          >
            About Me
          </MenuItem>
          <MenuItem
            onClick={() => {
              ScrollElement("education");
              setAnchorEl(null);
            }}
          >
            Certificates & Grants
          </MenuItem>
          <MenuItem
            onClick={() => {
              ScrollElement("experience");
              setAnchorEl(null);
            }}
          >
            Experience
          </MenuItem>
          <MenuItem
            onClick={() => {
              ScrollElement("skills");
              setAnchorEl(null);
            }}
          >
            Skills
          </MenuItem>
          <MenuItem
            onClick={() => {
              ScrollElement("interest");
              setAnchorEl(null);
            }}
          >
            Areas Of Interest
          </MenuItem>
          <MenuItem
            onClick={() => {
              ScrollElement("publications");
              setAnchorEl(null);
            }}
          >
            Publications
          </MenuItem>
          <MenuItem
            onClick={() => {
              ScrollElement("projects");
              setAnchorEl(null);
            }}
          >
            Projects
          </MenuItem>
        </Menu>
        <div className="toolbarContent">
          {ScrollButtons("presentation", "Presentation")}
          {ScrollButtons("about", "About Me")}
          {ScrollButtons("education", "Certificates & Grants")}
          {ScrollButtons("experience", "Experience")}
          {ScrollButtons("skills", "Skills")}
          {ScrollButtons("interest", "Areas Of Interest")}
          {ScrollButtons("publications", "Publications")}
          {ScrollButtons("projects", "Projects")}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default PortfolioAppBar;
