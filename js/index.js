
document.getElementById('hamburger').addEventListener('click', drawer, false);

function drawer() {
    document.getElementById('drawer').classList.toggle('drawer_left');
}

document.getElementById('new_articles').addEventListener('click', drawerRight, false);

function drawerRight() {
   document.getElementById('right_drawer').classList.toggle('drawer_right');
}

document.getElementById('trending-toggle').addEventListener('click', dropDown, false);

function dropDown() {
   document.getElementById('drop_down').classList.toggle('drop_down_open');
   document.getElementById('trending-toggle').classList.toggle('toggle_bg');
 }
