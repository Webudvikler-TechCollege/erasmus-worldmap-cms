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
}