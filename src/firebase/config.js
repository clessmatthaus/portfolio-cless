import firebase  from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDjUXj94tNM4KLLYTIWJ6z39RxUHH_HVJI",
    authDomain: "vue-contact-form-d651b.firebaseapp.com",
    projectId: "vue-contact-form-d651b",
    storageBucket: "vue-contact-form-d651b.appspot.com",
    messagingSenderId: "645565697026",
    appId: "1:645565697026:web:831579fbdea61ff7382b1b"
  };

  //
  
 firebase.initializeApp(firebaseConfig);


  //
  const projectFirestore = firebase.firestore()

  export { projectFirestore }