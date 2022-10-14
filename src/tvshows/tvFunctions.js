const TV = require("./tvModel")

exports.createTV = async (tvObject) => {
    try {
        await TV.create(tvObject)
    
    }
    catch(error) {
        console.log(error)
    }

}

exports.readTV = async (key, filter) => {
    try {
        if (key) {
            return await TV.find({[key]: filter})
        }
        else {
            return await TV.find({})
        }

    }
    catch (error) {
        console.log(error)
    }
}

exports.updateTV = async (filterObject, updateObject) => {
    try {
       
            return await TV.updateOne(filterObject, {
                $set:updateObject
            })
   
    }
    catch (error) {
        console.log(error)

    }
}

exports.deleteTV = async (key, filter) => {
    try {
        if (key) {
            return await TV.deleteOne({[key]: filter})
        }
    }
    catch (error){
        console.log(error)
    }
}