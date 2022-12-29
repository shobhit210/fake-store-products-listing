import { Box, Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Pagination, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { getProductsList, searchItem, getProductCategories, getProductsByCategory } from '../slice/products'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import useStyles from '../shared-features/sharedStyles'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ComingSoonModal from '../components/ComingSoonModal';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductList = () => {

  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const classes = useStyles()

  const { products, isLoading, productCategories } = useSelector(store => store.products)

  //Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(9)
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentItems = products.slice(indexOfFirstPost, indexOfLastPost)

  //Modal
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handlePageChange = (event, value) => {
    setCurrentPage(value)
  }

  useEffect(() => {
    dispatch(getProductsList())
    dispatch(getProductCategories())
  }, [])

  useEffect(() => {
    dispatch(searchItem(search))
  }, [search, dispatch])

  useEffect(() => {
    if (category) {
      (category === 'all') ?
        dispatch(getProductsList()) :
        dispatch(getProductsByCategory(category))
    }
  }, [category, dispatch])

  const handleProductSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  if (isLoading) {
    return (
      <Box className={classes.loadingParent}>
        <Typography align="center" >
          <ShoppingBagOutlinedIcon /><br />
          Hang on!!! <br />
          Loading Products...
        </Typography>
      </Box>
    )
  }

  return (
    <>
      <Box sx={{ padding: '40px 100px' }}>
        <Box className={classes.filtersParent}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                fullWidth
                variant="outlined"
                color="secondary"
                label="Search Products"
                name="products"
                value={search}
                onChange={handleProductSearch}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchOutlinedIcon color="secondary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
              <FormControl fullWidth>
                <InputLabel color="secondary">Category</InputLabel>
                <Select
                  color="secondary"
                  value={category}
                  label="Category"
                  onChange={handleCategoryChange}
                >
                  <MenuItem value={'all'}>All</MenuItem>
                  {
                    productCategories && productCategories.map((item, key) => {
                      return <MenuItem value={item} key={item + key}>{item}</MenuItem>
                    })
                  }
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
                sx={{ padding: '13.5px 0' }}
                onClick={handleOpen}
                startIcon={<FavoriteIcon />}
              >
                View Popular Products</Button>
            </Grid>

          </Grid>
        </Box>
        <Grid container spacing={8}>
          {
            currentItems && currentItems.map((item) => {
              return (<Grid item xs={12} sm={6} md={4} lg={4} key={item.id}>

                <ProductCard item={item} />

              </Grid>)
            })
          }
        </Grid>

        <Box className={classes.paginationParent}>
          <Pagination
            color="secondary"
            count={Math.ceil(products.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            sx={{ mt: 5 }}
          />
        </Box>

      </Box>
      {
        open ? <ComingSoonModal open={open} handleClose={handleClose} /> : ''
      }
    </>
  )
}

export default ProductList