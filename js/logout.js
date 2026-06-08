import { auth }
from "./firebase-config.js";

import {
 signOut
}
from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

document
.getElementById("logoutBtn")
.addEventListener("click",async()=>{

 await signOut(auth);

 window.location.href="index.html";

});
