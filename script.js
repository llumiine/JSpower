const userList = document.getElementById('user-list');


const randomUserButton = document.getElementById('random-user-button');

let users = [];

fetch('https://randomuser.me/api/?results=100')
    .then(response => response.json())
    .then(data => {
        users = data.results;

        users.forEach(user => {
            const fullName = `${user.name.first} ${user.name.last}`;
            const email = user.email;
            const phone = user.phone;
            const photoURL = user.picture.large;

            const userDiv = document.createElement('div');

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

randomUserButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    const randomUser = users[randomIndex];

    alert(`Nom: ${randomUser.name.first} ${randomUser.name.last}\nEmail: ${randomUser.email}\nPhoto: ${randomUser.picture.large}`);
});
