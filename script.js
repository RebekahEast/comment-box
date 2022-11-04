let limitChar = (element) => {
    const maxChar = 10;
    const CloseChar = 6
    
    let ele = document.getElementById(element.id);
    let charLen = ele.value.length;
    let p = document.getElementById('charCounter');
    p.innerHTML = maxChar - charLen + ' characters remaining';
    
    if (charLen > maxChar) {
        ele.value = ele.value.substring(0, maxChar);
        p.innerHTML = 0 + ' characters remaining'; 
    }

    if (charLen > CloseChar ) {
        
    }
}