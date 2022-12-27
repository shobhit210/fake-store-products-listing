import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import useStyles from '../shared-features/sharedStyles'

const ProductCard = ({ item }) => {

    const navigate = useNavigate()
    const classes = useStyles()

    const goToProductDetails = (item) => {
        navigate(`/products/${item.id}`)
    }

    return (
        <>
            <Card className={classes.cardParent}>
                <CardActionArea
                    className={classes.cardActionArea}
                    onClick={() => goToProductDetails(item)}
                >
                    <CardMedia
                        component="img"
                        image={item.image}
                        alt={item.title}
                        className={classes.cardMediaImage}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="secondary">
                            {item.title}
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            {item.category}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            {item?.rating?.rate}/5
                        </Typography>
                        <Typography variant="h6" display="block" gutterBottom color="secondary">
                            ${item.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default ProductCard