import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array"; //                         ../utils/array

export const useMenu = () => {
    const [menu, setMenu] = useState(fakeMenu.MEDIUM);
    // comportements (gestionnaire de state)
    const handleAdd = (newProduct) => {
        // 1. copie du tableau
        const menuCopy = deepClone(menu);
        // 2. manip du tableau
        const menuUpdated = [...menuCopy, newProduct];
        // 3. mise à jour du state
        console.log(menuUpdated);
        setMenu(menuUpdated);
    };

    const handleDelete = (idOfProductToDelete) => {
        // alert(idOfProductToDelete);
        //copie du state
        const menuCopy = deepClone(menu);
        // manip du state
        const menuUpdated = menuCopy.filter(
            (product) => product.id !== idOfProductToDelete
        );

        // mise à jour du state
        setMenu(menuUpdated);
    };

    const handleEdit = (productToEdit) => {
        //@TODO: find a clearer implementation
        console.log("productToEdit:", productToEdit);
        // 1. copie du state
        const menuCopy = deepClone(menu);
        // 2. manip du state
        const indexOfProductToEdit = menu.findIndex(
            (product) => product.id === productToEdit.id)
        console.log("indexOfProductToEdit:", indexOfProductToEdit);
        menuCopy[indexOfProductToEdit] = productToEdit;
        // 3. mise à jour du state
        setMenu(menuCopy);
    }

    const resetMenu = () => {
        setMenu(fakeMenu.MEDIUM);
    }
   // partage de méthodes
    return {
        menu,
        resetMenu,
        handleAdd,
        handleEdit,
        handleDelete
    }


}