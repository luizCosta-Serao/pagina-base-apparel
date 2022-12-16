//SELECIONANDO OS ELEMENTOS
const textError = document.querySelector(".error")
const submit = document.querySelector(".submit")
const email = document.querySelector("form input[type='email']")

//INICIANDO addEventListener com parâmetro "blur"
submit.addEventListener("click", (e) => {
  e.preventDefault()
  //TIPOS DE ERROS
  if(email.value === "") {
    //ERRO TIPO 1
    textError.innerText = "Campo está vazio, preencha corretamente."
    submit.classList.add("active")
    email.classList.add("active")

  } else if (String(email.value).length < 5) {
    //ERRO TIPO 2
    textError.innerText = "É necessário o uso de mais caracteres."
    submit.classList.add("active")
    email.classList.add("active")

  } else if(!String(email.value).includes("@")) {
    //ERRO TIPO 3
    textError.innerText = "É necessário o uso do @."
    submit.classList.add("active")
    email.classList.add("active")

  } else {
    //NÃO HOUVE ERRO
    textError.innerText = "Envio concluído!"
    textError.style.color = "green"
    submit.classList.remove("active")
    email.classList.remove("active")
    email.value = ""
  }
})