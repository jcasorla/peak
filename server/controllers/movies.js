const mongoose = require('mongoose');
const Movie = mongoose.model('Movie');
const Review = mongoose.model('Review');

module.exports = {
    all: async (req, res) => {
        try {
            const movies = await Movie.find();
            res.json({movies: movies});
        }
        catch (err) {
            res.json(err);
        }
    },
    getOneById: (req, res) => {
        Movie.findById({ _id : req.params.id })
            .then((data) => {
                res.json({movie: data})
            })
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        const movie = new Movie(req.body);
        movie.save()
            .then((data) => {
                res.json({newMovie: data});

                
                console.log(data);
            })
            .catch(err => {
                const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                res.status(422).json(errors )});
    },
    update: (req, res) => {
        Movie.findByIdAndUpdate(req.params.id , req.body, {runValidators: true, new: true} )
            .then((data) => {
                res.json({updatedMovie: data});
            })
            .catch(err => {
                const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                res.status(422).json(errors )});
    },
	
    delete: (req, res) => {
        Movie.findOneAndDelete({ _id : req.params.id })
            .then((data) => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    },
	
	//very important if you are going to copy and past this code make sure to rename Product to appropiate
	createReview: function(req,res){
        Review.create(req.body, function(err, data){
            if (err){
                const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                res.status(422).json(errors );
            }
            else{//note it may remove the . be sure to add it before : {review: data}}
                Movie.findOneAndUpdate({_id:req.params.id}, {$push : {review: data}}, {runValidators: true, new: true}, function(err, data){
                    if (err){
                        const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                        res.status(422).json(errors );
                    }
                    else{
                    res.json(data)
                    }
                })
                
            }
        })
    }
	
}
