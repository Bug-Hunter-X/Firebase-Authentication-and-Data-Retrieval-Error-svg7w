```javascript
let user = null;
firebase.auth().onAuthStateChanged(firebaseUser => {
  user = firebaseUser;
  if (user) {
    // User is signed in.
    // Get the user's email and other information from the user object.
    const email = user.email;
    const uid = user.uid;
    // Access Firebase Realtime Database securely
    const db = firebase.firestore();
    db.collection('users').doc(uid).get().then(doc => {
      if (doc.exists) {
        console.log('Document data:', doc.data());
      } else {
        console.log('No such document!');
      }
    }).catch(error => {
      console.error('Error getting document:', error);
    });
  } else {
    // User is signed out.
    // ...
  }
});
```