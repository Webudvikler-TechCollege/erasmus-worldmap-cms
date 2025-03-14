export class ArtistModel {
	static section = 'Artists'

	static elements = [
		{ 
			name: "name", 
			title: "Title", 
			type: "text", 
			default: '',
			required: true
		}
	]

	static path = 'artists'
	static endpoint = `http://localhost:3000/${this.path}`
}