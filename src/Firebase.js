import firebase from "firebase/compat/app";
import "firebase/compat/database"

const firebaseConfig = {
  apiKey: "AIzaSyA1Xgp4hV-YXodordA3rvF-OK_hRwu7Hmw",
  authDomain: "customer-management-efa45.firebaseapp.com",
  projectId: "customer-management-efa45",
  storageBucket: "customer-management-efa45.appspot.com",
  messagingSenderId: "600929803923",
  appId: "1:600929803923:web:50737feff73f7d84037766"
};

const fireDb = firebase.initializeApp(firebaseConfig)
export default fireDb.database().ref()