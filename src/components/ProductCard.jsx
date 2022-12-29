import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import useStyles from '../shared-features/sharedStyles'
import LinesEllipsis from 'react-lines-ellipsis'
import StarIcon from '@mui/icons-material/Star';

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
                        <LinesEllipsis
                            text={item.title}
                            maxLine='1'
                            ellipsis='...'
                            trimRight
                            basedOn='words'
                            className={classes.cardTitle}
                        />
                        <Typography variant="h6" fontSize="17px" gutterBottom sx={{ color: 'grey' }}>
                            {item.category}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom className={classes.rating}>
                            <StarIcon color="secondary" />
                            &nbsp;
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