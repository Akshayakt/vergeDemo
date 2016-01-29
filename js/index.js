
document.getElementById('hamburger').addEventListener('click', drawer, false);

function drawer() {
    document.getElementById('drawer').classList.toggle('drawer_left');
}