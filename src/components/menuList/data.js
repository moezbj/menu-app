import Cake1 from "../../assets/MENU/desert/cake1.webp";
import Cake2 from "../../assets/MENU/desert/cake2.webp";
import Cake3 from "../../assets/MENU/desert/cake3.webp";

import Pizza1 from "../../assets/MENU/pizza/1.webp";
import Pizza2 from "../../assets/MENU/pizza/2.webp";
import Pizza3 from "../../assets/MENU/pizza/3.webp";

import Plat1 from "../../assets/MENU/plat/burger.webp";
import plat2 from "../../assets/MENU/plat/sfefed.webp";
import plat3 from "../../assets/MENU/plat/steak.webp";

import cakeModel1 from "../../assets/MENU/desert/cake1.glb";
import cakeModel2 from "../../assets/MENU/desert/cake2.glb";
import cakeModel3 from "../../assets/MENU/desert/cake3.glb";

import pizzaModel1 from "../../assets/MENU/pizza/1.glb";
import pizzaModel2 from "../../assets/MENU/pizza/2.glb";
import pizzaModel3 from "../../assets/MENU/pizza/3.glb";

import platModel1 from "../../assets/MENU/plat/burger.glb";
import platModel2 from "../../assets/MENU/plat/sfefed.glb";
import platModel3 from "../../assets/MENU/plat/STEAK.glb";

const Pizza = [
  {
    category: "Pizza",
    name: "Pizza Margherita",
    price: "$8.95",
    description: "la tomate, la mozzarella et le basilic",
    img: Pizza1,
    model: pizzaModel1,
  },
  {
    category: "Pizza",
    name: "Pizza 4 saisons",
    price: "$9.95",
    description: "des olives noires, des artichauts et du jambon",
    img: Pizza2,
    model: pizzaModel2,
  },
  {
    category: "Pizza",
    name: "Pizza Pepperoni",
    price: "$9.95",
    description: "Celui-ci est à base de saucisse fraîche et de salami",
    img: Pizza3,
    model: pizzaModel3,
  },
];
const Desert = [
  {
    category: "Deserts",
    name: "Lobster Bisque",
    price: "$5.95",
    description: "Lorem, deren, trataro, filede, nerada",
    img: Cake1,
    model: cakeModel1,
  },
  {
    category: "Deserts",
    name: "Crab Cake",
    price: "$7.95",
    description:
      " A delicate crab cake served on a toasted roll with lettuce andtartar sauce",
    img: Cake2,
    model: cakeModel2,
  },
  {
    category: "Deserts",
    name: "Mozzarella Stick",
    price: "$4.95",
    description: " Lorem, deren, trataro, filede, nerada",
    img: Cake3,
    model: cakeModel3,
  },
];
const Plat = [
  {
    category: "Plat",
    name: "Lobster Roll",
    price: "$12.95",
    description:
      " Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll",
    img: Plat1,
    model: platModel1,
  },
  {
    category: "Plat",
    name: "Tuscan Grilled",
    price: "$9.95",
    description:
      "Grilled chicken with provolone, artichoke hearts, and roasted red pesto",
    img: plat2,
    model: platModel2,
  },
  {
    category: "Plat",
    name: "Bread barrel",
    price: "$6.95",
    description: "Lorem, deren, trataro, filede, nerada",
    img: plat3,
    model: platModel3,
  },
];
const menu = [...Pizza, ...Desert, ...Plat];
export { menu };
