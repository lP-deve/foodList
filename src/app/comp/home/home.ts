import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: "./home.css"
  

})

export class Home {
current = ""



 foodList = [
  {
    name: "Pizza",
    image:"https://i.pinimg.com/736x/3e/c9/fe/3ec9fe32c6217014789b5f42e2343f47.jpg",
    description: "A cheesy delight topped with fresh veggies, sauces, and a crispy baked crust."
  },
  {
    name: "Burger",
    image: "https://i.pinimg.com/736x/c9/c5/01/c9c5013a47c78dde12d22a8659cdb945.jpg",
    description: "Juicy grilled patty layered with cheese, lettuce, and sauces inside a soft bun."
  },
  {
    name: "Pasta",
    image: "https://i.pinimg.com/736x/09/ef/17/09ef17ffd928cecf014acba27ed1d9ef.jpg",
    description: "Italian pasta tossed in rich creamy or tomato-based sauces with herbs."
  },
  {
    name: "Sushi",
    image: "https://i.pinimg.com/736x/09/15/1d/09151d0100060e1de5165623865f2c2b.jpg",
    description: "Japanese rice rolls wrapped with seaweed, veggies, and seafood fillings."
  },
  {
    name: "Ice Cream",
    image: "https://i.pinimg.com/1200x/a9/b8/a2/a9b8a266a4c061ca6ab6af63cf2e7caa.jpg",
    description: "Cold, creamy dessert available in a variety of sweet and fruity flavors."
  },
  {
    name: "cake",
    image: "https://i.pinimg.com/736x/cd/40/d0/cd40d0c94ae61117bc87b6c736e4c2b0.jpg",
    description: "Soft and fluffy baked dessert layered with cream, chocolate, or fruits."
  },
  {
    name: "Fries",
    image: "https://i.pinimg.com/736x/54/d6/a9/54d6a9e3bae82c5cc7601c602b186b06.jpg",
    description: "Crispy deep-fried potato sticks sprinkled with salt and spices."
  },
  {
    name: "Hot Dog",
    image: "https://i.pinimg.com/736x/0b/34/66/0b3466b52c42deea1b412cf8afbf51af.jpg",
    description: "Grilled sausage served in a long bun with mustard and ketchup."
  },
  {
    name: "Donut",
    image: "https://i.pinimg.com/736x/64/5a/ca/645aca888f2247467a98d8643d402237.jpg",
    description: "Sweet fried dough snack glazed with sugar, chocolate, or sprinkles."
  },
  {
    name: "Sandwich",
    image: "https://i.pinimg.com/1200x/2c/e7/1b/2ce71bf81722b34eb155b85177bbfa58.jpg",
    description: "Layers of veggies, cheese, or meat placed between fresh bread slices."
  },
  {
    name: "Tacos",
    image: "https://i.pinimg.com/1200x/da/1e/e3/da1ee34b9039601edc0a7a8bcccc4ff6.jpg",
    description: "Mexican tortilla filled with spicy meat, veggies, and sauces."
  },
  {
    name: "Noodles",
    image: "https://i.pinimg.com/1200x/22/f2/4d/22f24d4e81823742383b6ebd95155bc9.jpg",
    description: "Stir-fried noodles mixed with vegetables, sauces, and seasonings."
  },
  {
    name: "Salad",
    image: "https://i.pinimg.com/736x/cb/c5/ac/cbc5ace755a3392e4c6e1051f501944c.jpg",
    description: "Healthy mix of fresh vegetables, greens, and light dressings."
  },
  {
    name: "Steak",
    image: "https://i.pinimg.com/736x/2d/3c/ed/2d3ced7ec11c87859b2417649fa712fb.jpg",
    description: "Tender grilled beef steak seasoned and cooked to perfection."
  },
  {
    name: "Pancakes",
    image: "https://i.pinimg.com/1200x/d3/bf/64/d3bf64e15b6e69c846c01bccb599a43b.jpg",
    description: "Soft fluffy breakfast cakes served with syrup, butter, or fruits."
  },
  {
    name: "Waffles",
    image: "https://i.pinimg.com/736x/fc/57/1f/fc571f571ae7120fa1661817cc1369e7.jpg",
    description: "Crispy patterned breakfast treat topped with honey or chocolate."
  },
  {
    name: "Chicken Wings",
    image: "https://i.pinimg.com/736x/d6/c0/6e/d6c06e61cad03c37378d6c06394dfbd8.jpg",
    description: "Spicy and crispy fried chicken wings coated with flavorful sauces."
  },
  {
    name: "Fried Rice",
    image: "https://i.pinimg.com/1200x/7d/b5/42/7db542c9c79485c027245813b6e5fbc2.jpg",
    description: "Rice stir-fried with vegetables, eggs, and aromatic spices."
  },
   {
    name: "Tea",
    image: "https://i.pinimg.com/1200x/7b/01/3c/7b013cfdf70d03f47056fa3d73e16dd4.jpg",
    description: "Rice stir-fried with vegetables, eggs, and aromatic spices."
  }
  , {
    name: "Coffee",
    image: "https://i.pinimg.com/736x/4c/28/e2/4c28e2420bf38c50120dba0cbaf42e8d.jpg",
    description: "Rice stir-fried with vegetables, eggs, and aromatic spices."
  }
];




}
