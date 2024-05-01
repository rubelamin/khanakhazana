export const removeMongoIdInArray = (array) => {
	const customArray = array
		.map((item) => {
			return {
				id: item._id.toString(),
				...item,
			};
		})
		.map(({ _id, ...rest }) => rest);

	return customArray;
};

export const removeMongoIdInObj = (obj) => {
	const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };

	return updatedObj;
};
