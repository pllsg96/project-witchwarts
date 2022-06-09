const email = document.getElementById('email');

const senha = document.getElementById('senha');

const botaoEntrar = document.getElementById('entrar');

const namePerson = document.getElementById('input-name');

const lastnamePerson = document.getElementById('input-lastname');

const house = document.getElementById('house');

const family = document.getElementsByName('family');

const content = document.getElementsByClassName('subject');

const agreementTerm = document.getElementById('agreement');

const submitButton = document.getElementById('submit-btn');

const inputTextArea = document.getElementById('textarea');

const counterCaracters = document.getElementById('counter');

const allFormData = document.getElementById('form-data');

const senhaC = '123456';

const emailC = 'tryber@teste.com';

let sonOf;

let myContent= [];

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
      sonOf = family[index].value;
    }
  }
}

function howManyContents() {
  for (let index = 0; index < content.length; index += 1) {
    if (content[index].checked === true) {
      // console.log(content[index].value);
      myContent.push(content[index].value);
    }
  }
}

function sendForm() {
  whoIsMyFamily();
  howManyContents();
  let formConstruction = allFormData.innerText;
  formConstruction = `Nome: -${namePerson.value}- -${lastnamePerson.value}-
Email: -${email.value}-
Casa: -${house.value}-
Familia: -${sonOf}-
Matérias: -${myContent}-`;
  // console.log(myContent.split(','));
  console.log(formConstruction);
}
submitButton.addEventListener('click', sendForm);
