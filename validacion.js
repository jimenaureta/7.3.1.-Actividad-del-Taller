function showAlertSuccess() {    
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
function hideAlerts() {
const ok = document.getElementById("alert-success");
const bad = document.getElementById("alert-danger");
if (ok) ok.classList.remove("show");
if (bad) bad.classList.remove("show");
}

const MIN_PASS_LEN = 6;

window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById("regBtn");
    if (!btn) return;


btn.addEventListener("click", () =>{
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const terminos = document.getElementById("terminos").checked;

    hideAlerts();

   
    let valido = true

    if (!nombre || !apellido || !email || !password1 || !password2){
    valido = false;
    }

    if (password1.length < MIN_PASS_LEN || password1
        !== password2){
        valido = false;
    };
 


    if (!terminos){
        valido = false;
    }

    if (valido){
        showAlertSuccess();
    } else {
        showAlertError();
    }

});
});








