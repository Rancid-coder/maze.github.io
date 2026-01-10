import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import handleClick from "./handleClick/HandleClick";
import "./BottomBar.css";

interface Props {
  githubUrl: string;
  linkedinUrl: string;
}

const PortfolioBottomBar = ({ githubUrl, linkedinUrl }: Props) => {
  return (
    <BottomNavigation showLabels className="bottom-nav">
      <BottomNavigationAction
        label="Github"
        icon={<FaGithub />}
        onClick={() => handleClick(githubUrl)}
      />
      <BottomNavigationAction
        label="Linkedin"
        icon={<FaLinkedin />}
        onClick={() => handleClick(linkedinUrl)}
      />
    </BottomNavigation>
  );
};

export default PortfolioBottomBar;
