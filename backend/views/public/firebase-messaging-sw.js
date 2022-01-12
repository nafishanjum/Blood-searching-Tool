importScripts('https://www.gstatic.com/firebasejs/7.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.10.0/firebase-messaging.js');
const firebaseConfig = {
   apiKey: "AIzaSyBchaG-RefLhTHt4zYLAnJh6Lo2ceqUMKo",
   authDomain: "push-a9ccc.firebaseapp.com",
   databaseURL: "https://push-a9ccc.firebaseio.com",
   projectId: "push-a9ccc",
   storageBucket: "push-a9ccc.appspot.com",
   messagingSenderId: "441059445115",
   appId: "1:441059445115:web:5de503bf933eb6833295de"
 };
firebase.initializeApp(firebaseConfig
   
);

const messaging = firebase.messaging()
messaging.setBackgroundMessageHandler(payload => {
   const title = payload.notification.title;
   console.log('payload', payload.notification.icon);
   const options = {
      body: payload.notification.body,
      icon: payload.notification.icon
   }
   return self.registration.showNotification(title, options);
})
self.addEventListener("notificationclick", function(event) {
     console.log(event);
});