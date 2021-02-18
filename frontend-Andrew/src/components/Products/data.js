import product1 from '../../images/ultimate-nachos.jpg'
import product2 from '../../images/pretzel-bites.jpg'
import product3 from '../../images/mozzarella-sticks.jpg'
import product4 from '../../images/hotdog.jpg'
import product5 from '../../images/spaghetti-meatballs.jpg'
import product6 from '../../images/blt.jpg'

//this is an array of objects. each object in the {}
export const productData = [
    {
        img: product1,
        alt: 'Appetizer',
        name: 'Ultimate Nachos',
        desc: 'Crispy tortilla chips, topped with seasoned chicken, cheese, Pico de Gallo, and other favorite nacho toppings',
        price: '$10.99',
        button: 'Add to Cart'
    },
    {
        img: product2,
        alt: 'Appetizer',
        name: 'Pretzel Bites',
        desc: "Chewy & soft served with a kickin' cheese dip",
        price: '$7.99',
        button: 'Add to Cart'
    }, 
    {
        img: product3,
        alt: 'Appetizer',
        name: 'Mozzarella Sticks',
        desc: 'Hand-breaded, fried golden brown and served with our own special marinara dipping sauce',
        price: '$5.99',
        button: 'Add to Cart'
    } 
];

export const productDataTwo = [
    {
        img: product4,
        alt: 'Entree',
        name: 'Hotdog',
        desc: 'Who wants a weiner?',
        price: '$4.99',
        button: 'Add to Cart'
    },
    {
        img: product5,
        alt: 'Entree',
        name: 'Spaghetti & Meatballs',
        desc: "Perfectly cooked spaghetti topped with tangy tomato sauce pairs with our seasoned Italian meatballs",
        price: '$11.99',
        button: 'Add to Cart'
    }, 
    {
        img: product6,
        alt: 'Entree',
        name: 'BLT Sandwich',
        desc: 'Made with bacon, lettuce, and tomatoes between two thick slices of toasted bread, this sandwich is a simple dinner and an all around favorite!',
        price: '$5.99',
        button: 'Add to Cart'
    } 
];