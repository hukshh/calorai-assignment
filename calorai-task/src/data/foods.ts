import { Food, Cuisine } from '../types/food';

// PLEASE REPLACE THIS DUMMY DATA WITH THE EXACT JSON FROM YOUR ASSIGNMENT

export const cuisines: Cuisine[] = [
  'Italian',
  'Japanese',
  'Mexican',
  'American',
  'Mediterranean',
];

export const foods: Food[] = [
  {
    id: '1',
    name: 'Margherita Pizza',
    cuisine: 'Italian',
    calories: 800,
    imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80',
  },
  {
    id: '2',
    name: 'Sushi Roll',
    cuisine: 'Japanese',
    calories: 350,
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80',
  },
  {
    id: '3',
    name: 'Tacos',
    cuisine: 'Mexican',
    calories: 450,
    imageUrl: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500&q=80',
  },
  {
    id: '4',
    name: 'Cheeseburger',
    cuisine: 'American',
    calories: 850,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80',
  },
];
