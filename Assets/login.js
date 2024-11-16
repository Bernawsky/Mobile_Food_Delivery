//SignIn
document.getElementById('Form-SignIn').addEventListener('submit', function (event) {
  event.preventDefault();

  const NameSignIn = document.getElementById('Name-SignIn').value.trim();
  const EmailSignIn = document.getElementById('Email-SignIn').value.trim();
  const PasswordSignIn = document.getElementById('Password-SignIn').value.trim();
  const ContainerHTML = document.getElementById('ContainerHTML');
  const ContainerText = document.getElementById('ContainerText-HTML');

  if (EmailSignIn && PasswordSignIn) {
    ContainerHTML.style.animation = 'Open-Container ease-out 0.7s';
    ContainerHTML.style.display = 'flex';
    ContainerText.innerHTML = `<h1>Sent Successfully</h1><br><br>
    <h2>Name<h2>
   <span>${NameSignIn}</span><br><br>
   <h2>Email<h2>
   <span>${EmailSignIn}</span><br><br>
   <h2>Password</h2>
   <span>${PasswordSignIn}</span><br><br>
  `;
  }
});

document.getElementById('ButtonClose-HTML').addEventListener('click', event => {
  const ButtonClose = document.getElementById('ButtonClose-HTML');
  if (event.target === ButtonClose) {
    window.location.href = 'home.html';
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

//Hide Password SignIn
document.getElementById('Icon-Password-SignIn').addEventListener('click', function () {
  const IconEye = document.getElementById('Icon-Password-SignIn');
  const Password = document.getElementById('Password-SignIn');

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

function GetData(data) {
  localStorage.setItem('username', data.Name);
  localStorage.setItem('email', data.Email);
  localStorage.setItem('password', data.Password);
}

function collectSignInData() {
  const data = {
    Name: document.getElementById('Name-SignIn').value.trim(),
    Email: document.getElementById('Email-SignIn').value.trim(),
    Password: document.getElementById('Password-SignIn').value.trim(),
  };
  GetData(data);
}

function collectSignUpData() {
  const data = {
    Name: document.getElementById('Name-SignUp').value.trim(),
    Email: document.getElementById('Email-SignUp').value.trim(),
    Password: document.getElementById('Password-SignUp').value.trim(),
  };
  GetData(data);
}

//SignUp
document.getElementById('Button-SignUp').addEventListener('click', function (event) {
  event.preventDefault();

  const NameSignUp = document.getElementById('Name-SignUp');
  const EmailSignUp = document.getElementById('Email-SignUp');
  const PasswordSignUp = document.getElementById('Password-SignUp');
  const ConfirmSignUp = document.getElementById('Confirm-Password-SignUp');

  if (
    NameSignUp.value.trim() !== '' &&
    EmailSignUp.value.trim() !== '' &&
    PasswordSignUp.value.trim() !== '' &&
    ConfirmSignUp.value.trim() !== ''
  ) {
    ConfirmPassword();
  }
});

function ConfirmPassword() {
  const NameSignUp = document.getElementById('Name-SignUp').value.trim();
  const EmailSignUp = document.getElementById('Email-SignUp').value.trim();
  const PasswordSignUp = document.getElementById('Password-SignUp').value.trim();
  const ConfirmSignUp = document.getElementById('Confirm-Password-SignUp').value.trim();
  const ContainerHTML = document.getElementById('ContainerHTML');
  const ContainerText = document.getElementById('ContainerText-HTML');
  const ButtonFix = document.getElementById('Button-FixPassword');
  const ButtonClose = document.getElementById('ButtonClose-HTML');

  if (ConfirmSignUp === PasswordSignUp) {
    ContainerHTML.style.display = 'flex';
    ContainerHTML.style.animation = 'Open-Container ease-out 0.7s';
    ContainerText.innerHTML = `<h1>Sent Successfully</h1><br><br>
    <h2>Name<h2>
    <span>${NameSignUp}</span><br><br>
    <h2>Email<h2>
    <span>${EmailSignUp}</span><br><br>
    <h2>Password</h2>
    <span>${PasswordSignUp}</span><br><br>
    `;
    ButtonFix.style.display = 'none';
    ButtonClose.style.display = 'flex';

    const SignIn = document.getElementById('SignIn');
    const SignUp = document.getElementById('SignUp');
    const ButtonUp = document.getElementById('Up-Down');
    const icon = document.getElementById('icon-chevron');
    SignIn.style.filter = 'blur(0px)';
    SignUp.style.animation = 'down-SignUp ease-out 0.9s';
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
      SignUp.style.display = 'none';
    }, 900);
  } else {
    ContainerHTML.style.display = 'flex';
    ContainerHTML.style.animation = 'Open-Container ease-out 0.7s';
    ContainerText.innerHTML = `<h1>As senhas não coincidem. Por favor, tente novamente</h1><br><br>`;
    ButtonClose.style.display = 'none';
  }
}

//Return Form SignUp
document.getElementById('Form-SignUp').addEventListener('submit', event => {
  event.preventDefault();
});

document.getElementById('Up-Down').addEventListener('click', function () {
  const SignIn = document.getElementById('SignIn');
  const SignUp = document.getElementById('SignUp');
  const ButtonUp = document.getElementById('Up-Down');
  const icon = document.getElementById('icon-chevron');

  if (SignUp.style.display === 'none' || SignUp.style.display === '') {
    SignIn.style.filter = 'blur(7px)';
    SignUp.style.display = 'flex';
    SignUp.style.animation = 'up-SignUp ease-out 0.9s';
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
  } else if (SignUp.style.display === 'flex') {
    SignIn.style.filter = 'blur(0px)';
    SignUp.style.animation = 'down-SignUp ease-out 0.9s';
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
      SignUp.style.display = 'none';
    }, 900);
  }
});

//Hide Password SignUp
document.getElementById('Icon-Password-SignUp').addEventListener('click', function () {
  const IconEye = document.getElementById('Icon-Password-SignUp');
  const Password = document.getElementById('Password-SignUp');

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

document.getElementById('Icon-Confirm-Password-SignUp').addEventListener('click', function () {
  const IconEye = document.getElementById('Icon-Confirm-Password-SignUp');
  const Password = document.getElementById('Confirm-Password-SignUp');

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

//Return Form SignIn
document.getElementById('Form-Forgot').addEventListener('submit', function (event) {
  event.preventDefault();
});

//

//New Password of SignIn
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
