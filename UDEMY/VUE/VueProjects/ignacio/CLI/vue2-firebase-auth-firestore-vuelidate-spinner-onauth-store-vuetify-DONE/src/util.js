const getTimeOut = (commit) => {

	const time = Math.floor(Math.random() * (1600 - 600) + 600);

	setTimeout(() => {
		commit('cargarFirebase', false)
	}, time)
}

export { getTimeOut }