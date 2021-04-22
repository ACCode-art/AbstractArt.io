// Selectors ----------------------------------------

const loginPage = document.querySelector('.loginPage');
const loginForm = document.querySelector('.loginForm');
const usernameInput = document.querySelector('.username');
const passwordInput = document.querySelector('.password');
const logOut = document.querySelector('.logOut');

const main = document.querySelector('.main');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');

const faMenu = document.querySelector('.fa-caret-down');
const currentlyLoggedIn = document.querySelector('.currentlyLoggedIn');
const avatar = document.querySelector('.avatar');

const main__containerLeft = document.querySelector('.main__containerLeft');
const currentWorth = document.querySelector('.currentWorth');
const balance = document.querySelector('.balance');

const main__containerRight = document.querySelector('.main__containerRight');

const searchInput = document.querySelector('.searchInput');

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
    name: 'catwomen',
    price: 34,
    img:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcomicartcommunity.com%2Fgallery%2Fdata%2Fmedia%2F613%2FBATWOMAN_7.jpg&f=1&nofb=1',
  },
  {
    name: 'Alfred',
    price: 14,
    img:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-N4mOvQx3JMs%2FVXRRO-YRplI%2FAAAAAAAAd0A%2FOz8v2fCxZXc%2Fs1600%2FAlfred%252BPenyworth%252BDC%252BComics.jpg&f=1&nofb=1',
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

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  currentUser = users.find((acc) => acc.username === usernameInput.value);
  let worth = 0;
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
  main__containerRight.innerHTML = `<p>Welcome to Gotham NFT</p>`;
});

faMenu.addEventListener('click', () => {
  menu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  menu.style.display = 'none';
});

const closerLook = document.querySelector('.closerLook');

main__containerLeft.addEventListener('click', (e) => {
  const container = e.target.closest('.crypto__container');
  const img = container.querySelector('img').src;
  const HTML = `  <img
src=${img}
alt=""
/>`;

  searchResults.style.display = 'none';

  closerLook.style.display = 'flex';

  closerLook.innerHTML = HTML;
});

searchInput.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();

  const filtered = nfts.filter((nft) => {
    return nft.name.toLowerCase().includes(searchString);
  });

  displayNft(filtered);

  console.log(filtered);
});

const searchResults = document.querySelector('.searchResults');

const displayNft = (filtered) => {
  searchResults.style.display = 'flex';
  const htmlString = filtered
    .map((nft) => {
      return `<div class="nft">
      <img
        src=${nft.img}
        alt=""
      />
    </div>`;
    })
    .join('');

  closerLook.style.display = 'none';

  searchResults.innerHTML = htmlString;
};
