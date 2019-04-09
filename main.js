//   TODO: Replace with your project's customized code snippet
var config = {
	apiKey: keyAPI,
    authDomain: domainAuth,
    databaseURL: dbUrl,
    projectId: idProject
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
	// ON BUTT CLICK, GET VALUES FROM INPUT
	let name = document.getElementById('name').value
	let age = document.getElementById('age').value
	// WRITE VALUES TO FIREBASE
	writeUserData(name, age)
}

// CREATE VARIABLE FOR BUTTON
const buttUser = document.getElementById('buttUser')

// ADD CLLIK EVENT TO BUTTON, WRITE DATA TO FIREBASE
buttUser.onclick = function () {
	console.log('click')
}