import auth0 from 'auth0-js'
import router from '@/router'
import store from '@/store'

function authService () {
    let auth = new auth0.WebAuth({
        domain: 'dev-task.eu.auth0.com',
        clientID: 'xmVoOQxLsRTGjztx3yT7lU28Z66DlvQ2',
        redirectUri: 'http://localhost:8080/authcallback',
        audience: 'https://dev-task.eu.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    })

    function handleAuthentication () {
        auth.parseHash({ hash: window.location.hash }, (err, authResult) => {
            if (err) {
                console.log(err)
                router.replace('/')
            }         
            else if (authResult && authResult.accessToken && authResult.idToken) {
                store.commit('setTokens', {
                    accessToken: authResult.accessToken, 
                    idToken: authResult.idToken
                })
                router.replace('/')
            }            
        })
    }

    function logout () {
        store.commit('clearTokens')
    }

    function isLoggedIn () {
        return (store.state.auth.accessToken && store.state.auth.idToken)
    }

    return {
        login: () => { 
            auth.authorize({
                scope: 'profile' 
            }) 
        },
        handleAuthentication,
        logout,
        isLoggedIn
    }
}

export default authService()
