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

const main__containerRight = document.querySelector('.main__containerRight');

const users = [
  {
    username: 'batman',
    password: '1',
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
  } else alert('wrong password');

  usernameInput.value = '';
  passwordInput.value = '';
});

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

main__containerLeft.addEventListener('click', (e) => {
  const container = e.target.closest('.crypto__container');
  const img = container.querySelector('img').src;
  const HTML = `  <img
src=${img}
alt=""
/>`;
  main__containerRight.innerHTML = HTML;
});
