import { Button, Nav, NavItem } from "reactstrap";
import Logo from "../Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/admindashboard",
    icon: "bi bi-bar-chart-fill",
  },
  {
    title: "Admission Forms", //Admission Form Sale Report
    href: "/admissionForm",
    icon: "bi bi-file-earmark-spreadsheet",
  },
  {
    title: "Student (Academic)",
    href: "/studentforAdmin",
    icon: "bi bi-person-workspace",
  },
  {
    title: "CBSE Examination",
    href: "/cbse",
    icon: "bi bi-journal-text",
  },
  {
    title: "New Teacher",
    href: "/newTeacher",
    icon: "bbi bi-person",
  },
  //Upload Notice and Time Table in MIS Frontend Already Exist
  // {
  //   title: "MIS",
  //   href: "/mis",
  //   icon: "bbi bi-bar-chart-line",
  // },

  //Change Password Frontend Already Exist
  // {
  //   title: "Change Password",
  //   href: "/changepwd",
  //   icon: "bi bi-pencil-square",
  // }, 

];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}>
                <span className="ms-3 d-inline-block">{navi.title}</span>
                </i>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
