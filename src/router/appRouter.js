import ExtractionDistribution from './../screens/extractionDistribution/extractionDistribution';
import ExtractionStep from './../screens/extractionStep/ExtractionStep';
import Extraction from './../screens/headers/extraction';
import TemplateForm from './../screens/templateForm/TemplateForm';

//minhas rotas
import ListProjects from '../screens/project/project';
import InviteResearchers from '../screens/inviteResearchers/inviteResearchers';
import RegisterProject from '../screens/project/registerProject';
import UpdateProject from '../screens/project/updateProject';
import Protocol from '../screens/protocol/protocol';
import UserProfile from '../screens/userProfile/userProfile';
import IdentificationResume from '../screens/identification/identificationResume'

//teste
import Test from '../components/projectDefinition/teste'

const appRoutes = [
    {
      name: "Home",
      path: "/",
      component: ListProjects,
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
      name: "UserProfile",
      path: "/userprofile",
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
      name: "RegisterProject",
      path: "/user/newproject",
      component: RegisterProject,
      exact: false,
    },{
      name: "Teste",
      path: "/teste",
      component: Test,
      exact: false
    },
    {
      name: "UpdateProject",
      path: "/project",
      component: UpdateProject,
      exact: true,
    },
    {
      name: "Protocol",
      path: "/project/protocol",
      component: Protocol,
      exact: false,
    },
    {
      name: "Identification",
      path: "/identification",
      component: IdentificationResume,
      exact: true,
    }
];

  export default appRoutes;
  