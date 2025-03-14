import { ArtistModel } from "./Artist.model"

export class SongModel {
	static section = 'Sange'

	static elements = [
		{ 
			name: "title", 
			title: "Title", 
			type: "text", 
			required: true
		},
		{ 
			name: "content", 
			title: "Content", 
			type: "textarea", 
			required: true
		},
		{ 
			name: "artist_id", 
			title: "Artist", 
			type: "select", 
			required: true, 
			model: ArtistModel
		}
	]

	static path = 'songs'
	static endpoint = `http://localhost:3000/${this.path}`
}