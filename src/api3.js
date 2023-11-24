import axios from "axios";

// import {toastError, toastSuccess} from '../styled/toastStyle'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

export const thirdapi = async(name,description) => {
   
     let thirdres = []
    await axios.post("https://a85f-182-186-105-167.ngrok-free.app/product/category-create",{category_name:name,category_description:description}).then((res)=>{
        
        thirdres = res
    })

  return thirdres
}



