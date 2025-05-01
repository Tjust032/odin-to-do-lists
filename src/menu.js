import gotchaPorkRoastImg from './images/gotcha-pork-roast.webp';
import transformingFurikake from './images/transforming-furikake-gohan.webp';
import chaliapinSteakDon from './images/chaliapin-steak-don.webp';
import souffleOmelette from './images/souffle-omelette-sprinkling-parsley-on-the-omelette.jpg';
import mapoTofu from './images/mapo-tofu.jpg';

export function loadMenuPage() {
    const contentDiv = document.querySelector('#content');
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu-page');

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Food Wars Menu';

    const menuDescription = document.createElement('p');
    menuDescription.textContent = 'Explore our exclusive menu inspired by the legendary dishes of Food Wars. Each dish is crafted to perfection, delivering an unforgettable culinary experience.';

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');

    const dishes = [
        { 
            name: 'Gotcha Pork Roast', 
            description: 'A savory and tender dish made with potatoes and bacon, topped with a rich sauce.', 
            image: gotchaPorkRoastImg
        },
        { 
            name: 'Transforming Furikake Gohan', 
            description: 'A simple yet elegant rice dish that transforms with every bite.', 
            image: transformingFurikake
        },
        { 
            name: 'Chaliapin Steak Don', 
            description: 'Juicy steak served over rice, topped with caramelized onions for a burst of flavor.', 
            image: chaliapinSteakDon
        },
        { 
            name: 'Soufflé Omelette', 
            description: 'A fluffy and light omelette that melts in your mouth.', 
            image: souffleOmelette
        },
        { 
            name: 'Mapo Tofu', 
            description: 'A spicy and flavorful tofu dish that packs a punch.', 
            image: mapoTofu
        }
    ];

    dishes.forEach(dish => {
        const menuItem = document.createElement('li');
        menuItem.classList.add('menu-item');

        const dishImage = document.createElement('img');
        dishImage.src = dish.image;
        dishImage.alt = dish.name;
        dishImage.classList.add('menu-item-image');

        const dishName = document.createElement('h2');
        dishName.textContent = dish.name;

        const dishDescription = document.createElement('p');
        dishDescription.textContent = dish.description;

        menuItem.appendChild(dishImage);
        menuItem.appendChild(dishName);
        menuItem.appendChild(dishDescription);
        menuList.appendChild(menuItem);
    });

    menuPage.appendChild(headerTitle);
    menuPage.appendChild(menuDescription);
    menuPage.appendChild(menuList);
    contentDiv.appendChild(menuPage);
};