const salads = [
  {
    category: "Salads",
    name: "Caesar Selections",
    price: "$8.95",
    description: "Lorem, deren, trataro, filede, nerada",
  },
  {
    category: "Salads",
    name: "Greek Salad",
    price: "$9.95",
    description: "Fresh spinach, crisp romaine, tomatoes, and Greek olives",
  },
  {
    category: "Salads",
    name: "Spinach Salad",
    price: "$9.95",
    description:
      " Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette",
  },
];
const starters = [
  {
    category: "Starters",
    name: "Lobster Bisque",
    price: "$5.95",
    description: "Lorem, deren, trataro, filede, nerada",
  },
  {
    category: "Starters",
    name: "Crab Cake",
    price: "$7.95",
    description:
      " A delicate crab cake served on a toasted roll with lettuce andtartar sauce",
  },
  {
    category: "Starters",
    name: "Mozzarella Stick",
    price: "$4.95",
    description: " Lorem, deren, trataro, filede, nerada",
  },
];
const specialty = [
  {
    category: "Specialty",
    name: "Lobster Roll",
    price: "$12.95",
    description:
      " Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll",
  },
  {
    category: "Specialty",
    name: "Tuscan Grilled",
    price: "$9.95",
    description:
      "Grilled chicken with provolone, artichoke hearts, and roasted red pesto",
  },
  {
    category: "Specialty",
    name: "Bread barrel",
    price: "$6.95",
    description: "Lorem, deren, trataro, filede, nerada",
  },
];
const menu = [...salads, ...starters, ...specialty];
export { menu };
