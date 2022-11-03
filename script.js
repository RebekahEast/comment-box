var commentinput = document.getElementById("comment-input");
var wordcount = document.getElementById("word-count");

commentinput.addEventListener("keyup",function(){
    var characters = commentinput.value.split('');
    wordcount.innerText = characters.length;
});