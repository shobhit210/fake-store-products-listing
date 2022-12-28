import { Box, Card, CardActionArea, CardContent, CardMedia, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { getProductsList, searchItem } from '../slice/products'

const ProductList = () => {

  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')

  const { products, isLoading } = useSelector(store => store.products)
  // console.log("Products Frontend", products)
  // console.log("Loading state", isLoading)

  useEffect(() => {
    dispatch(getProductsList())
  }, [])

  useEffect(() => {
      dispatch(searchItem(search))
  }, [search, dispatch])


  const handleProductSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

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
        <Box sx={{ backgroundColor: '#fff', width: '100%', mb: 5 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                fullWidth
                variant="outlined"
                label="Search Products"
                name="products"
                value={search}
                onChange={handleProductSearch}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={handleCategoryChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                label="Outlined"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>
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