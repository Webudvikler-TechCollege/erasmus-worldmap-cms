import axios from "axios";
import { EducationModel } from "./Education.model";
import { LocationModel } from "./Location.model";

export class ActivityModel {
	static section = 'Aktiviteter'

	static elements = [
		{ 
			name: "title", 
			title: "Titel", 
			type: "text", 
			default: '',
			required: true
		},
		{ 
			name: "description", 
			title: "Beskrivelse", 
			type: "textarea", 
			default: '',
			required: true 
		},
		{ 
			name: "start_date", 
			title: "Startdato", 
			type: "date", 
			default: new Date().toISOString().split('T')[0],
			required: true
		},
		{
			name: "stop_date", 
			title: "Stopdato", 
			type: "date", 
			default: new Date().toISOString().split('T')[0],
			required: true
		},
		{ 
			name: "duration_in_weeks", 
			title: "Varighed i uger", 
			type: "number", 
			default: 0,
			required: true 
		},
		{ 
			name: "education_id", 
			title: "Uddannelse", 
			type: "select", 
			required: true, 
			model: EducationModel 
		},
		{ 
			name: "location_id", 
			title: "Lokation", 
			type: "select", 
			required: true, 
			model: LocationModel 
		},
		{ 
			name: "is_active", 
			title: "Aktiv", 
			type: "checkbox", 
			default: false,
			required: false 
		}
	]

	static path = 'activities'
	static endpoint = `https://api.mediehuset.net/erasmus_worldmap/${this.path}`

	static async getAllRecords() {
		try {
			let { data, error } = await axios.get(this.endpoint)
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