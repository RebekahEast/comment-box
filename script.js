function countChars(obj){
    var maxlength = 140;
    var stdlength = obj.value.length;
    var overlength = (maxlength - stdlength);

    if (overlength < 0) {
        document.getElementById('charNum').innerHTML = '<span style = "color:red; font-weight:bold;"> You are over the word count of ' + maxlength + ' characters by ' + -overlength + '. </span>';
    } else {
        document.getElementById('charNum').innerHTML = stdlength + ' out of ' + maxlength + ' characters remaining';
        }
}

comments.addEventListener('submit', (event)=> {
    event.preventDefault();
});