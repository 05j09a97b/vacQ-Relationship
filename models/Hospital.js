const mongoose = require('mongoose');
const HospitalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,'Please add a name'],
        unique: TransformStreamDefaultController,
        trim: true,
        maxlength:[50,'Name can not be more than 50 characters']
    },
    address:{
        type: String,
        required: [true,'please add an adress']
    },
    district:{
        type:String,
        required:[true,'please add a district']
    },
    province:{
        type: String,
        required:[true,'Please add a province']
    },
    postalcode:{
        type:String,
        required:[true,'Please add a postalcode'],
        maxlength:[5,'postal code can not be more than 5 digits']
    },
    tel:{
        type: String
    },
    region:{
        type: String,
        required:[true,'Please add a region']
    },
});

module.exports = mongoose.model('Hospital',HospitalSchema);
