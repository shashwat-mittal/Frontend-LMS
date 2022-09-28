import React from "react";
import {
  Navbar,
  Collapse,
  NavbarBrand,
  Button,
} from "reactstrap";
import { ReactComponent as LogoWhite } from "../assets/images/logos/xtremelogowhite.svg";
import { Button as Btn}  from "@mui/material";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  return (
    <Navbar color="dark" dark expand="md">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          <LogoWhite />
        </NavbarBrand>
        <Button
          color="dark"
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="dark"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>
      {/* const { date, time, wish } = useDate(); */}
      <Collapse navbar isOpen={isOpen}>
        <Btn variant="outlined" size="small" style={{color:'#eeeee4',borderColor:'#eeeee4'}}>Log Out</Btn>
      </Collapse>
    </Navbar>
  );
};

export default Header;
