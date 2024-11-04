//Verification length Form SingIn
document.getElementById('Button-SingIn').addEventListener('click', function () {
  const ContainerHTML = document.getElementById('ContainerHTML');
  const EmailSingIn = document.getElementById('Email-SingIn');
  const PasswordSingIn = document.getElementById('Password-SingIn');

  if (EmailSingIn.value.trim() !== '' && PasswordSingIn.value.trim() !== '') {
    ContainerHTML.style.animation = 'Open-Container ease-out 0.7s';
    ContainerHTML.style.display = 'flex';
  }
});

//Return Form SingIn
document.getElementById('Form-SingIn').addEventListener('submit', function (event) {
  event.preventDefault();
  const EmailSingIn = document.getElementById('Email-SingIn').value;
  const PasswordSingIn = document.getElementById('Password-SingIn').value;
  const ContainerText = document.getElementById('ContainerText-HTML');

  ContainerText.innerHTML = `<h1>Sent Successfully</h1><br><br>
   <h2>Email<h2>
   <span>${EmailSingIn}</span><br><br>
   <h2>Password</h2>
   <span>${PasswordSingIn}</span><br><br>
  `;
});

document.getElementById('ButtonClose-HTML').addEventListener('click', event => {
  const ButtonClose = document.getElementById('ButtonClose-HTML');
  const BodyHome = document.getElementById('BodyHome');
  if (event.target === ButtonClose) {
    window.location.href = 'home.html';
    BodyHome.style.animation = 'NewPage ease-out 0.7s';
  }
});

document.getElementById('Button-FixPassword').addEventListener('click', event => {
  const ButtonFix = document.getElementById('Button-FixPassword');
  const ContainerHTML = document.getElementById('ContainerHTML');

  if (event.target === ButtonFix) {
    ContainerHTML.style.animation = 'Close-Container ease-out 0.7s';
    setTimeout(() => {
      ContainerHTML.style.display = 'none';
    }, 700);
  }
});

//Hide Password SingIn

document.getElementById('Icon-Password-SingIn').addEventListener('click', function () {
  const IconEye = document.getElementById('Icon-Password-SingIn');
  const Password = document.getElementById('Password-SingIn');

  if (Password.type === 'password') {
    IconEye.classList.remove('fa-eye');
    IconEye.classList.add('fa-eye-slash');
    Password.type = 'text';
  } else if (Password.type === 'text') {
    IconEye.classList.add('fa-eye');
    IconEye.classList.remove('fa-eye-slash');
    Password.type = 'password';
  }
});

//Modal Forgot

document.getElementById('Forgot').addEventListener('click', () => {
  const ModalForgot = document.getElementById('ModalForgot');
  const ContainerForgot = document.getElementById('ContainerForgot');

  ModalForgot.style.display = 'flex';
  ContainerForgot.style.display = 'flex';
  ContainerForgot.style.animation = 'Open-Container ease-out 0.5s';
  setTimeout(() => {
    ModalForgot.style.background = 'linear-gradient(180deg, #fbedea55 , #000000f5)';
    ModalForgot.style.backdropFilter = 'blur(4px)';
  }, 500);
});

document.getElementById('IconForgot').addEventListener('click', event => {
  const ModalForgot = document.getElementById('ModalForgot');
  const ContainerForgot = document.getElementById('ContainerForgot');

  if ((event.target = ModalForgot || event.target == IconForgot)) {
    ContainerForgot.style.animation = 'Close-Container ease-out 0.5s';
    setTimeout(() => {
      ModalForgot.style.display = 'none';
    }, 500);
  }
});

//Verification length Form Forgot
document.getElementById('Button-Forgot').addEventListener('click', function () {
  const EmailForgot = document.getElementById('Email-Forgot');
  const ContainerCode = document.getElementById('ContainerCode');
  const ContainerForgot = document.getElementById('ContainerForgot');

  if (EmailForgot.value.trim() !== '') {
    ContainerForgot.style.animation = 'Close-Container ease-out 0.5s';
    setTimeout(() => {
      ContainerForgot.style.display = 'none';
      ContainerCode.style.display = 'flex';
    }, 500);
    ContainerCode.style.animation = 'Open-Container ease-out 0.5s';
  }
});

//Return Form SingIn
document.getElementById('Form-Forgot').addEventListener('submit', function (event) {
  event.preventDefault();
});

//

//New Password of SingIn
document.getElementById('Button-NewPassword').addEventListener('click', event => {
  const ContainerPassword = document.getElementById('Container-NewPassword');
  const ButtonNewPassword = document.getElementById('Button-NewPassword');
  const ContainerCode = document.getElementById('ContainerCode');
  const ButtonUp = document.getElementById('Button-Up');
  const ModalForgot = document.getElementById('ModalForgot');

  if (event.target === ButtonNewPassword) {
    ButtonUp.style.zIndex = '-1';
    ModalForgot.style.backdropFilter = 'none';
    ModalForgot.style.background = 'none';
    ContainerCode.style.animation = 'Close-Container ease-out 0.5s';
    ContainerPassword.style.zIndex = '3';
    setTimeout(() => {
      ContainerPassword.style.display = 'flex';
      ContainerCode.style.display = 'none';
      ContainerPassword.style.animation = 'Open-Container ease-out 0.5s';
    }, 500);
  }
});

//Window SingUp

document.getElementById('Up-Down').addEventListener('click', function () {
  const SingIn = document.getElementById('SingIn');
  const SingUp = document.getElementById('SingUp');
  const ButtonUp = document.getElementById('Up-Down');
  const icon = document.getElementById('icon-chevron');

  if (SingUp.style.display === 'none' || SingUp.style.display === '') {
    SingIn.style.filter = 'blur(7px)';
    SingUp.style.display = 'flex';
    SingUp.style.animation = 'up-SingUp ease-out 0.9s';
    ButtonUp.style.animation = 'up-button ease-out 0.9s';
    ButtonUp.style.bottom = '65vh';
    ButtonUp.style.width = '100%';
    ButtonUp.style.height = '80px';
    ButtonUp.style.padding = '0px 0px 30px 0px';
    ButtonUp.style.background = '#FEF9F9';
    ButtonUp.style.color = '#FF785B';
    ButtonUp.style.fontSize = '25px';
    icon.classList.remove('fa-chevron');
    icon.classList.add('fa-minus');
    icon.style.fontSize = '45px';
  } else if (SingUp.style.display === 'flex') {
    SingIn.style.filter = 'blur(0px)';
    SingUp.style.animation = 'down-SingUp ease-out 0.9s';
    ButtonUp.style.animation = 'down-button ease-out 0.9s';
    icon.classList.remove('fa-minus');
    icon.classList.add('fa-chevron');
    icon.style.fontSize = '15px';
    ButtonUp.style.fontSize = '15px';
    ButtonUp.style.bottom = '0px';
    ButtonUp.style.width = '90%';
    ButtonUp.style.height = '55px';
    ButtonUp.style.padding = '0px';
    ButtonUp.style.background = '#FF785B';
    ButtonUp.style.color = '#FFFFFF';
    setTimeout(() => {
      SingUp.style.display = 'none';
    }, 900);
  }
});

//Hide Password SingUp
document.getElementById('Icon-Password-SingUp').addEventListener('click', function () {
  const IconEye = document.getElementById('Icon-Password-SingUp');
  const Password = document.getElementById('Password-SingUp');

  if (Password.type === 'password') {
    IconEye.classList.remove('fa-eye');
    IconEye.classList.add('fa-eye-slash');
    Password.type = 'text';
  } else if (Password.type === 'text') {
    IconEye.classList.add('fa-eye');
    IconEye.classList.remove('fa-eye-slash');
    Password.type = 'password';
  }
});

document.getElementById('Icon-Confirm-Password-SingUp').addEventListener('click', function () {
  const IconEye = document.getElementById('Icon-Confirm-Password-SingUp');
  const Password = document.getElementById('Confirm-Password-SingUp');

  if (Password.type === 'password') {
    IconEye.classList.remove('fa-eye');
    IconEye.classList.add('fa-eye-slash');
    Password.type = 'text';
  } else if (Password.type === 'text') {
    IconEye.classList.add('fa-eye');
    IconEye.classList.remove('fa-eye-slash');
    Password.type = 'password';
  }
});

//Verification length Form SingUp
document.getElementById('Button-SingUp').addEventListener('click', function () {
  const NameSingUp = document.getElementById('Name-SingUp');
  const EmailSingUp = document.getElementById('Email-SingUp');
  const PasswordSingUp = document.getElementById('Password-SingUp');
  const ConfirmSingUp = document.getElementById('Confirm-Password-SingUp');

  if (
    NameSingUp.value.trim() !== '' &&
    EmailSingUp.value.trim() !== '' &&
    PasswordSingUp.value.trim() !== '' &&
    ConfirmSingUp.value.trim() !== ''
  ) {
    ConfirmPassword();
  }
});

function ConfirmPassword() {
  const NameSingUp = document.getElementById('Name-SingUp').value.trim();
  const EmailSingUp = document.getElementById('Email-SingUp').value.trim();
  const PasswordSingUp = document.getElementById('Password-SingUp').value.trim();
  const ConfirmSingUp = document.getElementById('Confirm-Password-SingUp').value.trim();
  const ContainerHTML = document.getElementById('ContainerHTML');
  const ContainerText = document.getElementById('ContainerText-HTML');
  const ButtonFix = document.getElementById('Button-FixPassword');
  const ButtonClose = document.getElementById('ButtonClose-HTML');

  if (ConfirmSingUp === PasswordSingUp) {
    ContainerHTML.style.display = 'flex';
    ContainerHTML.style.animation = 'Open-Container ease-out 0.7s';
    ContainerText.innerHTML = `<h1>Sent Successfully</h1><br><br>
    <h2>Name<h2>
    <span>${NameSingUp}</span><br><br>
    <h2>Email<h2>
    <span>${EmailSingUp}</span><br><br>
    <h2>Password</h2>
    <span>${PasswordSingUp}</span><br><br>
    `;
    ButtonFix.style.display = 'none';
    ButtonClose.style.display = 'flex';

    const SingIn = document.getElementById('SingIn');
    const SingUp = document.getElementById('SingUp');
    const ButtonUp = document.getElementById('Up-Down');
    const icon = document.getElementById('icon-chevron');

    SingIn.style.filter = 'blur(0px)';
    SingUp.style.animation = 'down-SingUp ease-out 0.9s';
    ButtonUp.style.animation = 'down-button ease-out 0.9s';
    icon.classList.remove('fa-minus');
    icon.classList.add('fa-chevron');
    icon.style.fontSize = '15px';
    ButtonUp.style.fontSize = '15px';
    ButtonUp.style.bottom = '0px';
    ButtonUp.style.width = '90%';
    ButtonUp.style.height = '55px';
    ButtonUp.style.padding = '0px';
    ButtonUp.style.background = '#FF785B';
    ButtonUp.style.color = '#FFFFFF';
    setTimeout(() => {
      SingUp.style.display = 'none';
    }, 900);
  } else {
    ContainerHTML.style.display = 'flex';
    ContainerHTML.style.animation = 'Open-Container ease-out 0.7s';
    ContainerText.innerHTML = `<h1>As senhas não coincidem. Por favor, tente novamente</h1><br><br>`;
    ButtonClose.style.display = 'none';
  }
}

//Return Form SingUp
document.getElementById('Form-SingUp').addEventListener('submit', event => {
  event.preventDefault();
});
