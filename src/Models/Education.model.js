export class EducationModel {
	static section = 'Uddannelser'

	static elements = [
		{ 
			name: "name", 
			title: "Navn", 
			type: "text", 
			required: true
		},
		{ 
			name: "description", 
			title: "Beskrivelse", 
			type: "textarea", 
			required: true
		}
	]

	static path = 'educations'
	static endpoint = `https://api.mediehuset.net/erasmus_worldmap/${this.path}`
}