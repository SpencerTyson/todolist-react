import axios from "axios";


export const getProducts =async()=>{
    let response = []

    await axios.get("https://dummyjson.com/products").then((res)=>{
        response= res
    })

    return response 
}