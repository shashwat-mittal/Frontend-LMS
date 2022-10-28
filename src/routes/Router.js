import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const AdminLayout = lazy(() => import("../layouts/AdminLayout.js"));
const StudentLayout = lazy(() => import("../layouts/StudentLayout.js"));
/***** Admin Pages ****/

const AdminDashboard = lazy(() => import("../views/AdminDashboard.js"));
const AdmissionForm = lazy(() => import("../views/ui/Admin/AdmissionForm"));
const StudentforAdmin = lazy(() => import("../views/ui/Admin/StudentforAdmin"));
const Cbse = lazy(() => import("../views/ui/Admin/Cbse"));
const Mis = lazy(() => import("../views/ui/Admin/MIS"));
const ChangePassword = lazy(() => import("../views/ui/Admin/ChangePassword"));
const FrontOffice = lazy(() => import("../views/ui/Admin/FrontOffice"));
const Home =lazy(() => import("../components/registration/Home"))

/*****Student Pages ****/
const StudentDashboard = lazy(() => import("../views/StudentDashboard"));
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
    element: <AdminLayout />,
    children: [
      { path: "/AdminLayout", element: <Navigate to="/adminDash" /> },
      { path: "/adminDash", exact: true, element: <AdminDashboard /> },
      { path: "/admissionForm", exact: true, element: <AdmissionForm /> },
      { path: "/studentforAdmin", exact: true, element: <StudentforAdmin /> },
      { path: "/cbse", exact: true, element: <Cbse /> },
      { path: "/mis", exact: true, element: <Mis /> },
      { path: "/changepwd", exact: true, element: <ChangePassword /> },
      { path: "/frontOffice", exact: true, element: <FrontOffice /> },
    ],
  },
  {
    path: "/",
    element: <StudentLayout />,
    children: [
      { path: "/StudentLayout", element: <Navigate to="/studentDashboard" /> },
      { path: "/studentDashboard", exact: true, element: <StudentDashboard /> },
      { path: "/fees", exact: true, element: <Fees /> },
      { path: "/notice", exact: true, element: <Notice /> },
      { path: "/syllabus", exact: true, element: <Syllabus /> },
      { path: "/testreport", exact: true, element: <TestReport /> },
      { path: "/schedule", exact: true, element: <ClassSchedule /> },
    ],
  },
  
];

export default ThemeRoutes;