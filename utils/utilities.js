export const getCategoryList = async (arr) => {
	const setOfCategory = new Set();
	await arr.forEach((item) => setOfCategory.add(item.category));

	const catList = [...setOfCategory];

	return catList;
};
