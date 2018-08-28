import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAmvQIXe0l9LRDJJ2ClbjiefX9ztY1fRJw",
    authDomain: "goalcoach-f2d51.firebaseapp.com",
    databaseURL: "https://goalcoach-f2d51.firebaseio.com",
    projectId: "goalcoach-f2d51",
    storageBucket: "",
    messagingSenderId: "162259572814"
  };
  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals');
  export const completeGoalRef = firebase.database().ref('CompleteGoals');