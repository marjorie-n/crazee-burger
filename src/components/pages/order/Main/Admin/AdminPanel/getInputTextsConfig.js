import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
export const getInputTextsConfig = (newProduct) => [
    {
        id: "0",
        name: "title",
        value: newProduct.title,
        placeholder: "Nom du produit (ex.Super Burger)",
        version: "minimalist",
        Icon: <FaHamburger />,
    },
    {
        id: "1",
        name: "imageSource",
        value: newProduct.imageSource,
        placeholder: "Lien URL d'une image",
        version: "minimalist",
        Icon: <BsFillCameraFill />,
    },
    {
        id: "2",
        name: "price",
        value: newProduct.price ? newProduct.price : "",
        placeholder: "Price",
        version: "minimalist",
        Icon: <MdOutlineEuro />,
    }
]