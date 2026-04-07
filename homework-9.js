// 3. Сверстать данный footer, используя семантические теги (footer, nav и т.д.)

const emailForm = document.querySelector("#subscribe-form");
emailForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
});

const modalForm = document.getElementById("registration-form");
const modalWindow = document.querySelector('.modal');
const bgModal = document.querySelector('.modal-content')
const regButton = document.querySelector('.registration-button');
const closeButton = document.querySelector('.close-button');

regButton.addEventListener('click', () => {
    modalWindow.classList.add('active');
    document.body.classList.add('no-scroll');
});

closeButton.addEventListener('click', () => {
    modalWindow.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

const userLastName = document.getElementById('user-last-name');
const userName = document.getElementById('user-name');
const userDateOfBirth = document.getElementById('user-date-of-birth');
const userLogin = document.getElementById('user-login');
const userPass = document.getElementById('user-pass');
const userPassConfirm = document.getElementById('user-pass-confirm');

modalForm.addEventListener('submit', (event) => {
    if (userPass.value != userPassConfirm.value) {
        event.preventDefault();
        alert('Пароли не совпадают!');
    } else if (!modalForm.reportValidity()) {
        alert('Заполните все поля!');
    } else {
        alert('Регистрация успешна!');
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data.regData = new Date().toLocaleString();
        console.log(data);
        modalWindow.classList.remove('active');
    };
    });