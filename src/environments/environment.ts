// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  //we added this from: goto console-> project name-> </> -> click #app-> settings -> scroll to project -> copy Config-> paset here
  firebaseConfig: {
    apiKey: "AIzaSyA3M-EwOwvgtIl2JH4geN2lzHwdqUbo134",
    authDomain: "itcresilience-54e90.firebaseapp.com",
    databaseURL: "https://itcresilience-54e90.firebaseio.com",
    projectId: "itcresilience-54e90",
    storageBucket: "itcresilience-54e90.appspot.com",
    messagingSenderId: "535981616605",
    appId: "1:535981616605:web:ff91aa5830168c3f101a34",
    measurementId: "G-K8HYVGZ1KK"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
