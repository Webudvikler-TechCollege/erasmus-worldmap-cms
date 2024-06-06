import axios from "axios";

export class NewsModel {
	static section = 'Nyheder'

	static elements = [
		{ 
			name: "start_date", 
			title: "Startdato", 
			type: "datetime-local",
			default: new Date().toISOString().slice(0, 16), 
			required: true
		},
		{ 
			name: "stop_date", 
			title: "Stopdato", 
			type: "datetime-local",
			default: new Date().toISOString().slice(0, 16), 
			required: true
		},
		{ 
			name: "title", 
			title: "Titel", 
			type: "text", 
			required: true
		},
		{ 
			name: "content", 
			title: "Indhold", 
			type: "textarea", 
			required: true
		},
		{ 
			name: "author", 
			title: "Forfatter", 
			type: "text", 
			required: true
		},
		{ 
			name: "is_active", 
			title: "Aktiv", 
			type: "checkbox", 
			default: false,
			required: false 
		}
	]

	static path = 'news'
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