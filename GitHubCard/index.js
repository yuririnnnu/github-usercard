import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/yuririnnnu');

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/    
const card = document.querySelector(".cards");
createCard("yuririnnnu")
function createCard(username) {
  axios.get(`https://api.github.com/users/${username}`)
  .then(resp => {
    const profiles = profile(resp)
    card.appendChild(profiles)
  }).catch(err => {
    console.error(err);
    const errorMsg = document.createElement('p');
    errorMsg.textContent = "This is error message";
    card.appendChild(errorMsg);
  }).finally(() => console.log("This is finally message"))
}
/*
STEP 5: Now that you have your own card getting added to the DOM, either
follow this link in your browser https://api.github.com/users/<Your github name>/followers,
manually find some other users' github handles, or use the list found at the
bottom of the page. Get at least 5 different Github usernames and add them as
Individual strings to the friendsArray below.

Using that array, iterate over it, requesting data for each user, creating a new card for each
user, and adding that card to the DOM.
*/
// createCard("tetondan")
// createCard("dustinmyers")
// createCard("justsml")
// createCard("luishrd")
// createCard("bigknell")

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

for (let i = 0; i < followersArray.length; i++) {
  createCard(followersArray[i]);
}
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function profile(obj) {
  const card = document.createElement("div");
  card.classList.add("card");
  
  const img = document.createElement("img");
  img.src = obj.data["avatar_url"];
  card.appendChild(img);

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  card.appendChild(cardInfo);

  const name = document.createElement("h3");
  name.classList.add("name");
  cardInfo.appendChild(name);
  name.textContent = obj.data["name"];

  const userName = document.createElement("p");
  userName.classList.add("username");
  cardInfo.appendChild(userName);
  userName.textContent = obj.data["login"]

  const location = document.createElement("p");
  cardInfo.appendChild(location);
  location.textContent = `Location: ${obj.data["location"]}`

  const profile = document.createElement("p");
  cardInfo.appendChild(profile);
  profile.textContent = "Profile: ";

  const pageURL = document.createElement("a");
  pageURL.href = obj.data["url"];
  profile.appendChild(pageURL);
  pageURL.textContent = obj.data["url"];

  const followers = document.createElement("p");
  cardInfo.appendChild(followers);
  followers.textContent = `Followers: ${obj.data["followers"]}`

  const followings = document.createElement("p");
  cardInfo.appendChild(followings);
  followings.textContent = `Followings: ${obj.data["followings"]}`
  
  const bio = document.createElement("p");
  cardInfo.appendChild(bio);
  bio.textContent = `Followers: ${obj.data["bio"]}`
  
  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
