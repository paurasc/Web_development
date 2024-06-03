document.addEventListener('DOMContentLoaded', () => {
    const contactMethodSelect = document.getElementById('contactMethod');
    const emailContactDiv = document.getElementById('emailContact');
    const phoneContactDiv = document.getElementById('phoneContact');

    contactMethodSelect.addEventListener('change', (event) => {
        const selectedMethod = event.target.value;

        // Hide both input boxes initially
        emailContactDiv.classList.add('hidden');
        phoneContactDiv.classList.add('hidden');

        // Show the relevant input box based on selected method
        if (selectedMethod === 'email') {
            emailContactDiv.classList.remove('hidden');
        } else if (selectedMethod === 'phone') {
            phoneContactDiv.classList.remove('hidden');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var infoBox = document.createElement('div');
    infoBox.id = 'info-box';
    document.body.appendChild(infoBox);

    var infoHeading = document.createElement('h2');
    infoBox.appendChild(infoHeading);

    var infoText = document.createElement('p');
    infoBox.appendChild(infoText);

    var infoClose = document.createElement('a');
    infoClose.id = 'info-close';
    infoClose.innerText = 'Click This To Close';
    infoBox.appendChild(infoClose);

    var descriptions = [
        "Most of plants and animals are having their hibernation period, so winter is not full of bright colors, but who says that white, snowy and a bit magical winter is not cool?",
        "The most beautiful phenomenon of the winter is snow! You know that the snowflakes are never repeat themselves, they have amazing shapes, that different with each new snowflake.",
        "Snowy drive on the road.",
        "After an overnight snowstorm.",
        "Beautiful white icy lane.",
        "Winter in the country."
    ];

    function showInfoBox(event, index) {
        infoHeading.innerHTML = event.target.alt;
        infoText.innerHTML = descriptions[index];
        infoBox.style.display = 'block';
        var rect = event.target.getBoundingClientRect();
        infoBox.style.left = rect.left + 'px';
        infoBox.style.top = rect.top + 'px';
    }

    function hideInfoBox() {
        infoBox.style.display = 'none';
    }

    var photoElements = document.querySelectorAll('#album .photo img');
    photoElements.forEach((photo, index) => {
        photo.addEventListener('click', function(event) {
            showInfoBox(event, index);
        });
    });

    infoClose.addEventListener('click', function(e) {
        e.preventDefault();
        hideInfoBox();
    });
});
