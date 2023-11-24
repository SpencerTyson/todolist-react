import axios from "axios";


export const getApi = async() => {
    let response1 = []

    await axios.get("https://dummyjson.com/products/1").then((res) => {
        response1 = res
    }) 

    return response1
}