export async function getAllPokemon(url) {
	return new Promise((resolve, reject) => {
		fetch(url).then((res) => res.json()).then((data) => {
			resolve(data);
		})
	}, 1000);
}

export async function getPokemon(url) {
	return new Promise((resolve, reject) => {
		fetch(url).then((res) => res.json()).then((data) => {
			resolve(data)
		})
	});
}
