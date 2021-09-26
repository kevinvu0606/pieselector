import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid, Card, CardContent, Divider, CardHeader, Typography, ListItemAvatar, Avatar, ListItem, ListItemText } from '@material-ui/core';
import { Language, Star, Phone, Fastfood, AttachMoney } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 500,
  },
  card: {
    margin: 11,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  websiteAvatar: {
    color: '#fff',
    backgroundColor: '#222'
  },
  phoneAvatar: {
    color: '#fff',
    backgroundColor: '#006400'
  },
  ratingAvatar: {
    color: '#fff',
    backgroundColor: '#FFD700'
  },
  quantityAvatar: {
    color: '#fff',
    backgroundColor: '#008B8B'
  },
  priceAvatar: {
    color: '#fff',
    backgroundColor: '#800000'
  },


}))

export const Stores = () => {
  // const [stores, setStores] = useState([])
  const [pieData, setPie] = useState({ store: null, pie: null })
  const [isLoading, setLoading] = useState(true);
  const classes = useStyles();

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
    <>
      <Typography variant='h4' align='center'>Welcome TyroHealth! Here are some pies you can choose from today </Typography>
      <Divider />
      <Grid container alignItems="center" justifyContent="center" >
        {
          pieData.store.map(store =>
            <Grid item xs='3' className={classes.card}>
              <Card variant='outlined' className={classes.root}>
                <CardContent>
                  <CardHeader
                    title={store.storename}
                    subheader={store.address}
                  />

                  <Divider />
                  <Typography variant='h6'>{pieLookUp(store.pieId)}</Typography>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.priceAvatar}><AttachMoney fontSize='small' /></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={store.price} />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.quantityAvatar}><Fastfood fontSize='small' /></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={store.quantity} />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.ratingAvatar} ><Star fontSize='small' /></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={store.storerating} />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.phoneAvatar}><Phone fontSize='small' /></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={store.phonenumber} />
                  </ListItem>

                  <ListItem>
                    <a href={store.website} target="_blank">
                      <ListItemAvatar>
                        <Avatar className={classes.websiteAvatar} ><Language fontSize='small' /></Avatar>
                      </ListItemAvatar>
                    </a>
                    <a href={store.website} target="_blank">
                      <ListItemText primary={store.website} />
                    </a>
                  </ListItem>

                </CardContent>
              </Card>
            </Grid>
          )
        }
      </Grid>
    </>
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