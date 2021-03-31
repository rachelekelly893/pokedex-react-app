export async function getAllPokemon(url) {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then(res => {
				return res.json()			
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
				.catch( error =>  console.log(error) )
			} 			
		})
		.then((data) => {
	resolve(data);
		})
	},);
}
