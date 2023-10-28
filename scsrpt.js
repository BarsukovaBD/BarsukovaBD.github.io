<script srs = "file:///Users/vasiliskabarsukova/Downloads/BarsukovaBD.github-5.io-main/index.html" defer>
  const form = document.getElementById('avtor');

let checkboxDiv = document.getElementById('block_checkbox');
checkboxDiv.classList.add('hidden_block');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let textName = document.getElementById('textName');
    let textArea = document.getElementById('textarea');
    let isValid = true;
    isValid = isNameValid() && isMessageValid() && isEmailValid() && isDataValid() && isTelValid() && isURLValid();
    if (isValid){
        e.currentTarget.submit();
    }
});

let radios = document.getElementById('radios').children;
for (let i = 0; i < radios.length; i++) {
    const element = radios[i].children[0];
    switch (element.value) {
        case 'simple':
            element.addEventListener('change', hiddenSimple);
            break;
        case 'e-mail':
            element.addEventListener('change', hiddenEmail);
            break;
        case 'tel':
            element.addEventListener('change', hiddenTel);
            break;
        case 'data':
            element.addEventListener('change', hiddenData);
            break;
        case 'url':
            element.addEventListener('change', hiddenURL);
            break;
        default:
            break;
    }
}

function hiddenSimple(){
    let inputs = document.getElementById('block_info').children[1].children;
    inputs[1].classList.add('hidden_block');
    inputs[2].classList.add('hidden_block');
    inputs[3].classList.add('hidden_block');
    inputs[4].classList.add('hidden_block');
}

function hiddenEmail(){
    let inputs = document.getElementById('block_info').children[1].children;
    inputs[1].classList.remove('hidden_block');
    inputs[2].classList.add('hidden_block');
    inputs[3].classList.add('hidden_block');
    inputs[4].classList.add('hidden_block');
}

function hiddenTel(){
    let inputs = document.getElementById('block_info').children[1].children;
    inputs[1].classList.add('hidden_block');
    inputs[2].classList.remove('hidden_block');
    inputs[3].classList.add('hidden_block');
    inputs[4].classList.add('hidden_block');
}

function hiddenData(){
    let inputs = document.getElementById('block_info').children[1].children;
    inputs[1].classList.remove('hidden_block');
    inputs[2].classList.remove('hidden_block');
    inputs[3].classList.remove('hidden_block');
    inputs[4].classList.add('hidden_block');
}

function hiddenURL(){
    let inputs = document.getElementById('block_info').children[1].children;
    inputs[1].classList.add('hidden_block');
    inputs[2].classList.add('hidden_block');
    inputs[3].classList.add('hidden_block');
    inputs[4].classList.remove('hidden_block');
}

let select = document.getElementById('select');
select.addEventListener('change', function(){
    switch (this.value) {
        case 'without':
            checkboxDiv.classList.add('hidden_block');
            break;
        case 'learning':
            checkboxDiv.classList.remove('hidden_block');
            break;
        default:
            break;
    }
});

select.selectedIndex = 0;
radios[0].children[0].checked = true;
hiddenSimple();

function isNameValid(){

    if (true) {
        return false
    }
    return true;
}

function isMessageValid(){
    return true;
}

function isTelValid(){
    return true;
}

function isEmailValid(){
    return true;
}
function isDataValid(){
    return true;
}
function isURLValid(){
    return true;
}</script>

