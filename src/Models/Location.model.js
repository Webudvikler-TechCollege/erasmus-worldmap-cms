import axios from "axios";

export class LocationModel {
	static section = 'Lokationer'

	static elements = [
		{ 
			name: "name", 
			title: "Navn", 
			type: "text", 
			required: true, 
		},
		{ 
			name: "address", 
			title: "Adresse", 
			type: "text", 
			required: true
		},
		{ 
			name: "zipcode", 
			title: "Postnummer", 
			type: "number", 
			default: 0,
			required: true
		},
		{ 
			name: "city", 
			title: "By", 
			type: "text", 
			required: true
		},
		{ 
			name: "country", 
			title: "Land", 
			type: "text", 
			required: true
		},
		{ 
			name: "longtitude", 
			title: "Længdegrad", 
			type: "text", 
			default: 0,
			required: true
		},
		{ 
			name: "latitude", 
			title: "Breddegrad", 
			type: "text", 
			default: 0,
			required: true
		}
	]

	static path = 'locations'
	static endpoint = `https://api.mediehuset.net/erasmus_worldmap/${this.path}`

	static async getAllRecords() {
		try {
			let { data, error } = await axios.get(this.endpoint)
			if (error) {
				throw new Error(error.message);
			} else {
				data.items.forEach((item, key) => {
					data.items[key].listname = `${item.name}, ${item.city}, ${item.country}`
				})
				return data.items
			}

		} catch(error) {
			console.error('Error:', error.message);
			return { error: error.message }
		}
	}

	static async getSingleRecord(id) {
		try {
			let { data, error } = await axios.get(`${this.endpoint}/${id}`)
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

	static async createRecord(formdata, options) {
		try {
			let { data, error } = await axios.post(this.endpoint, formdata, options)
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

	static async updateRecord(data, options) {
		console.log(data);
		try {
			let { error } = await axios.put(`${this.endpoint}`, data, options)
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

	static async deleteRecord(id, options) {
		try {
			let { error } = await axios.delete(`${this.endpoint}/${id}`, options)
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
}