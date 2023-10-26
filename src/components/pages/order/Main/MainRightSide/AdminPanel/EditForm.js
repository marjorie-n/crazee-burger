// import { HiCursorClick } from "react-icons/hi";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.js";
import AdminForm from "./AdminForm.js";
import EditInfoMessage from "./EditInfoMessage.js";
export default function EditForm() {
  //state
  const {
    productSelected,
    setproductSelected,
    handleEdit,
    titleEditfRef
  } = useContext(OrderContext);

  // const inputTexts = getInputTextsConfig(productSelected);
  // comportements (gestionnaire d'évènement)
  const handleChange = (e) => {
    const { value, name } = e.target;
    const productToBeingUpdated = {
      ...productSelected,
      [name]: value,
    };
    setproductSelected(productToBeingUpdated);// update to form
    handleEdit(productToBeingUpdated);//updtate menu
  }
  //affichage 

  return (
    <AdminForm
      product={productSelected}
      onChange={handleChange}
      ref={titleEditfRef}
    >
      <EditInfoMessage />
    </AdminForm>

  );
}