import React from 'react'
import { CardActions, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCart, onRemoveFromCart }) => {
    const classes = useStyles();
    return (
        <Card className="cart-item">
            <CardMedia image={ item.image.url } alt={ item.name } className={ classes.media } />
            <CardContent className={ classes.cardContent }>
                <Typography variant='h5'>{ item.name }</Typography>
                <Typography variant='h5'>{ item.line_total.formatted_with_symbol }</Typography>
            </CardContent>
            <CardActions className={ classes.cardActions }>
                <div className={ classes.buttons }>
                    <Button type='button' size='small' onClick={ () => onUpdateCart(item.id, item.quantity - 1) }>-</Button>
                    <Typography>{ item.quantity }</Typography>
                    <Button type='button' size='small' onClick={ () => onUpdateCart(item.id, item.quantity + 1) }>+</Button>
                </div>
                <Button variant='contained' type='button' color='secondary' onClick={ () => onRemoveFromCart(item.id) }>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem;