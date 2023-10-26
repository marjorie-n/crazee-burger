import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
<<<<<<< HEAD
import AddForm from "../AdminPanel/AddForm";
=======
import AddForm from "./AdminPanel/AddForm.js";
>>>>>>> 849b697a96b2b000868459b6157ab2fd20fedd83
import EditForm from "../AdminPanel/EditForm.js"
import HintMessage from "../AdminPanel/HintMessage.js"
export const getTabsConfig = (hasAlreadyBeenClicked) => [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    Content: <AddForm />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    Content: hasAlreadyBeenClicked ? <EditForm /> : <HintMessage />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);
