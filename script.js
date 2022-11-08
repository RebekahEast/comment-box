function countChars(obj){
    var maxlength = 20;
    var stdlength = obj.value.length;
    var overlength = (maxlength - stdlength);

    if (overlength < 0) {
        document.getElementById('charNum').innerHTML = '<span style = "color:red;"> You are over the word count of ' + maxlength + ' characters by ' + -overlength + '. </span>';
    } else {
        document.getElementById('charNum').innerHTML = stdlength + ' out of ' + maxlength + ' characters reminaing';
        }
}

comments.addEventListener('submit', (event)=> {
    event.preventDefault();
});