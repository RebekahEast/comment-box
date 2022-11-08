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



const commentForm = document.getElementById("comments");

comments.addEventListener("submit", (event) => {
    event.preventDefault(); //stops the submission and resetting the page
    console.log("form has been submitted");
});

