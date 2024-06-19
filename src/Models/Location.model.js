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
			name: "longitude", 
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

}