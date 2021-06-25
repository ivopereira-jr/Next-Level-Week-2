// Procurar o botao
document.querySelector('#add-time')
  //quando clicar no botao
  .addEventListener('click', cloneField)

//executar uma acao
function cloneField() {
  const fieldContainer = document.querySelectorAll('.schedule-item');

  //duplicar os campos. Que campos?
  const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  //pegar os campos: que campos?
  const fields = newFieldContainer.querySelectorAll('input')

  // verificar se os campos estao preenchidos
  for (let field of fields) {
    if (field.value == "") return;
  }

  //para cada campo, limpar
  fields.forEach(function (field) {
    //pegar o field do momento e limpa ele
    field.value = ""
  })

  //colocar na pagina: onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
