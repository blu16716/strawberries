var app_fireBase = {}
(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC2W3RL8Tzpge2S-kcSacYHUjNSpGsbF_o",
    authDomain: "strawberries-93286.firebaseapp.com",
    databaseURL: "https://strawberries-93286.firebaseio.com",
    projectId: "strawberries-93286",
    storageBucket: "strawberries-93286.appspot.com",
    messagingSenderId: "667344337550"
  };
  firebase.initializeApp(config);  

  app_fireBase = firebase;
})()