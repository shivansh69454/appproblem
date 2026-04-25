import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      name: 'Fresh Apples',
      price: 120,
      image: 'https://via.placeholder.com/150?text=Apples',
      category: 'Fruits',
      description: 'Fresh red apples from local orchards',
      rating: 4.5,
      reviews: 234,
      inStock: true,
    },
    {
      id: 2,
      name: 'Organic Milk',
      price: 60,
      image: 'https://via.placeholder.com/150?text=Milk',
      category: 'Dairy',
      description: 'Pure organic milk, 500ml',
      rating: 4.7,
      reviews: 567,
      inStock: true,
    },
    {
      id: 3,
      name: 'Whole Wheat Bread',
      price: 40,
      image: 'https://via.placeholder.com/150?text=Bread',
      category: 'Bakery',
      description: 'Fresh whole wheat bread',
      rating: 4.3,
      reviews: 189,
      inStock: true,
    },
    {
      id: 4,
      name: 'Tomato Sauce',
      price: 85,
      image: 'https://via.placeholder.com/150?text=Sauce',
      category: 'Sauces',
      description: 'Tangy tomato sauce, 400g',
      rating: 4.4,
      reviews: 312,
      inStock: true,
    },
    {
      id: 5,
      name: 'Olive Oil',
      price: 250,
      image: 'https://via.placeholder.com/150?text=Oil',
      category: 'Oils',
      description: 'Extra virgin olive oil, 500ml',
      rating: 4.6,
      reviews: 456,
      inStock: true,
    },
    {
      id: 6,
      name: 'Bananas',
      price: 50,
      image: 'https://via.placeholder.com/150?text=Bananas',
      category: 'Fruits',
      description: 'Fresh yellow bananas, bunch',
      rating: 4.2,
      reviews: 178,
      inStock: true,
    },
  ],
  searchTerm: '',
  selectedCategory: 'All',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSearchTerm, setSelectedCategory } = productSlice.actions;
export default productSlice.reducer;
