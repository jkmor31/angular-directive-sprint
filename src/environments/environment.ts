// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7J3CGsszihwfZE68AZ7M8cM33MMIfk8Q",
  authDomain: "angular-directive-sprint.firebaseapp.com",
  projectId: "angular-directive-sprint",
  storageBucket: "angular-directive-sprint.appspot.com",
  messagingSenderId: "346211052401",
  appId: "1:346211052401:web:f41380c4e336acde1464d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);