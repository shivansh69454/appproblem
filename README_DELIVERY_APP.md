# Delivery App - React Native Expo

A modern delivery app similar to Blinkit built with React Native and Expo, featuring product browsing, search, cart management, and checkout functionality.

## Features

- **Home Screen**: Browse featured products and filter by categories
- **Search Screen**: Search for products with real-time filtering
- **Product Details**: View detailed product information with ratings and reviews
- **Shopping Cart**: Add/remove items, adjust quantities
- **Checkout**: Complete order with delivery address and payment options
- **User Account**: View profile, orders, addresses, and preferences
- **Bottom Tab Navigation**: Easy navigation between Home, Search, Cart, and Account

## Project Structure

```
src/
├── redux/              # Redux store, slices for products and cart
│   ├── store.js        # Redux store configuration
│   ├── productSlice.js # Product state management
│   └── cartSlice.js    # Cart state management
├── screens/            # All screen components
│   ├── HomeScreen.js
│   ├── SearchScreen.js
│   ├── ProductDetailScreen.js
│   ├── CartScreen.js
│   ├── CheckoutScreen.js
│   └── AccountScreen.js
├── navigation/         # Navigation setup
│   └── RootNavigator.js
├── components/         # Reusable components (for future expansion)
├── services/           # API services (for future backend integration)
└── utils/              # Utility functions
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on specific platform:
```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## Technologies Used

- **React Native**: Cross-platform mobile development
- **Expo**: Fast development and deployment
- **Redux Toolkit**: State management
- **React Navigation**: Navigation between screens
- **Expo Vector Icons**: Icon library

## API Integration

The app currently uses mock data. To integrate with a real backend:

1. Update `src/redux/productSlice.js` to fetch products from an API
2. Use `src/services/` folder to create API service functions
3. Replace mock data with actual API calls

## Sample Product Categories

- Fruits
- Dairy
- Bakery
- Sauces
- Oils

## Future Enhancements

- Real-time order tracking
- User authentication
- Payment gateway integration
- Push notifications
- Product reviews and ratings
- Wishlist functionality
- Promo codes and discounts
- Order history with reorder functionality
- Live chat support

## Building for Production

```bash
# Create a production build
eas build --platform all

# For local APK/IPA building
expo build:android
expo build:ios
```

## License

MIT

## Support

For issues and feature requests, please open an issue on the project repository.
