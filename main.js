//   TODO: Replace with your project's customized code snippet
var config = {
	apiKey: "AIzaSyBrKaKCuxCJDHFLFVo96GdFYovLpk1K_Xs",
    authDomain: "test-json-e5807.firebaseapp.com",
    databaseURL: "https://test-json-e5807.firebaseio.com",
    projectId: "test-json",
    // storageBucket: "<BUCKET>.appspot.com",
    // messagingSenderId: "<SENDER_ID>",
};

//   Initialize Firebase
firebase.initializeApp(config);

var database = firebase.database();

// FUNCTION TO WRTIE TO FIREBASE DB @ /users
function writeUserData(userName, userAge) {
	firebase.database().ref('users/').push({
	  name: userName,
	  age: userAge
	});
}

// CREATE VARIABLE FOR BUTTON
const butt = document.getElementById('butt')

// ADD CLLIK EVENT TO BUTTON, WRITE DATA TO FIREBASE
butt.onclick = function () {
	let name = document.getElementById('name').value
	let age = document.getElementById('age').value
	writeUserData(name, age)
}