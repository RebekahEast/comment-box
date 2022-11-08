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
    // FIX? how to reset the word counter
});

function myfunction () {
    let comments = document.querySelector("#words");
    let submitted_comment = document.querySelector("#submitted_comment");

    submitted_comment.innerHTML = comments.value;
    
}