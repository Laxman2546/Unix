const sidebar = document.getElementById("sidebar");
const btn = document.getElementById("trigger-btn");
const menuText = document.getElementsByClassName("menu-text");

let sidebarActive = false; 

btn.addEventListener('click', () => {
    sidebar.classList.toggle('closed');
    sidebarActive = !sidebarActive;

    for (let i = 0; i < menuText.length; i++) {
        menuText[i].style.display = sidebarActive ? 'inline-block' : 'none';
    }
});
