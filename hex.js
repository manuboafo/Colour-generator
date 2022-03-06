const body = document.getElementsByTagName('body')[0];
const button = document.getElementsByTagName('button')[0];
const text = document.getElementById('code');

const decimals = ['A','B','C','D','E','1','2','3','4','5','6','7','8','9'];




const generate = () => {
    let code = [];

    for(let i = 1; i <= 6; i++){
        let random =  Math.floor(Math.random() * decimals.length );
        code.push(decimals[random]);    
    }
    const finalcode = code.join('');
    text.innerText = `#${finalcode}`;
    body.style.backgroundColor = `#${finalcode}`;
}



button.addEventListener("click", generate);
