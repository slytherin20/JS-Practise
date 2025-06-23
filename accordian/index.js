let tabs = document.querySelectorAll('.tabs');
tabs.forEach(tab=> tab.addEventListener('click',(e)=> {toggleSection(e)}));

function toggleSection(e){
    let tab = e.currentTarget;
    let openBtn = tab.querySelector('.open');
    let closeBtn = tab.querySelector('.close');
    let content = tab.querySelector('.content');
    if(openBtn.style.display !='none'){
        closeBtn.style.display = 'inline';
        openBtn.style.display = 'none';
        content.style.display='block';
    }
    else{
        closeBtn.style.display = 'none';
        openBtn.style.display = 'inline';
        content.style.display='none';
    }
}