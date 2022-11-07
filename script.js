const form = {
    submit: document.getElementById("send"),
    comment: document.getElementById("words"),
    email: document.getElementById("email"),
    name: document.getElementById("name")
};

function submittable () {
    let comment = form.comment.value.trim();
    let email = form.email.value.trim();
    let name = form.name.value.trim();
    if(comment.length > 4 && email.length > 4 && name.length > 2){
        form.submit.classList.add("send_enabled");
        form.submit.disabled = false;
        console.log("this works")
    } else {
        form.submit.classList.remove("send_enabled");
        form.submit.disabled = true;
    }
} 

function event_listeners () {
    form.comment.addEventListener("keyup", submittable);
    form.email.addEventListener("keyup", submittable);
    form.name.addEventListener("keyup", submittable);
}