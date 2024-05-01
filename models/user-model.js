import mongoose, { Schema } from "mongoose";

const schema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	favourites: {
		type: Array,
	},
});

export const userModel =
	mongoose.models.users ?? mongoose.model("users", schema);
