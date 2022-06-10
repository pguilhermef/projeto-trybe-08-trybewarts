const btnLogin = document.querySelector('#btn-login');
const btnSubmit = document.querySelector('#submit-btn');
const concorda = document.querySelector('#agreement');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');

btnSubmit.disabled = true;
btnSubmit.style.backgroundColor = 'gray';
btnSubmit.style.backgroundColor = 'gray';
btnSubmit.style.color = '#ffffff80';

btnLogin.addEventListener('click', (e) => {
  const emailCerto = 'tryber@teste.com';
  const senhaCerta = 123456;
  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;

  e.preventDefault();
  if (emailValue === emailCerto || passwordValue === senhaCerta) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// Verifica se concorda com os termos
concorda.addEventListener('click', () => {
  if (concorda.checked) {
    btnSubmit.disabled = false;
    btnSubmit.style.backgroundColor = '#470047';
    btnSubmit.style.color = '#ffffff';
  } else {
    btnSubmit.disabled = true;
    btnSubmit.style.backgroundColor = 'gray';
    btnSubmit.style.color = '#ffffff80';
  }
});

function limitText(qty) {
  const limit = 500;
  const total = qty.length;
  const rest = limit - total;
  const counter = document.querySelector('#counter');
  counter.innerText = `Caracteres restantes: ${rest}`;
}

const gambiarra = document.querySelector('#gambiarra');

gambiarra.addEventListener('click', limitText);
