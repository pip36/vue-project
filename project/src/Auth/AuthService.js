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
                let expireDate = JSON.stringify(
                    authResult.expiresIn * 1000 + new Date().getTime()
                  )
                store.commit('setTokens', {
                    accessToken: authResult.accessToken, 
                    idToken: authResult.idToken,
                    expiresAt: expireDate
                })
                router.replace('/')
            }            
        })
    }

    function logout () {
        store.commit('clearTokens')
    }

    function isLoggedIn () {
        if (store.state.auth.accessToken && store.state.auth.idToken) {
            let expiresAt = JSON.parse(store.state.auth.expiresAt)
            return new Date().getTime() < expiresAt
        }
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
