import axios from "axios";

export class EducationModel {
	static section = 'Uddannelser'

	static elements = [
		{ name: "name", title: "Navn", type: "text", required: true, onlist: true },
		{ name: "description", title: "Beskrivelse", type: "textarea", required: true, onlist: false }
	]

	static path = 'educations'
	static endpoint = `https://api.mediehuset.net/erasmus_worldmap/${this.path}`

	static async getAllRecords() {
		try {
			let { data, error } = await axios.get(this.endpoint)
			if (error) {
				throw new Error(error.message);
			} else {
				data.items.forEach((item, key) => {
					data.items[key].listname = `${item.name}`
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