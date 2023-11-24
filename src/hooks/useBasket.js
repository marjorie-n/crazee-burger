import { fakeBasket } from "../fakeData/fakeBasket.js"
import { useState } from "react"
import { deepClone, find, findIndex } from "../utils/array.js"

export const useBasket = () => {
    const [basket, setBasket] = useState(fakeBasket.EMPTY)
    const handleAddToBasket = (productToAdd) => {
        const basketCopy = deepClone(basket);

        const productFoundInBasket
            = find(productToAdd.id, basketCopy);
        // if product is not in basket
        if (!productFoundInBasket
        ) {
            newProductToBasket()
            return;
        }
        // if product is already in basket
        IncrementProductAlreadyInBasket(productToAdd, basketCopy)
        function newProductToBasket() {
            const newBasketProduct = {
                ...productToAdd,
                quantity: 1
            }
            const basketUpdated = [newBasketProduct, ...basketCopy]
            setBasket(basketUpdated)
        }

        function IncrementProductAlreadyInBasket() {
            const indexOfBasketProductToIncrement = findIndex(
                productToAdd.id,
                basketCopy
            )
            basketCopy[indexOfBasketProductToIncrement].quantity++
            setBasket([...basketCopy])
        }
    }
    return {
        basket,
        handleAddToBasket
    };
}




