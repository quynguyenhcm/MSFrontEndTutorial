function saveTextValue(){
    var textValue = document.getElementsByName('position')[0].value;
    saveToCookie('Position', textValue, showTextSuccess);
}

function saveRadioValue(){
    var radioValue;
    var radioOptions = document.getElementsByName('department');
    for(var index = 0; index < radioOptions.length; index++){
        if(radioOptions[index].checked){
            radioValue = radioOptions[index].value;
            break;
        }
    }
    saveToCookie('Department', radioValue, showTextSuccess);
}

function showTextSuccess(result){
    window.alert('You have successfully save [' + result + '] from the text input to your cookie');
}

function saveToCookie(key, value, onCompletion){
    var cookieValue = key + ';'+ value;
    document.cookie += cookieValue;
    onCompletion(cookieValue);
}