const Movie = require("./movieModel")

exports.createMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject)
    
    }
    catch(error) {
        console.log(error)
    }

}

exports.readMovie = async (key, filter) => {
    try {
        if (key) {
            return await Movie.find({[key]: filter})
        }
        else {
            return await Movie.find({})
        }

    }
    catch (error) {
        console.log(error)
    }
}

exports.updateMovie = async (filterObject, updateObject) => {
    try {
       
            return await Movie.updateOne(filterObject, {
                $set:updateObject
            })
   
    }
    catch (error) {
        console.log(error)

    }
}

exports.deleteMovie = async (key, filter) => {
    try {
        if (key) {
            return await Movie.deleteOne({[key]: filter})
        }
    }
    catch (error){
        console.log(error)
    }
}