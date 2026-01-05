import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home";
import ProjectDetails from "./Pages/ProjectDetails";

export const router = createBrowserRouter([
  {
    path:"/",
    Component: Home    
  },
  {
    path:"projects/:id",
    Component: ProjectDetails,    
  },
]);