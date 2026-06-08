import { auth, db }
from "./firebase-config.js";

import {

GoogleAuthProvider,

signInWithPopup

}
from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

import {

doc,

getDoc

}
from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const provider =
new GoogleAuthProvider();

document
.getElementById("googleLogin")
.addEventListener("click", login);

async function login(){

try{

const result =
await signInWithPopup(auth,provider);

const user = result.user;

const userDoc =
await getDoc(
doc(db,"users",user.uid)
);

if(!userDoc.exists()){

alert(
"Access denied. Contact administrator."
);

return;
}

const role =
userDoc.data().role;

if(role=="principal"){

window.location.href =
"principal.html";

}

else if(role=="teacher"){

window.location.href =
"teacher.html";

}

else if(role=="parent"){

window.location.href =
"parent.html";

}

else if(role=="student"){

window.location.href =
"student.html";

}

else if(role=="office"){

window.location.href =
"office.html";

}

}
catch(error){

console.error(error);

alert(error.message);

}

}
