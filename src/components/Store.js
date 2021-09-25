import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Stores = () => {
  const [stores, setStores] = useState([])
  const [pieData, setPie] = useState({ store: null, pie: null })


  useEffect(() => {
    const grabData = async () => {
      const storeInfo = await axios(
        'https://superpie-api.herokuapp.com/stores/'
      );

      const pieInfo = await axios(
        'https://superpie-api.herokuapp.com/pies/'
      );
      setPie({ store: storeInfo.data, pie: pieInfo.data })
    };

    grabData()
    console.log(pieData)
    // axios
    //   .get('https://superpie-api.herokuapp.com/stores/')
    //   .then(res => {
    //     setStores(res.data);
    //     console.log(res.data)
    //   }).catch(error => {
    //     console.log(error)
    //   })
  }, []);


  return (
    <div >
      {stores.map(name => (
        <div>
          <h1>{name.storename} </h1>
          <h2>Address: {name.address}</h2>
          <h2>Price: ${name.price}</h2>
          <h2>Qty: {name.quantity}</h2>
          <h2>Store Rating: {name.storerating}</h2>
          <h2>Phone Number: </h2>

        </div>
      ))}

    </div>
  )
}
