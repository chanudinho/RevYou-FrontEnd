import ExtractionDistribution from './../screens/extractionDistribution/extractionDistribution';
import ExtractionStep from './../screens/extractionStep/ExtractionStep';
import Extraction from './../screens/headers/extraction';
import TemplateForm from './../screens/templateForm/TemplateForm';

//minhas rotas
import ListProjects from '../screens/project/project';
import InviteResearchers from '../screens/inviteResearchers/inviteResearchers';
import registerProject from '../screens/project/registerProject'
import UserProfile from '../components/projectDefinition/userProfile';

const appRoutes = [
    {
      name: "Home",
      path: "/",
      component: Extraction,
      exact: true
    },
    {
      name: "Extraction",
      path: "/extraction",
      component: Extraction,
      exact: false
    },
    {
      name: "Distribution",
      path: "/extraction/distribution",
      component: ExtractionDistribution,
      exact: true
    },
    {
      name: "Step",
      path: "/extraction/step/:id?",
      component: ExtractionStep,
      exact: false,
    },
    {
      name: "TemplateForm",
      path: "/extraction/templateForm/:id?",
      component: TemplateForm,
      exact: false,
    },
    {
      name: "ListProjects",
      path: "/user/listprojects",
      component: ListProjects,
      exact: false,
    },
    {
      name: "UserProfile",
      path: "/user/userprofile",
      component: UserProfile,
      exact: false,
    },
    {
      name: "InviteResearchers",
      path: "/project/inviteresearchers",
      component: InviteResearchers,
      exact: false,
    },
    {
      name: "InviteResearchers",
      path: "/user/newproject",
      component: registerProject,
      exact: false,
    }
];

  export default appRoutes;
  