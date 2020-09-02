import {Product} from "../types.ts";

let products : Product[] = [
    {
        id: "1",
        name: "Abishek",
        description:"My Name",
        price: 19
    },
    {
        id: "2",
        name: "Melvin",
        description:"My Name",
        price: 13
    }
]

export const getProducts =  ({response}: {response:any}) => {
    response.body = {
        success: true,
        data: products

    }
}