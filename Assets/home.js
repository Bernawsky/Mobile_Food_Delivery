// if (!localStorage.getItem('welcomeMessageDisplayed')) {
//   document.getElementById('welcomeMessage').style.display = 'block';
//   localStorage.setItem('welcomeMessageDisplayed', 'true');
// }

function OpenCart() {
  const ContainerCart = document.getElementById('ContainerCart');
  ContainerCart.style.display = 'flex';
  ContainerCart.style.animation = 'NewPage 0.7s ease-out';
}

function CloseCart() {
  const ContainerCart = document.getElementById('ContainerCart');
  ContainerCart.style.animation = 'OldPage 0.7s ease-out';
  setTimeout(() => {
    ContainerCart.style.display = 'none';
  }, 700);
}

function OpenNavBar() {
  const ContainerBlur = document.getElementById('ContainerBlur');
  const NavBar = document.getElementById('NavBar');
  const BodyHome = document.getElementById('BodyHome');

  ContainerBlur.style.display = 'flex';
  ContainerBlur.style.animation = 'Open-NavBar 0.5s ease-out';
  NavBar.style.display = 'flex';
  BodyHome.style.overflowY = 'hidden';
}

function CloseNavBar() {
  const ContainerBlur = document.getElementById('ContainerBlur');
  ContainerBlur.style.animation = 'Close-NavBar ease-out 0.5s';
  setTimeout(() => {
    ContainerBlur.style.display = 'none';
    BodyHome.style.overflowY = 'visible';
  }, 500);
}
const NavLinks = document.querySelectorAll('ContainerLinks a');
NavLinks.forEach(link => {
  link.addEventListener('click', CloseNavBar);
});

window.onload = function PrintNames() {
  const UserName = localStorage.getItem('username');
  const NamePoints = document.getElementById('NamePoints');
  const Name = document.getElementById('Name');

  Name.textContent = `${UserName}`;
  NamePoints.textContent = `${UserName}`;
};

function OpenProfile() {
  const ContainerProfile = document.getElementById('ContainerProfile');
  ContainerProfile.style.display = 'flex';
  ContainerProfile.style.animation = 'NewPage 0.7s ease-out';
  DataProfile();
}

function CloseProfile() {
  const ContainerProfile = document.getElementById('ContainerProfile');
  ContainerProfile.style.animation = 'OldPage 0.7s ease-out';
  setTimeout(() => {
    ContainerProfile.style.display = 'none';
  }, 700);
}

function DataProfile() {
  const Name = localStorage.getItem('username');
  const Email = localStorage.getItem('email');
  const Password = localStorage.getItem('password');

  const UserName = document.getElementById('UserName');
  const UserEmail = document.getElementById('UserEmail');
  const UserPassword = document.getElementById('UserPassword');

  UserName.placeholder = `Name: ${Name}`;
  UserEmail.placeholder = `Email: ${Email}`;
  UserPassword.placeholder = `Password: ${Password}`;
}

function EnableInput() {
  const InputName = document.getElementById('UserName');
  const InputEmail = document.getElementById('UserEmail');
  const InputPassword = document.getElementById('UserPassword');
  const ButtonSave = document.getElementById('Button-SaveProfile');

  InputName.disabled = false;
  InputEmail.disabled = false;
  InputPassword.disabled = false;
  ButtonSave.disabled = false;
}

function GetData(data) {
  localStorage.setItem('username', data.Name);
  localStorage.setItem('email', data.Email);
  localStorage.setItem('password', data.Password);
}

function SaveProfile() {
  const data = {
    Name: document.getElementById('UserName').value.trim(),
    Email: document.getElementById('UserEmail').value.trim(),
    Password: document.getElementById('UserPassword').value.trim(),
  };
  GetData(data);
}

function OpenWishList() {
  const ContainerWishList = document.getElementById('Container-WishList');
  ContainerWishList.style.display = 'flex';
  ContainerWishList.style.animation = 'NewPage 0.7s ease-out';
}

function CloseWishList() {
  const ContainerWishList = document.getElementById('Container-WishList');
  ContainerWishList.style.animation = 'OldPage 0.7s ease-out';
  setTimeout(() => {
    ContainerWishList.style.display = 'none';
  }, 700);
}

function OpenPoints() {
  const ContainerPoints = document.getElementById('ContainerPoints');
  ContainerPoints.style.display = 'flex';
  ContainerPoints.style.animation = 'NewPage 0.7s ease-out';
}

function ClosePoints() {
  const ContainerPoints = document.getElementById('ContainerPoints');
  ContainerPoints.style.animation = 'OldPage 0.7s ease-out';
  setTimeout(() => {
    ContainerPoints.style.display = 'none';
  }, 700);
}

function OpenDisplayFood(item) {
  item.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });

  const Description2 = document.getElementById('Description2');
  Description2.style.display = 'flex';
  Description2.style.animation = 'Descriptions 1s ease-out forwards';

  const ContainerImage = document.querySelector('.Food img');

  setTimeout(() => {
    ContainerImage.style.position = 'fixed';
    ContainerImage.style.top = '0px';
    ContainerImage.style.left = '0px';
    ContainerImage.style.maxHeight = '45vh';
    ContainerImage.style.height = 'max-content';
    ContainerImage.style.objectFit = 'cover';
    ContainerImage.style.borderRadius = '0px';
    ContainerImage.style.zIndex = '1';
  }, 500);
}

function CloseDisplayFood(item) {
  item.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });

  const ContainerImage = document.querySelector('.Food img');
  const Description2 = document.getElementById('Description2');

  setTimeout(() => {
    Description2.style.animation = 'Reverse-Descriptions 1s ease-out forwards';
  });
  setTimeout(() => {
    Description2.style.display = 'none';
    ContainerImage.style.animation = 'Reverse-Image 1s ease-out forwards';
    ContainerImage.style.position = 'static';
    ContainerImage.style.top = '300px';
  });
}
