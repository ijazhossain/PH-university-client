import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourses from "../pages/faculty/OfferedCourses";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCourses />,
  },
];
