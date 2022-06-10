const email = document.getElementById('email');

const senha = document.getElementById('senha');

const botaoEntrar = document.getElementById('entrar');

const namePerson = document.getElementById('input-name');

const lastnamePerson = document.getElementById('input-lastname');

const inputEmail = document.getElementById('input-email');

const house = document.getElementById('house');

const family = document.getElementsByName('family');

const content = document.getElementsByClassName('subject');

const agreementTerm = document.getElementById('agreement');

const submitButton = document.getElementById('submit-btn');

const inputTextArea = document.getElementById('textarea');

const counterCaracters = document.getElementById('counter');

const allFormData = document.getElementById('form-data');

const rating = document.getElementsByName('rate');

const senhaC = '123456';

const emailC = 'tryber@teste.com';

const myContent = [];

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

function howManyCharacters() {
  const realCharLength = inputTextArea.value.length;
  counterCaracters.innerText = (500 - realCharLength);
}
inputTextArea.addEventListener('input', howManyCharacters);

function whoIsMyFamily() {
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked === true) {
      return family[index].value;
    }
  }
}

function howManyContents() {
  for (let index = 0; index < content.length; index += 1) {
    if (content[index].checked === true) {
      myContent.push(content[index].value);
    }
  }
}

function rateValue() {
  for (let index = 0; index < rating.length; index += 1) {
    if (rating[index].checked === true) {
      return rating[index].value;
    }
  }
}

function sendForm() {
  howManyContents();
  allFormData.innerText = `Nome: ${namePerson.value} ${lastnamePerson.value}
Email: ${inputEmail.value}
Casa: ${house.value}
Família: ${whoIsMyFamily()}
Matérias: ${myContent.join(', ')}
Avaliação: ${rateValue()}
Observações: ${inputTextArea.value}`;
  document.getElementById('evaluation-form').style.display = 'none';
  document.getElementById('submit-btn').style.display = 'none';
  allFormData.style.display = 'flex';
}
submitButton.addEventListener('click', sendForm); //
