import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { getProductsList } from '../slice/products'

const ProductList = () => {

  const dispatch = useDispatch()

  const { products, isLoading } = useSelector(store => store.products)
  // console.log("Products Frontend", products)
  // console.log("Loading state", isLoading)

  useEffect(() => {
    dispatch(getProductsList())
  }, [])

  if (isLoading) {
    return (
      <>
        <Typography variant="h5" gutterBottom align='center'>
          Loading items...
        </Typography>
      </>
    )
  }

  return (
    <>
      <Box sx={{ padding: '40px 100px' }}>
        ProductList
        <Grid container spacing={8}>
          {
            products && products.map((item) => {
              return (<Grid item xs={12} sm={6} md={4} lg={4} key={item.id}>

                <ProductCard item={item} />

              </Grid>)
            })
          }

        </Grid>
      </Box>
    </>
  )
}

export default ProductList