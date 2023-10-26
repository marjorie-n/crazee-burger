import { useContext, useState } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";
import AdminForm from "./AdminForm.js";
import SubmitButton from "./SubmitButton.js";

export default function AddForm() {
  //state
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    const AddProcduct = {
      ...newProduct,
      id: crypto.randomUUID(), //generer un id unique de facon aleatoire
    };
    handleAdd(AddProcduct);
    setNewProduct(EMPTY_PRODUCT); //vider le state apres l'ajout du produit
    displayMessage();
  };

  const displayMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    // const newValue = e.target.value;
    // const name = e.target.name;
    const { value, name } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  // affichage
  return (
    <AdminForm
      product={newProduct}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isSubmitted={isSubmitted}
    >
      <SubmitButton isSubmitted={isSubmitted} />
    </AdminForm>


  );
}