const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Add this after other middleware
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

const cartRoutes = require('./routes/cartRoutes');
app.use('/api/cart', cartRoutes);

const categoryRoutes = require('./routes/categoryRoutes');
app.use('/api/categories', categoryRoutes);


app.get('/api/test', (req, res) => {
  res.json({ message: 'Snake Store API is working 🐍' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));