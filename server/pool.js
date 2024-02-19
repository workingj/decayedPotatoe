import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    }
});

mongoose.connect(process.env.MONGO_URI).then (() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error:', error.stack);
});

export default mongoose.model('Rating', ratingSchema);

