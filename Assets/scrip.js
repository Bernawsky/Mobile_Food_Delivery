// Verifica se a mensagem já foi exibida
if (!localStorage.getItem("welcomeMessageDisplayed")) {
  // Mostra a mensagem de boas-vindas
  document.getElementById("welcomeMessage").style.display = "block";

  // Define um item no Local Storage para lembrar que a mensagem foi exibida
  localStorage.setItem("welcomeMessageDisplayed", "true");
}
