import React, { useEffect, useState } from 'react'
import { Avatar, Box, Button, IconButton, Tooltip, Typography } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetail } from '../slice/products'
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import useStyles from '../shared-features/sharedStyles'
import ComingSoonModal from '../components/ComingSoonModal'
import LinesEllipsis from 'react-lines-ellipsis'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const ProductDetail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles()
  const { productDetail, isLoading } = useSelector(store => store.products)

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
            <Box className={classes.detailsLoadingParent}>
              <Typography align="center" >
                <ShoppingBagOutlinedIcon /><br />
                Hang on!!! <br />
                Loading Product Details...
              </Typography>
            </Box>
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

          <LinesEllipsis
            text={productDetail && productDetail.title}
            maxLine='2'
            ellipsis='...'
            trimRight
            basedOn='words'
            className={classes.productDetailsTitle}
          />

          <Typography variant="h4" color="secondary" gutterBottom>
            ${productDetail && productDetail.price}
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ color: 'grey' }}>
            {productDetail && productDetail.category}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.rating}
          >
            <StarIcon color="secondary" />
            <StarIcon color="secondary" />
            <StarIcon color="secondary" />
            &nbsp;&nbsp;
            {productDetail && productDetail.rating && productDetail.rating.rate} / 5
          </Typography>

          <LinesEllipsis
            text={productDetail && productDetail.description}
            maxLine='4'
            ellipsis='...'
            trimRight
            basedOn='words'
            className={classes.productDetailsDetail}
          />

          <Typography variant="h6" fontSize="17px" gutterBottom>
            Available in stock: {productDetail && productDetail.rating && productDetail.rating.count}
          </Typography>
          <Button variant="contained" color="secondary" onClick={handleOpen} sx={{ mt: 2 }}>Add to cart</Button>
        </Box>
      </Box>
      {
        open ? <ComingSoonModal open={open} handleClose={handleClose} /> : ''
      }
    </Box>
  )
}

export default ProductDetail