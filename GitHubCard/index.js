/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/lydiecherilus>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = [NolanPic, Matt-GitHub, JvyJay, kroaix, tetondan];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


function createCards(object) {
  // define new elements
  const card = document.createElement('div');
  const userImage = document.createElement('img');
  const info = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // set class names
  card.classList.add('card');
  info.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  // setup structure of elements
  card.appendChild(userImage);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(userName);
  info.appendChild(location);
  info.appendChild(profile);
  info.appendChild(profileLink);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  // set text content
  userImage.src = object.avatar_url
  location.textContent = `Location: ${object.location}`;
  name.textContent = object.name
  userName.textContent = object.login
  profile.textContent = `Profile: ${object.url}`;
  followers.textContent = `Followers: ${object.followers}`;
  following.textContent = `Following: ${object.following}`;
  bio.textContent = `Bio: ${object.bio}`;

  return card;
}

const cards = document.querySelector('.cards')
axios.get('https://api.github.com/users/lydiecherilus')
  .then(response => {
    console.log(response.data);
    const information = response.data;
    const newCard = createCards(information)
    cards.appendChild(newCard)
  })

const followersArray = [
  'Matt-GitHub',
  'NolanPic',
  'JvyJay',
  'kroaix',
  'tetondan',
];

axios.get('https://api.github.com/users/lydiecherilus/followers')
  .then(response => {
    console.log(response.data);
    response.data.forEach(data => {
      const followerscard = createCards(data)
      cards.appendChild(followerscard);
    })
  })