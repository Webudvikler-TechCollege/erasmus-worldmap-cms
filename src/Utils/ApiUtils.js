import axios from "axios";

/**
 * Henter alle records fra API
 * @param {String} endpoint 
 * @returns Array
 */
export const getAllRecords = async (endpoint) => {
	try {
		let { data, error } = await axios.get(endpoint)
		if (error) {
			throw new Error(error.message);
		} else {
			return data.items
		}

	} catch(error) {
		console.error('Error:', error.message);
		return { error: error.message }
	}
}

/**
 * Hent enkelt post fra API
 * @param {String} endpoint 
 * @param {Number} id 
 * @returns data object
 */
export const getSingleRecord = async (endpoint, id) => {
	try {
		let { data, error } = await axios.get(`${endpoint}/${id}`)
		if (error) {
			throw new Error(error.message);
		} else {
			return data.item
		}

	} catch(error) {
		console.error('Error:', error.message);
		return { error: error.message }
	}		
}

/**
 * Opretter en ny post i API
 * @param {String} endpoint 
 * @param {Number} formdata 
 * @param {Object} options 
 * @returns 
 */
export const createRecord = async (endpoint, formdata, options) => {
	try {
		let { data, error } = await axios.post(endpoint, formdata, options)
		if (error) {
			throw new Error(error.message);
		} else {
			return data
		}

	} catch(error) {
		console.error('Error:', error.message);
		return { error: error.message }
	}
}

/**
 * Opdaterer en post i API
 * @param {String} endpoint 
 * @param {Number} formdata 
 * @param {Object} options 
 * @returns 
 */
export const updateRecord = async (endpoint, formdata, options) => {
	try {
		let { error } = await axios.put(endpoint, formdata, options)
		if (error) {
			throw new Error(error.message);
		} else {
			return true
		}

	} catch(error) {
		console.error('Error:', error.message);
		return { error: error.message }
	}
}

/**
 * Sletter en post i API
 * @param {String} endpoint 
 * @param {Number} id 
 * @param {Object} options 
 * @returns true
 */
export const deleteRecord = async (endpoint, id, options) => {
	try {
		let { error } = await axios.delete(`${endpoint}/${id}`, options)
		if (error) {
			throw new Error(error.message);
		} else {
			return true
		}

	} catch(error) {
		console.error('Error:', error.message);
		return { error: error.message }
	}
}


