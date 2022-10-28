import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));
const Student = lazy(() => import("../layouts/Student.js"));
/***** Admin Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Home =lazy(() => import("../components/registration/Home"))

/*****Student Pages ****/
const StudentDash = lazy(() => import("../views/StudentDashboard"));
const ClassSchedule = lazy(() => import("../views/ui/Student/ClassSchedule.js"));
const Fees = lazy(() => import("../views/ui/Student/Fees.js"));
const Notice = lazy(() => import("../views/ui/Student/NoticeBoard"));
const Syllabus = lazy(() => import("../views/ui/Student/Syllabus"));
const TestReport = lazy(() => import("../views/ui/Student/TestReport"));




/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/FullLayout", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
    ],
  },
  {
    path: "/",
    element: <Student />,
    children: [
      { path: "/Student", element: <Navigate to="/studentDash" /> },
      { path: "/studentDash", exact: true, element: <StudentDash /> },
      { path: "/fees", exact: true, element: <Fees /> },
      { path: "/notice", exact: true, element: <Notice /> },
      { path: "/syllabus", exact: true, element: <Syllabus /> },
      { path: "/testreport", exact: true, element: <TestReport /> },
      { path: "/schedule", exact: true, element: <ClassSchedule /> },
    ],
  },
  
];

export default ThemeRoutes;