const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
    nom: {type: String, required: true},
    prenom:{type: String, required: true},
    email:{type: String, required: true},
    gain:{type: String, required: false}
});


const Participant = mongoose.model("participantModel", participantSchema);


module.exports= Participant;