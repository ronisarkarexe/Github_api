var card = document.getElementById("card")
var inpField = document.querySelector('input')
var inpBtn = document.getElementById('btn')
function sub() {
  var names = document.querySelector('input').value;
  card.style.display = "block";
  inpField.style.display = "none";
  inpBtn.style.display = "none";

  fetch(`https://api.github.com/users/${names}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json'
    }
  })
    .then(response => response.json()) //Converting the response to a JSON object
    .then(data => {
      setTimeout(() => {

        const root = document.querySelector('#root');
        root.innerHTML = `<a class='name' href='${data.html_url}'>Name: '${data.name}'</a>
                     <p>Followers : '${data.followers}'</p>
                     <p>Following : '${data.following}'</p>
                     <p>Location : '${data.location}'</p>
                     <p>Twitter username : '${data.twitter_username}'</p>
                     <p>Created at : '${data.created_at}'</p>
                     <p>Your Bio : '${data.bio}'</p>
                     <button onclick="removeCard()">Go back</button>`

      })
    })
    .catch((error) => {
      console.error(error);

    });
}

function removeCard() {
  card.style.display = 'none'
  inpField.style.display = "block";
  inpBtn.style.display = "block";
  
}