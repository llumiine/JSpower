// Sélectionnez l'élément <div> dans le HTML
const userList = document.getElementById('user-list');

// Sélectionnez le bouton dans le HTML
const randomUserButton = document.getElementById('random-user-button');

// Déclarez une variable pour stocker les utilisateurs
let users = [];

// Faites une requête HTTP pour obtenir les données JSON de l'URL
fetch('https://randomuser.me/api/?results=100')
  .then(response => response.json())
  .then(data => {
    users = data.results;

    // Parcourez la liste des utilisateurs et affichez les détails souhaités
    users.forEach(user => {
      const fullName = `${user.name.first} ${user.name.last}`;
      const email = user.email;
      const phone = user.phone;
      const photoURL = user.picture.large;

      // Créez un élément <div> pour chaque utilisateur
      const userDiv = document.createElement('div');

      // Remplissez le contenu de l'élément <div> avec les informations de l'utilisateur
      userDiv.innerHTML = `
        <strong>Nom:</strong> ${fullName}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Numéro de téléphone:</strong> ${phone}<br>
        <img src="${photoURL}" alt="${fullName}"><br>
      `;
      userList.appendChild(userDiv);

    });
  })
  .catch(error => console.error('Une erreur s\'est produite :', error));

// Ajoutez un gestionnaire d'événements pour le bouton
randomUserButton.addEventListener('click', () => {
  // Sélectionnez un utilisateur au hasard
  const randomIndex = Math.floor(Math.random() * users.length);
  const randomUser = users[randomIndex];

  alert(`Nom: ${randomUser.name.first} ${randomUser.name.last}\nEmail: ${randomUser.email}\nPhoto: ${randomUser.picture.large}`);
});
