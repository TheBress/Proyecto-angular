const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MotosSchema = new Schema({
	_id: {
		type: Schema.ObjectId,
		auto: true
	},
	modelo: {
		type: String,
		required: true
	},
	precio: {
		type: Number,
		required: true
	},
	cilindrada: {
		type: Number,
		required: true
	},
	velocidadmaxima: {
		type: Number
	},
	foto: {
		type: String
	}
});

mongoose.model('Motos', MotosSchema);







