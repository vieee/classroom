import * as firebase from "firebase";

const config = {
	apiKey: "AIzaSyClcKl_JvbE9Jj0SPg97O6svW3cIn8lkB8",
	authDomain: "AIzaSyClcKl_JvbE9Jj0SPg97O6svW3cIn8lkB8",
	databaseURL: "https://mentor-mate.firebaseio.com",
	projectId: "mentor-mate",
	storageBucket: "mentor-mate.appspot.com",
	messagingSenderId: "58694606437",
	appId: "1:58694606437:web:d1f053e7eb16e96efbf08c",
	measurementId: "G-LZVHTLHYJV",
};

firebase.initializeApp(config);

const database = firebase.database();
const storage = firebase.storage();

export { firebase, storage, database };
