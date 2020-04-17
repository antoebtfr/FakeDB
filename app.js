function showResult() {
    const resultHTML = document.getElementById('result');
    let result = '{';
    for(let i = 0; i < retrieveKeynames().length; i++){
        result += `"${retrieveKeynames()[i].value}" : "${retrieveValues()[i].value}"`
        if(i !== retrieveKeynames().length -1){
            result += ','
        }
    }
    result += '}'
    resultHTML.innerHTML = result;
}

function retrieveKeynames() {
    const keynamesArray = document.getElementsByClassName('keyname');
    return keynamesArray;
}

function retrieveValues() {
    const valueArray = document.getElementsByClassName('value');
    return valueArray;
}

function main() {
    retrieveKeynames()
    showResult()
    console.log("La fonction main a bien été effectuée")
}
