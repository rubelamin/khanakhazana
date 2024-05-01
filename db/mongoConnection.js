import mongoose from "mongoose";

export async function dbConnection() {
	try {
		const connection = await mongoose.connect(
			`${process.env.MONGO_DB_URI}`
		);
		console.log("DB Connected.");

		return connection;
	} catch (error) {
		console.log(error);
	}
}
