import React, { useEffect, useState } from 'react'
import { Avatar, Box, Button, IconButton, Tooltip, Typography } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetail } from '../slice/products'
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import useStyles from '../shared-features/sharedStyles'
import ComingSoonModal from '../components/ComingSoonModal'

const ProductDetail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles()
  const { productDetail, isLoading } = useSelector(store => store.products)
  console.log("Product detail front end", productDetail)

  //Modal
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    dispatch(getProductDetail(id))
  }, [])

  if (isLoading) {
    return (
      <>
        <Box className={classes.productDetailParent}>
          <Box className={classes.innerProductDetailParent}>
            <Typography variant="h5" gutterBottom align='center' sx={{width: '100%', mt: 3}}>
              Loading product details...
            </Typography>
          </Box>
        </Box>
      </>
    )
  }

  return (
    <Box className={classes.productDetailParent}>
      <Box className={classes.innerProductDetailParent}>
        <div className={classes.backButtonParent}>
          <Tooltip title="Go Back">
            <IconButton
              size="large"
              color="secondary"
              onClick={() => navigate('/')}
            >
              <ArrowBackIosNewIcon color="secondary" />
            </IconButton>
          </Tooltip>
        </div>
        <Box className={classes.imageParent}>
          <Avatar
            className={classes.productImage}
            variant="square"
            alt="Product Image"
            src={productDetail && productDetail.image}
          />
        </Box>
        <Box className={classes.productDetails}>
          <Box className={classes.headerHR} />
          <Typography variant="h3" gutterBottom>
            {productDetail && productDetail.title}
          </Typography>
          <Typography variant="h4" color="secondary" gutterBottom>
            ${productDetail && productDetail.price}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {productDetail && productDetail.category}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <StarIcon color="secondary" />
            <StarIcon color="secondary" />
            <StarIcon color="secondary" />
            &nbsp;&nbsp;
            {productDetail && productDetail.rating && productDetail.rating.rate} / 5
          </Typography>
          <Typography variant="body2" color="secondary" gutterBottom>
            {productDetail && productDetail.description}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Available in stock: {productDetail && productDetail.rating && productDetail.rating.count}
          </Typography>
          <Button variant="contained" color="secondary" onClick={handleOpen}>Add to cart</Button>
        </Box>
      </Box>
      {
        open ? <ComingSoonModal open={open} handleClose={handleClose} /> : ''
      }
    </Box>
  )
}

export default ProductDetail