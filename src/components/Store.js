import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Stores = () => {
  const [stores, setStores] = useState([])
  const [pieData, setPie] = useState({ store: null, pie: null })
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const grabData = async () => {
      const storeInfo = await axios(
        'https://superpie-api.herokuapp.com/stores?_limit=5'
      );
      const pieInfo = await axios(
        'https://superpie-api.herokuapp.com/pies/'
      );
      setPie({ store: storeInfo.data, pie: pieInfo.data })
      setLoading(false)
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

  function pieLookUp(id) {
    for (let i = 0; i < pieData.pie.length; i++) {
      if (pieData.pie[i].id == id) {
        return pieData.pie[i].name
      }
    }
  }

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div>
      {
        pieData.store.map(store =>
          <div>
            <h1>{store.storename} </h1>
            <h2>Address: {store.address}</h2>
            <h2>Price: ${store.price}</h2>
            <h2>Qty: {store.quantity}</h2>
            <h2>Store Rating: {store.storerating}</h2>
            <h2>Phone Number: </h2>
            <h2>Pie: {pieLookUp(store.pieId)}</h2>
            <h1>------</h1>
          </div>
        )
      }
    </div>
  )
}



// {stores.map(name => (
//   <div>
//     <h1>{name.storename} </h1>
//     <h2>Address: {name.address}</h2>
//     <h2>Price: ${name.price}</h2>
//     <h2>Qty: {name.quantity}</h2>
//     <h2>Store Rating: {name.storerating}</h2>
//     <h2>Phone Number: </h2>

//   </div>
// ))}