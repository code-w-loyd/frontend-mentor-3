const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const email = document.querySelector('#email')
const errorTexts = document.querySelectorAll('.error-text');
const errorimgs = document.querySelector('.error-image')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailval = email.value;


    inputs.forEach((input) => {
        const errorText = input.nextElementSibling;

        if (input.value.trim() === '' ) {
            input.classList.remove('success');
            input.classList.add('error');
            input.style.backgroundSize = '20px 20px';
            errorText.style.display = 'block';

        }
        else if(input === email && !isEmail(emailval) ){
            input.classList.remove('success');
            input.classList.add('error');
            input.style.backgroundSize = '20px 20px';
            errorText.style.display = 'block';

        }
        else {
            input.classList.remove('error');
            input.classList.add('success');
            errorText.style.display = 'none';
            input.style.backgroundSize = '0';
        }

    });
});

const isEmail = (email) => {
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email)
}