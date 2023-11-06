const cl = console.log;

const icon = document.getElementById('icon');
const icon2 = document.getElementById('icon2');
const navlist = document.getElementById('navlist');
const navlist2 = document.getElementById('navlist2');



const onClickhandler = () => {
    navlist.classList.toggle("active");
}

const onClick = () => {
    navlist2.classList.toggle("active");
}


icon.addEventListener('click',onClickhandler);
icon2.addEventListener('click',onClick);