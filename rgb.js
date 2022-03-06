const body = document.getElementsByTagName("body")[0];
const button = document.getElementsByTagName("button")[0];
const text = document.getElementById("code");

const generate = () =>{
    let fristcode = Math.floor(Math.random()*255);
    let secondcode = Math.floor(Math.random() * 255);
    let thirdcode = Math.floor(Math.random() * 255);
    let finalcode = `RGB(${fristcode},${secondcode},${thirdcode})`;
    text.innerText = finalcode
    body.style.backgroundColor = finalcode;
}


button.addEventListener('click',generate);