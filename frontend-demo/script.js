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

