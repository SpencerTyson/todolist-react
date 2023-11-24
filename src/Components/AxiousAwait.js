import React, { useEffect } from 'react'

import { getProducts } from '../api'

const AxiousAwait = () => {
  

    useEffect(()=>{
        getApi()
    },[])

    const getApi =async()=>{
        const response = await getProducts()
        console.log("responseresponse",response)
        
        
    }

  return (
    <>

    </>
  )
}

export default AxiousAwait