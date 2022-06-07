const email = document.getElementById('email');

const senha = document.getElementById('senha');

const botaoEntrar = document.getElementById('entrar');

const senhaC = '123456';

const emailC = 'tryber@teste.com';

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
