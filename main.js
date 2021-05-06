// Selectors ----------------------------------------

const loginPage = document.querySelector('.loginPage');
const loginForm = document.querySelector('.loginForm');
const usernameInput = document.querySelector('.username');
const passwordInput = document.querySelector('.password');
const logOut = document.querySelector('.logOut');

const main = document.querySelector('.main');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');

const openMenu = document.querySelector('.fa-caret-down');
const currentlyLoggedIn = document.querySelector('.currentlyLoggedIn');
const avatar = document.querySelector('.avatar');

const main__containerLeft = document.querySelector('.main__containerLeft');
const currentWorth = document.querySelector('.currentWorth');

const main__containerRight = document.querySelector('.main__containerRight');
const balance = document.querySelector('.balance');
const howToUse = document.querySelector('.howToUse');

const searchInput = document.querySelector('.searchInput');
const searchResults = document.querySelector('.searchResults');
const closerLook = document.querySelector('.closerLook');

const depositFunds = document.querySelector('.depositFunds');
const depositFunds__overlay = document.querySelector('.depositFunds__overlay');
const depositFunds__input = document.querySelector('.depositFunds__input');
const depositFunds__button = document.querySelector('.depositFunds__button');
const depositFunds__exit = document.querySelector('.depositFunds__exit');

// 'Databases' ----------------------------------------

const nfts = [
  {
    name: 'Pengiun',
    price: 58,
    img:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg02.deviantart.net%2F7877%2Fi%2F2012%2F239%2F8%2Fa%2Fpenguin_by_mikemahle-d5clheg.jpg&f=1&nofb=1',
  },
  {
    name: 'Mr.Freeze',
    price: 28,
    img:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fee%2F6e%2F61%2Fee6e61f2deaa1c2ec468322e0fd3a737.jpg&f=1&nofb=1',
  },
  {
    name: 'Catwomen',
    price: 34,
    img:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette3.wikia.nocookie.net%2Fmarvel_dc%2Fimages%2Fe%2Fe8%2FCatwoman_Vol_4_47_Textless.jpg%2Frevision%2Flatest%3Fcb%3D20160916171703&f=1&nofb=1',
  },
  {
    name: 'Bane',
    price: 50,
    img:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.comicvine.com%2Fuploads%2Foriginal%2F13%2F132517%2F5614213-bane_bm18.jpg&f=1&nofb=1',
  },
  {
    name: 'Alfred',
    price: 14,
    img:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-N4mOvQx3JMs%2FVXRRO-YRplI%2FAAAAAAAAd0A%2FOz8v2fCxZXc%2Fs1600%2FAlfred%252BPenyworth%252BDC%252BComics.jpg&f=1&nofb=1',
  },
  {
    name: 'James Gordon',
    price: 99,
    img:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F5d%2Fb5%2Fae%2F5db5ae6a749f629b17dca7319d4cbc3f.jpg&f=1&nofb=1',
  },
  {
    name: "Ra's al Ghul",
    price: 30,
    img:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg3.wikia.nocookie.net%2F__cb20121215100914%2Fmarvel_dc%2Fimages%2F1%2F1e%2FRa%27s_al_Ghul_0009.jpg&f=1&nofb=1',
  },
];

// Users ----------------------------------------

const users = [
  {
    username: 'batman',
    password: '1',
    funds: 1100,
    avatar:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpm1.narvii.com%2F6332%2F458f3b20fd8f20bc4ce4858a87efd69d0dc8d308_00.jpg&f=1&nofb=1',
    nft: [
      {
        name: 'The Lazarus Pits',
        boughtPrice: 120,
        img:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FC6lfV.jpg&f=1&nofb=1',
      },
      {
        name: 'Gotham Academy',
        boughtPrice: 500,
        img:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fboundingintocomics.com%2Fwp-content%2Fuploads%2F2016%2F09%2FGOTHACSECSEM_1-1.jpg&f=1&nofb=1',
      },
    ],
  },
  {
    username: 'joker',
    password: '1',
    funds: 300,
    avatar:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffc08.deviantart.net%2Ffs71%2Fi%2F2010%2F077%2F8%2F4%2FThe_Joker_by_j0kersWILD.jpg&f=1&nofb=1',
    nft: [
      {
        name: "Haly's Circus",
        boughtPrice: 30,
        img:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmarvel_dc%2Fimages%2Fa%2Faa%2FHaly%27s_Circus_002.jpg%2Frevision%2Flatest%3Fcb%3D20110816045416&f=1&nofb=1',
      },
      {
        name: 'Arkham Asylum',
        boughtPrice: 700,
        img:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd2%2Fe0%2Fd6%2Fd2e0d65a99499cba4905b9bf90c32029.jpg&f=1&nofb=1',
      },
      {
        name: 'Batcave',
        boughtPrice: 100,
        img:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fth08.deviantart.net%2Ffs71%2FPRE%2Fi%2F2012%2F280%2Fc%2F9%2Fthe_batcave_by_barneybluepants-d5gusw0.jpg&f=1&nofb=1',
      },
    ],
  },
];

// login Logic ----------------------------------------

let currentUser;
let worth = 0;

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  currentUser = users.find((acc) => acc.username === usernameInput.value);

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
    balance.textContent = `Balance: $${currentUser.funds}`;
  } else alert('wrong password');

  usernameInput.value = '';
  passwordInput.value = '';
});

// Event Listeners ----------------------------------------

logOut.addEventListener('click', () => {
  loginPage.style.display = 'flex';
  main.style.display = 'none';
  menu.style.display = 'none';
  main__containerLeft.textContent = '';
  searchInput.value = '';
});

openMenu.addEventListener('click', () => {
  menu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
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

  if (currentUser.funds > numberPrice) {
    const HTML = ` <div class="crypto__container">
    <p>${name}</p>
    
    <p>$${price}</p>

    <img src=${img}/>

  </div>`;

    main__containerLeft.insertAdjacentHTML('beforeend', HTML);

    balance.textContent = `Balance: $${(currentUser.funds =
      currentUser.funds - numberPrice)}`;

    currentWorth.textContent = `Portfolio Worth: $${(worth =
      worth + numberPrice)}`;
  } else alert('NO MORE FUNDS :(');
});

// deposit funds logic

depositFunds.addEventListener('click', () => {
  depositFunds__overlay.style.display = 'flex';
});

depositFunds__exit.addEventListener('click', () => {
  depositFunds__overlay.style.display = 'none';
});

depositFunds__button.addEventListener('click', () => {
  if (depositFunds__input.value.match(/[0-9]/g)) {
    const depositValue = Number(depositFunds__input.value);

    currentUser.funds = currentUser.funds + depositValue;

    balance.textContent = `Balance: $${currentUser.funds}`;

    depositFunds__overlay.style.display = 'none';

    depositFunds__input.value = '';
  } else alert('Enter valid numbers');
  depositFunds__input.value = '';
});
