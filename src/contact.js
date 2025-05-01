export function loadContactPage() {
    const contentDiv = document.querySelector('#content');
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact-page');

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Contact Us';

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📞 Phone: +1 (555) 123-4567';

    const email = document.createElement('p');
    email.textContent = '📧 Email: contact@foodwarscuisine.com';

    const address = document.createElement('p');
    address.textContent = '📍 Address: 123 Culinary Street, Flavor Town, USA';

    const hours = document.createElement('p');
    hours.textContent = '⏰ Hours: Mon-Sun, 10:00 AM - 10:00 PM';

    contactPage.appendChild(headerTitle);
    contactPage.appendChild(phoneNumber);
    contactPage.appendChild(email);
    contactPage.appendChild(address);
    contactPage.appendChild(hours);
    contentDiv.appendChild(contactPage);
};