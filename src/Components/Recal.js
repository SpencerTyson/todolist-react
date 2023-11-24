import React, { useEffect } from 'react'
import { getApi } from '../api2'

const Recal = () => {

    useEffect(()=>{
        ammar()
    },[])

   const ammar =async()=>{
    const response1 = await getApi()
    console.log("response",response1)
   }

  return (
    <>

    </>
  )
}

export default Recal