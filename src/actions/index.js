export const increment = (increamentByNumber = 1) => {
	return {
		type: "INCREMENT",
		payload: increamentByNumber
	}
}

export const decrement = () => {
	return {
		type: "DECREMENT"
	}
}