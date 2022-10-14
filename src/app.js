require ("./db/connection")
const mongoose = require('mongoose')
const yargs = require("yargs")
const {createMovie, readMovie, updateMovie, deleteMovie} = require("./movie/movieFunctions")
const {createTV, readTV, updateTV, deleteTV} = require("./tvshows/tvFunctions")
const Movie = require("./movie/movieModel")
const TV = require("./tvshows/tvModel")


const app = async (yargsObject) => {


    try {
        if (yargsObject.create){
            await createMovie({title: yargsObject.title, actor: yargsObject.actor})
            console.log(await readMovie())
        }
        else if (yargsObject.read){
            console.log(await readMovie(yargsObject.key, yargsObject.filter))
            
        }
        else if (yargsObject.update){
            await updateMovie(
                {[yargsObject.filterKey]:yargsObject.filterValue}, 
                {[yargsObject.updateKey]:yargsObject.updateValue},
            )
            console.log(await readMovie())
        }
        else if (yargsObject.delete){
            await deleteMovie(yargsObject.key, yargsObject.filter)
            console.log(await readMovie())
        }
        if (yargsObject.createTV){
            await createTV({title: yargsObject.title, timeslot: yargsObject.timeslot, network: yargsObject.network, day: yargsObject.day})
            console.log(await readTV())
        }
        else if (yargsObject.readTV){
            console.log(await readTV(yargsObject.key, yargsObject.filter))
            
        }
        else if (yargsObject.updateTV){
            await updateTV(
                {[yargsObject.filterKey]:yargsObject.filterValue}, 
                {[yargsObject.updateKey]:yargsObject.updateValue},
            )
            console.log(await readTV())
        }
        else if (yargsObject.deleteTV){
            await deleteTV(yargsObject.key, yargsObject.filter)
            console.log(await readTV())
        }
        else {
        console.log("Incorrect Command")
        }
        await mongoose.disconnect()
    }
    catch (error) {
        await mongoose.disconnect()
        console.log(error)
    }

}


app(yargs.argv)