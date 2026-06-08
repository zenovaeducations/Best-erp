import { auth, db }
from "./firebase-config.js";

import {
GoogleAuthProvider,
signInWithRedirect,
getRedirectResult,
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

import {
doc,
getDoc
}
from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const provider = new GoogleAuthProvider();

/* LOGIN BUTTON */

document
.getElementById("googleLogin")
.addEventListener("click", async () => {

await signInWithRedirect(auth, provider);

});

/* AFTER REDIRECT */

getRedirectResult(auth)

.then((result)=>{

console.log("Redirect Success");

})

.catch((error)=>{

console.error(error);

alert(error.message);

});

/* CHECK LOGGED IN USER */

onAuthStateChanged(auth, async(user)=>{

if(!user) return;

console.log("UID:", user.uid);

const userDoc =
await getDoc(
doc(db,"users",user.uid)
);

if(!userDoc.exists()){

alert("User not found in Firestore");

return;

}

const role =
userDoc.data().role;

if(role==="principal"){

window.location.href =
"principal.html";

}

else if(role==="teacher"){

window.location.href =
"teacher.html";

}

else if(role==="parent"){

window.location.href =
"parent.html";

}

else if(role==="student"){

window.location.href =
"student.html";

}

else if(role==="office"){

window.location.href =
"office.html";

}

});
