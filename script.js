function countChars(obj){
    var maxlength = 140;
    var stdlength = obj.value.length;
    var overlength = (maxlength - stdlength);
    if (overlength < 0) {
        document.getElementById('charNum').innerHTML = '<span style = "color:red; font-weight:bold;"> You are over the word count of ' + maxlength + ' characters by ' + -overlength + '. </span>';
        document.getElementById("words").style.borderColor = "red";
    } else {
        document.getElementById('charNum').innerHTML = stdlength + ' out of ' + maxlength + ' characters';
        document.getElementById("words").style.borderColor = "grey";
    }
}

comments.addEventListener("submit", (event) => {
    event.preventDefault(); //stops the submission and resetting the page
    console.log("form has been submitted");
    var comment_input = document.getElementById('words');
    var name_input = document.getElementById('name');
    var email_input = document.getElementById('email');
    name_input.value = ''; // resets the form back to empty
    comment_input.value = '';
    email_input.value = '';
    stdlength.value = ''; // FIX? how to reset the word counter
});

function myfunction () {
    let comments = document.querySelector("#words");
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let submitted_comment = document.querySelector("#submitted_comment");
    let submitted_name = document.querySelector("#submitted_name");
    let submitted_email = document.querySelector("#submitted_email");
    submitted_comment.innerHTML = comments.value;
    submitted_name.innerHTML = name.value;
    submitted_email.innerHTML = email.value;
    const d = new Date();
    document.getElementById("date").innerHTML = d;
} 