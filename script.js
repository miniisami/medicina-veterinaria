const inputCheck = document.querySelector('#modo-noturno')
const elemento = document.querySelector('body')

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'light'
    elemento.setAttribute("data-bs-theme", modo)
})const inputCheck = document.querySelector('#modo-noturno')
const elemento = document.querySelector('body')

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'light'
    elemento.setAttribute("data-bs-theme", modo)
})

function enviarFormulario() {
  setTimeout(() => {
    // Limpar todos os campos do formulário
    document.getElementById('floatingNome').value = '';
    document.getElementById('floatingEmail').value = '';
    document.getElementById('floatingTelefone').value = '';
    document.getElementById('nivel-satisfacao').value = '';
    document.querySelector('.form-select').selectedIndex = 0;
    document.getElementById('flexCheckDefault').checked = false;

    // Mostrar um popup de agradecimento
    alert("Obrigado! Logo nossa equipe entrará em contato.");
  }, 0);
}