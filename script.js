const pass = document.querySelector("#pass");
const confirm = document.querySelector("#confirm");
function checkPass(e) {
    if(pass.value === confirm.value) {
        pass.classList.remove('error');
        confirm.classList.remove('error');

    }
    else {
        pass.classList.add('error');
        confirm.classList.add('error');
    }
}

confirm.addEventListener('input', checkPass);
pass.addEventListener('input', checkPass);

