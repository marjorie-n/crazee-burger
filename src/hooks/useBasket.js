import { fakeBasket } from "../fakeData/fakeBasket.js"
import { useState } from "react"
import { deepClone, find } from "../utils/array.js"

export const useBasket = () => {
    const [basket, setBasket] = useState(fakeBasket.SMALL)
    const handleAddToBasket = (productToAdd) => {
        // copy to the state
        const basketCopy = deepClone(basket);

        const isProductAlreadyInBasket = find(productToAdd.id, basketCopy) !== undefined;
        console.log('isProductAlreadyInBasket', isProductAlreadyInBasket);
        // manipulate the state
        if (!isProductAlreadyInBasket) {
            const newBasketProduct = {
                ...productToAdd,
                quantity: 1
            };
            const basketUpdated = [newBasketProduct, ...basketCopy];
            // update the state
            setBasket(basketUpdated);
        } else {
            const indexOfBasketProductToIncrement = basket.findIndex(
                (product) => product.id === productToAdd.id
            );
            console.log('indexOfBasketProductToIncrement', indexOfBasketProductToIncrement);
            basketCopy[indexOfBasketProductToIncrement].quantity++;
            console.log('basketUpdated', basket);

            // update the state
            setBasket([...basketCopy]);
        }
    }

    return {
        basket,
        handleAddToBasket
    };
}


