const form = document.querySelector('form');
const entriesList = document.getElementById('entries');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	const name = document.getElementById('name').value;
	const phone = document.getElementById('phone').value;
	const location = document.getElementById('location').value;
	const land = document.getElementById('land').value;
	const photo = document.getElementById('photo').files[0];

	const reader = new FileReader();

	reader.onload = function(event) {
		const listItem = document.createElement('li');
		const image = document.createElement('img');
		const nameLabel = document.createElement('p');
		const phoneLabel = document.createElement('p');
		const locationLabel = document.createElement('p');
		const landLabel = document.createElement('p');

		image.src = event.target.result;
		image.alt = name;
		image.width = 100;
		image.height = 100;

		nameLabel.textContent = `Name: ${name}`;
		phoneLabel.textContent = `Phone number: ${phone}`;
		locationLabel.textContent = `Agriculture location: ${location}`;
		landLabel.textContent = `Land size: ${land}`;

		listItem.appendChild(image);
		listItem.appendChild(nameLabel);
		listItem.appendChild(phoneLabel);
		listItem.appendChild(locationLabel);
		listItem.appendChild(landLabel);

		entriesList.appendChild(listItem);
	}

	reader.readAsDataURL(photo);

	form.reset();
});
