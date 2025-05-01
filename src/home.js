export function loadHomepage() {
    const contentDiv = document.querySelector('#content');
    const homepage = document.createElement('div');
    homepage.classList.add('homepage');

    const headerImg = document.createElement('img');
    headerImg.src = 'https://i.pinimg.com/736x/6c/09/91/6c09911800f74a88703f42761009e8f4.jpg';
    headerImg.alt = 'Anime Restaurant';
    
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Welcome to Food Wars Cuisine!'

    const description = document.createElement('p');
    description.textContent = 'Inspired by the culinary battles of Food Wars, our restaurant brings the excitement of gourmet cooking to life. Experience dishes that ignite your taste buds and awaken your inner chef!';
    
    homepage.appendChild(headerImg);
    homepage.appendChild(headerTitle);
    homepage.appendChild(description);
    contentDiv.appendChild(homepage);
};