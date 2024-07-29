document.addEventListener('DOMContentLoaded', () => {
    const userID = document.getElementById('userID');
    const password = document.getElementById('password');
    const submitBtn = document.querySelector('.submit-btn');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');

    function checkInputs() {
        if (userID.value && password.value) {
            submitBtn.style.display = 'inline-block';
            leftBtn.style.display = 'none';
            rightBtn.style.display = 'none';
        }
    }

    userID.addEventListener('input', checkInputs);
    password.addEventListener('input', checkInputs);

    submitBtn.addEventListener('click', () => {
        if (!userID.value || !password.value) {
            submitBtn.style.display = 'none';
            leftBtn.style.display = 'inline-block';
            rightBtn.style.display = 'inline-block';
        }
    });
});
