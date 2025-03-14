import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { User, Recipe, PantryItem, ShoppingItem, WasteReductionLog, CommunityPost, Comment } from './types';

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
if (!process.env.MONGO_URI) {
    console.error('Error: MONGO_URI is not defined in environment variables.');
    process.exit(1);
}
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

// Routes
app.get('/', (req, res) => res.send('Smart Kitchen App API'));

// Example route to get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find(); // Ensure User is a valid Mongoose model
        res.json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
