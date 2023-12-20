const textArea = document.querySelector(".text-area");
const button = document.querySelector(".button");
const result = document.querySelector(".response");
const regex = /\w/;

button.addEventListener("click", catchContent)

function catchContent()
{
    if (!regex.test(textArea.value))
    {
        alert("digite um texto")
        return;
    }

    drawContent(textArea);
}

function drawContent(text)
{
    let textArray = text.value.split('\n').filter(index => regex.test(index))

    console.log(textArray)
    
    let randomizedNumber = Math.floor(Math.random() * textArray.length);

    spitContent(textArray[randomizedNumber], textArray)
}

function spitContent(text, textArray) 
{
    result.innerHTML = text;

    textArray.forEach(element =>
    {
        textArea.value = textArray.join('\n').trim();
    });
}