import { fakeBasket } from "../fakeData/fakeBasket.js"
import { useState } from "react"

export const useBasket = () => {
    const [basket] = useState(fakeBasket.LARGE_WEIRD)
    return { basket }
}