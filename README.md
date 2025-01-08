This repository demonstrates a common error in Firebase applications: attempting to access user data outside the `onAuthStateChanged` listener. This can result in null pointer exceptions if the user is not yet authenticated.

The `bug.js` file shows the incorrect implementation, while `bugSolution.js` provides the corrected code.