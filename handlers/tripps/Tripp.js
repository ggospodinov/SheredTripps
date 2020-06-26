const mongoose = require('mongoose');
const { Schema, model: Model } = mongoose;
const { String, Number, ObjectId } = Schema.Types
//const bcrypt= require('bcrypt');
//const saltRounds=10;


const trippSchema = new Schema({

    startPoint: {
        type: String,
        //required: true,
        
    },

    endPoint : {
        type: String,
        //required: true
    },

    date:{
        type: String,
      //  required: true
    },

    time:{
        type: String,
       //required: true
    },
    seats:{
        type: Number,
       //required: true
    },
    description:{
        type: String,
       // required: true
    },
    carImage:{
        type: String,
       // required: true
    },
    driver:{
        type: String,
        ref:'User'

    },

    buddies: [{
        type: ObjectId,
        ref: 'User'
    }]

});


module.exports = new Model('Tripp', trippSchema);
