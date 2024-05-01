import mongoose, { Schema } from "mongoose";

const schema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	activeTime: {
		type: String,
		required: true,
	},
	totalTime: {
		type: String,
		required: true,
	},
	thumbnail: {
		type: String,
		required: true,
	},
	image: {
		type: String,
	},
	category: {
		type: String,
	},
	serves: {
		type: Number,
	},
	rating: {
		type: Number,
	},
	steps: {
		type: [String],
	},
});

export const recipesModel =
	mongoose.models.recipes ?? mongoose.model("recipes", schema);
