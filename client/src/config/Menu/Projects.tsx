import AllProjects from "../../forms/PMA/Projects/AllProjects";
import MyProjects from "../../forms/PMA/Projects/MyProjects";
import MenuInterface from "../../interface/Menu";
import DisplayType from "../enum/DisplayType";
import Roles from "../enum/Roles";

const ProjectManagementAndAccounting: MenuInterface = {
  name: "Project Management",
  roles: [
    Roles.Admin,
    Roles.Lawyer
  ],
  type: DisplayType.subMenu,
  subMenu: [
    {
      name: "Projects",
      roles: [
        Roles.Admin,
        Roles.Lawyer
      ],
      type: DisplayType.subMenu,
      subMenu: [
        {
          name: "All Projects",
          path: "/AllProjects",
          roles: [Roles.Admin],
          type: DisplayType.Form,
          Object: <AllProjects />,
        },
        {
          name: "My Projects",
          roles: [
            Roles.Admin,
            Roles.Lawyer
          ],
          path: "/MyProjects",
          type: DisplayType.Form,
          Object: <MyProjects />,
        },
      ],
    }
  ],
};

export default ProjectManagementAndAccounting;
