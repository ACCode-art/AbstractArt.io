// Selectors ----------------------------------------

const loginPage = document.querySelector('.loginPage');
const loginForm = document.querySelector('.loginForm');
const usernameInput = document.querySelector('.username');
const passwordInput = document.querySelector('.password');
const logOut = document.querySelector('.logOut');

const main = document.querySelector('.main');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');
const collectionMenu = document.querySelector('.collectionMenu');
const depositMenu = document.querySelector('.depositMenu');

const openMenu = document.querySelector('.fa-caret-down');
const currentlyLoggedIn = document.querySelector('.currentlyLoggedIn');
const avatar = document.querySelector('.avatar');

const main__containerLeft = document.querySelector('.main__containerLeft');
const currentWorth = document.querySelector('.currentWorth');
const close__containerLeft = document.querySelector('.close__containerLeft');

const main__containerRight = document.querySelector('.main__containerRight');
const balanceMenu = document.querySelector('.balanceMenu');
const howToUse = document.querySelector('.howToUse');

const searchInput = document.querySelector('.searchInput');
const searchResults = document.querySelector('.searchResults');
const closerLook = document.querySelector('.closerLook');

const depositFunds__overlay = document.querySelector('.depositFunds__overlay');
const depositFunds__input = document.querySelector('.depositFunds__input');
const depositFunds__button = document.querySelector('.depositFunds__button');
const depositFunds__exit = document.querySelector('.depositFunds__exit');

// 'Databases' ----------------------------------------

const nfts = [
  {
    name: 'black',
    price: 58,
    img: 'https://images.pexels.com/photos/3685210/pexels-photo-3685210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    name: 'white',
    price: 28,
    img: 'https://images.pexels.com/photos/3137073/pexels-photo-3137073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=12601',
  },
  {
    name: 'blue',
    price: 34,
    img: 'https://images.pexels.com/photos/1934846/pexels-photo-1934846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    name: 'red',
    price: 50,
    img: 'https://images.pexels.com/photos/4622942/pexels-photo-4622942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    name: 'Green',
    price: 14,
    img: 'https://images.pexels.com/photos/3229147/pexels-photo-3229147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    name: 'yellow',
    price: 99,
    img: 'https://images.pexels.com/photos/2333293/pexels-photo-2333293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    name: 'purple',
    price: 30,
    img: 'https://images.pexels.com/photos/3029545/pexels-photo-3029545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
];

// Users ----------------------------------------

const users = [
  {
    username: 'john',
    password: '1',
    funds: 70,
    avatar:
      'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    nft: [],
  },
  {
    username: 'eveleyn',
    password: '1',
    funds: 30,
    avatar:
      'https://images.pexels.com/photos/3042160/pexels-photo-3042160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    nft: [],
  },
];

// login Logic ----------------------------------------

let currentUser;
let worth = 0;

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  currentUser = users.find(
    (acc) => acc.username === usernameInput.value.toLowerCase()
  );

  if (currentUser?.password === passwordInput.value) {
    loginPage.style.display = 'none';
    main.style.display = 'block';
    currentlyLoggedIn.textContent = currentUser.username.toUpperCase();
    avatar.src = currentUser.avatar;

    currentUser.nft.map((element) => {
      const { name, boughtPrice, img } = element;

      const HTML = ` <div class="crypto__container">
      <p>${name}</p>
      
      <p>$${boughtPrice}</p>

      <img src=${img}/>
 
    </div>`;

      worth = worth + boughtPrice;

      main__containerLeft.insertAdjacentHTML('beforeend', HTML);
    });
    currentWorth.textContent = `Portfolio Worth: $${worth}`;
    balanceMenu.textContent = `Balance: $${currentUser.funds}`;
  } else alert('wrong password');

  usernameInput.value = '';
  passwordInput.value = '';
});

// Event Listeners ----------------------------------------

logOut.addEventListener('click', () => {
  window.location = window.location.href;
});

openMenu.addEventListener('click', () => {
  menu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  menu.style.display = 'none';
});

collectionMenu.addEventListener('click', () => {
  main__containerLeft.classList.toggle('toggle-display');
  menu.style.display = 'none';
});

close__containerLeft.addEventListener('click', () => {
  main__containerLeft.classList.toggle('toggle-display');
  menu.style.display = 'none';
});

main__containerLeft.addEventListener('click', (e) => {
  howToUse.style.display = 'none';
  const container = e.target.closest('.crypto__container');
  const img = container.querySelector('img').src;
  const HTML = `  <img src=${img}
alt=""
/>`;
  searchResults.style.display = 'none';

  closerLook.style.display = 'flex';

  closerLook.innerHTML = HTML;
});

searchInput.addEventListener('keyup', (e) => {
  howToUse.style.display = 'none';
  const searchString = e.target.value.toLowerCase();

  const filtered = nfts.filter((nft) => {
    return nft.name.toLowerCase().includes(searchString);
  });

  closerLook.style.display = 'none';

  displayNft(filtered);

  console.log(filtered);
});

const displayNft = (filtered) => {
  closerLook.style.display = 'none';
  searchResults.style.display = 'flex';
  const htmlString = filtered
    .map((nft) => {
      return `<div class="nft">
      <img
        src=${nft.img}
        alt=""
      />
      <p class='nftName'>${nft.name}</p>
      <p class='nftPrice'>${nft.price}</p>
    </div>`;
    })
    .join('');

  searchResults.innerHTML = htmlString;
};

main__containerRight.addEventListener('click', (e) => {
  const container = e.target.closest('.nft');
  const name = container.querySelector('.nftName').textContent;
  const price = container.querySelector('.nftPrice').textContent;
  const img = container.querySelector('img').src;
  const numberPrice = Number(price);
  console.log(currentUser.funds);

  if (currentUser.funds > numberPrice) {
    const HTML = ` <div class="crypto__container">
    <p>${name}</p>
    
    <p>$${price}</p>

    <img src=${img}/>

  </div>`;

    main__containerLeft.insertAdjacentHTML('beforeend', HTML);

    balanceMenu.textContent = `Balance: $${(currentUser.funds =
      currentUser.funds - numberPrice)}`;

    currentWorth.textContent = `Portfolio Worth: $${(worth =
      worth + numberPrice)}`;
    alert(`You have bought ${name} art. Congratulations!!! :)`);
  } else
    alert('NO MORE FUNDS :(. Use the deposit funds feature in the side menu!');
});

// deposit funds logic

depositMenu.addEventListener('click', () => {
  depositFunds__overlay.style.display = 'flex';
});

depositFunds__exit.addEventListener('click', () => {
  depositFunds__overlay.style.display = 'none';
});

depositFunds__button.addEventListener('click', () => {
  if (depositFunds__input.value.match(/[0-9]/g)) {
    const depositValue = Number(depositFunds__input.value);

    currentUser.funds = currentUser.funds + depositValue;

    balanceMenu.textContent = `Balance: $${currentUser.funds}`;

    depositFunds__overlay.style.display = 'none';

    depositFunds__input.value = '';
  } else alert('Enter valid numbers');
  depositFunds__input.value = '';
});
