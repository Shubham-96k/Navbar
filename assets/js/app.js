const cl = console.log;

const onClickicon = document.getElementById('onClickicon');
const navigation = document.getElementById('navigation');


const onClickhandler = eve => {
    navigation.classList.toggle('active');
}







onClickicon.addEventListener('click', onClickhandler)