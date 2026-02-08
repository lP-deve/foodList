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
    image:"https://i.pinimg.com/736x/3e/c9/fe/3ec9fe32c6217014789b5f42e2343f47.jpg"
  },
  {
    name: "Burger",
    image: "https://i.pinimg.com/736x/c9/c5/01/c9c5013a47c78dde12d22a8659cdb945.jpg"
  },
  {
    name: "Pasta",
    image: "https://i.pinimg.com/736x/09/ef/17/09ef17ffd928cecf014acba27ed1d9ef.jpg"
  },
  {
    name: "Sushi",
    image: "https://i.pinimg.com/736x/09/15/1d/09151d0100060e1de5165623865f2c2b.jpg"
  },
  {
    name: "Ice Cream",
    image: "https://i.pinimg.com/1200x/a9/b8/a2/a9b8a266a4c061ca6ab6af63cf2e7caa.jpg"
  },
   {
    name: "cake",
    image: "https://i.pinimg.com/736x/cd/40/d0/cd40d0c94ae61117bc87b6c736e4c2b0.jpg"
  }
];



}
