export async function getAllPokemon(url) {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then(res => {
			if (res.ok) {
				return res.json()
			} else {
				return Promise.reject()
			}			
		})
		.then((data) => {
	resolve(data);
		})
	},);
}

export async function getPokemon(url) {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then(res => {
			if (res.ok) {
				return res.json()
			} else {
				Promise.reject()
			} 			
		})
		.then((data) => {
	resolve(data);
		})
	},);
}
