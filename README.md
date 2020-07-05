# Shopping Cart

Simple shopping card on react-redux with typescript, <a href="https://tonykuznetsov.github.io/shopping-cart/">see on github pages</a>

## Installation

- Clone this repo
- `npm install` to install all dependencies
- `npm run start` to start the local server
- `npm run test` to start the tests

## Usage

```javascript
import ShoppingCart from './components/ShoppingCart';

const settings = {title: 'Shopping Cart', postFixCost: '$'};
const handleSubmit = (items) {}

<ShoppingCart settings={settings} handleSubmit={handleSubmit} />
```
