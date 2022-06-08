const email = document.getElementById('email');

const senha = document.getElementById('senha');

const botaoEntrar = document.getElementById('entrar');

const senhaC = '123456';

const emailC = 'tryber@teste.com';

const agreementTerm = document.getElementById('agreement');

const submitButton = document.getElementById('submit-btn');

submitButton.disabled = 1;

function entrar() {
  const emailV = email.value;
  const senhaV = senha.value;
  if (emailV === emailC && senhaV === senhaC) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botaoEntrar.addEventListener('click', entrar);

function enableSubmit(event) {
  if (event.target.checked) {
    submitButton.disabled = 0;
    return;
  } submitButton.disabled = 1;
}

agreementTerm.addEventListener('change', enableSubmit);
