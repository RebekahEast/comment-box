function countChars(obj){
    var maxlength = 140;
    var stdlength = obj.value.length;
    var overlength = (maxlength - stdlength);
    if (overlength < 0) {
        document.getElementById('charNum').innerHTML = '<span style = "color:red; font-weight:bold;"> You are over the word count of ' + maxlength + ' characters by ' + -overlength + '. </span>';
        document.getElementById("send").disabled = true;
        document.getElementById("words").style.borderColor = "red";
    } else {
        document.getElementById('charNum').innerHTML = stdlength + ' out of ' + maxlength + ' characters';
        document.getElementById("words").style.borderColor = "grey";
    }
}

function submitted (event) {
    event.preventDefault ();
    let submitted_comment = document.getElementById("words");
    let submitted_name = document.getElementById("name");
    let submitted_email = document.getElementById("email");

}