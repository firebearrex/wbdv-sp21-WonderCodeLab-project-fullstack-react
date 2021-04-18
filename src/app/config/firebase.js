import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBPCcCcH3TcL43H7rqb0p4-uwKilnkS14E",
    authDomain: "bay-area-events-6383e.firebaseapp.com",
    projectId: "bay-area-events-6383e",
    storageBucket: "bay-area-events-6383e.appspot.com",
    messagingSenderId: "756356878837",
    appId: "1:756356878837:web:460d1fc1ccda2299be10bc",
    measurementId: "G-RH97BD26K6"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
}
firestore.settings(settings)
export default firebase;