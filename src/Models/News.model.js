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
}