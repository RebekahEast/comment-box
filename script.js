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

    let display_comment = document.createElement("p");
    display_comment.innerText = 'name: ${submitted_name} email:' //this doesn't work?? //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
    responses.appendChild(display_comment);
    console.log(display_comment);
    event.target.reset() //resets the form after submitting
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
