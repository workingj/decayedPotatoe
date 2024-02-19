import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
        trim: true,
    },
    rating: {
        type: Number,
        required: [true, 'rating is required'],
    }
});

mongoose.connect(process.env.MONGO_URI).then (() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error:', error.stack);
});

export default mongoose.model('Rating', ratingSchema);

