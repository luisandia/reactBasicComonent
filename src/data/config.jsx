import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDuFj1njOP6dpaUuqW3umy9aFNdr1ONpeU",
    authDomain: "react-cero-b4512.firebaseapp.com",
    databaseURL: "https://react-cero-b4512.firebaseio.com",
    projectId: "react-cero-b4512",
    storageBucket: "react-cero-b4512.appspot.com",
    messagingSenderId: "259000879770"
}
firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
