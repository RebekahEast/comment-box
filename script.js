var form = document.getElementById("comments");
function submit_form(event) { 
    event.preventDefault(); 
    var submitted_comment = document.getElementById("words").value;
    var submitted_name = document.getElementById("name").value;
    var submitted_email = document.getElementById("email").value;
    let responses = document.getElementById("responses");
    console.log(submitted_comment);
    console.log(submitted_email);
    console.log(submitted_name);

    let display_comment = document.createElement("div");
    display_comment.innerText = 'name: ${submitted_name} email: ${submitted_email}: ' //this doesn't work??
    console.log(display_comment);
} 

form.addEventListener('submit', submit_form);

function countChars(obj){
    var maxlength = 140;
    var stdlength = obj.value.length;
    var overlength = (maxlength - stdlength);
    if (overlength < 0) {
        document.getElementById('charNum').innerHTML = '<span style = "color:red; font-weight:bold;"> You are over the word count of ' + maxlength + ' characters by ' + -overlength + '. </span>';
        document.getElementById("send").disabled = true;
        document.getElementById("words").style.borderColor = "red";
    }
    if (maxlength > stdlength)  {
        document.getElementById('charNum').innerHTML = stdlength + ' out of ' + maxlength + ' characters';
        document.getElementById("words").disabled = false; //this doesn't work???
        document.getElementById("words").style.borderColor = "grey";
    }
}
