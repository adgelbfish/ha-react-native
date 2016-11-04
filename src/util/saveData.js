import Keychain from 'react-native-keychain'
import store from 'react-native-simple-store'

export function savePasswordToKeychain(password, username = 'homeassistant') {
    Keychain
        .setGenericPassword(username, password)
        .then(() => {
            console.log('Credentials saved successfully')
        })
}

export function saveData(obj) {

}