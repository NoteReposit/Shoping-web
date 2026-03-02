# 🛒 React E-Commerce Web Page

A front-end e-commerce web application built entirely with **React.js**. This project operates solely on the client side and does not connect to any external backend API or database. Instead, it utilizes local mock data stored directly within the project files.

### ✨ Key Features
- **Product Display:** Showcases a list of products along with their prices, images, and detailed descriptions.
- **Frontend-Only:** Runs entirely on the client side, requiring no server or database configuration.
- **Local Mock Data:** All product information is seamlessly managed and retrieved from a local data file.
- **Easy to Customize:** You can easily add, update, or remove products by simply editing the data array.

---

### 🛠 Tech Stack
- **Frontend:** React.js

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,js" alt="React and JavaScript Icons" />
  </a>
</p>

---

### 📂 Data Management

Since this project does not rely on a backend server, all product data is hardcoded and stored in the following directory: `src/assets/data/pdData.jsx`

To **add, remove, or modify products**, simply edit the array of objects within this file. The web page will automatically update to reflect your changes. 

**Example Data Structure:**
```
// src/assets/data/pdData.jsx
export const products = [
  {
      "id": 1,
      "name": "Product 1",
      "detail": "Detail about product 1",
      "price": 68.07,
      "image": "https://cdn.pixabay.com/photo/2013/05/24/21/15/flowers-113503_1280.jpg"
   },
  // Add new product objects below
];
```
---
### 🚀 Getting Started
Follow these steps to set up the project locally on your machine.
1. Clone the repository
```
git clone https://github.com/NoteReposit/Shoping-web.git
```

2. Navigate to the project directory
```
cd Shoping-web
```

3. Install dependencies
```
npm install
```

4. Run the application
```
npm start 
# Or use 'npm run dev' if the project was created with Vite
```
Open http://localhost:3000 (or the port specified in your terminal) to view it in your browser.
