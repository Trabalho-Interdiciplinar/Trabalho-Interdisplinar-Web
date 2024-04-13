const firebaseApp = require('firebase/app');

const firebase = firebaseApp.initializeApp(
    {
        apiKey: "AIzaSyCP0Qk0j77SUKAmd2ORDD7qMg2M1Mp6AuQ",
        authDomain: "sweetconnection-923af.firebaseapp.com",
        projectId: "sweetconnection-923af",
        storageBucket: "sweetconnection-923af.appspot.com",
        messagingSenderId: "248424880202",
        appId: "1:248424880202:web:f55c54411c749106cc6eb3"
    }
);

module.exports = firebase