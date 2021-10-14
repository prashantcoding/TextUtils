
function isupper(text){
    for(let i=0;i<text.length;i++){
        var a=text[i];
       
        if(a===a.toUpperCase()){
            return true;
        }
    }
    return false;
}

export default isupper;