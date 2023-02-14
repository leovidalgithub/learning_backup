import router from '../router'

const register = async ({commit}, usuario, isSignUp) => {

	const webAPIKey = 'AIzaSyBiURFQhj9jmJK1T8-zhzjiC-33AbtCljo';
	const signMode = isSignUp ? 'signUp' : 'signInWithPassword';

	try {
		const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${signMode}?key=${webAPIKey}`, {
			method: 'POST',
			body: JSON.stringify({
				email: usuario.email,
				password: usuario.password,
				returnSecureToken: true
			})
		})
		const userDB = await res.json();
		if(userDB.error) {
			return commit('setError', userDB.error.message);
		}
		commit('setUser', userDB);
		commit('setError', null);
		router.push('/');
		sessionStorage.setItem('usuario', JSON.stringify(userDB));
	} catch (e) {
		console.log('Register handler error', e)
	}
}

export default register;