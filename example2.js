function switchToDarkMode(){
    const body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = 'black';

    const pageContent = document.getElementById('page_content');
    pageContent.style.color = 'white';

    const button = document.getElementById('theme_button');
    button.onclick = switchToLighterMode;
}

function switchToLighterMode(){
    const body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = 'grey';

    const pageContent = document.getElementById('page_content');
    pageContent.style.color = 'black';

    const button = document.getElementById('theme_button');
    button.onclick = switchToDarkMode;
}