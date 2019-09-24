const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "At least 3 characters long"]
    },
    content: {
        type: String,
        minlength: [3, "At least 3 characters long"]
    },
    rating: {
        type: Number,
        required: true
    }
  
}, { timestamps: true });

const MovieSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true,
        minlength: [3, 'At least 3 characters long']

    },
    review: [ReviewSchema],  
}, {timestamps: true });
mongoose.model('Movie', MovieSchema);
mongoose.model('Review', ReviewSchema); //very important. dont forget to add
