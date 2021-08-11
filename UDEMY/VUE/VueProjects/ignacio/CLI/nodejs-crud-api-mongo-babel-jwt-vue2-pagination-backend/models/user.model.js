const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const roles = {
	values: ['ADMIN', 'USER'],
	message: '{VALUE} rol no válido'
}

const userSchema = new Schema({
	nombre: {type: String, required: [true, 'El nombre es necesario']},
	email: {
		type: String,
		required: [true, 'El email es obligatorio'],
		unique: true
		},
	pass: {type: String, required: [true, 'Pass es obligatoria']},
	date: {type: Date, default: Date.now},
	role: {type: String, default: 'USER', enum: roles},
	activo: {type: Boolean, default: true}
});

// validating email as unique
userSchema.plugin(uniqueValidator, { message: 'Error, the {PATH} already exists!' });

// here we just remove 'pass' key-value to not be sent back to client in the response when adding new users, for example
userSchema.methods.toJSON = function () {
	const obj = this.toObject();
	delete obj.pass;
	return obj;
}

const User = mongoose.model('User', userSchema);

module.exports = User;
