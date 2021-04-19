import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const products = [
  { name: 'Avengers: Endgame', desc: 'One ticket', price: '$12.00' },
  { name: 'Appetizer: Ultimate Nachos', desc: 'Crispy tortilla chips, topped with seasoned chicken, cheese, Pico de Gallo, and other favorite nacho toppings', price: '$10.99' },
  { name: 'Entree: Spaghetti & Meatballs', desc: 'Perfectly cooked spaghetti topped with tangy tomato sauce pairs with our seasoned Italian meatballs', price: '$11.99' },
  { name: 'Drink: Coca-Cola', desc: 'Classic Coke flavor that is refreshing', price: '$2.50' },

];

const addresses = ['1 Rutgers Way', 'Rutgersville', 'Rutgers', '12345', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Doge' },
  { name: 'Card holder', detail: 'John Reiner Sloan' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '06/1234' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Edit(props) {
  const classes = useStyles();



  //for()

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
            <Button className={classes.button}>+</Button>
            <Button className={classes.button}>-</Button>
          </ListItem>
          
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $37.48
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        
      </Grid>
    </React.Fragment>
  );
}