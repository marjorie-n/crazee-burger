import { fakeBasket } from "../fakeData/fakeBasket.js"
import { useState } from "react"
import { deepClone, find } from "../utils/array.js"

export const useBasket = () => {
    const [basket, setBasket] = useState(fakeBasket.SMALL)
    const handleAddToBasket = (productToAdd) => {
        console.log("product to add", productToAdd);
        //copie du state
        const basketCopy = deepClone(basket);
        const isProductAlreadyInBasket = find(productToAdd.id, basketCopy) !== undefined;
        console.log("isProductAlreadyInBasket:", isProductAlreadyInBasket);
        // manip de la copie du state
        //si le produit n'est pas dans le panier, on l'ajoute
        if (!isProductAlreadyInBasket) {
            const newBasketProduct = {
                ...productToAdd,
                quantity: 1
            }
            const basketUpdated = [newBasketProduct, ...basketCopy];
            console.log("basketUpdated", basketUpdated);
            //mise à jour du state
            setBasket(basketUpdated);
            return;
        }
    }
    return {
        basket,
        handleAddToBasket
    }
}
