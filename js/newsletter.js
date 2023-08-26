
  // Cache DOM elements
  const fullNameInput = document.querySelector('input[placeholder="Enter full name"]');
  const emailInput = document.querySelector('input[placeholder="Enter email address"]');
  const successMessage = document.createElement('p');
  const existingSubscriber = localStorage.getItem('subscriber');
  const existingSubscriberInfo = JSON.parse(existingSubscriber);

  // Function to handle form submission and localStorage storage
  function handleSubscribe(event) {
    event.preventDefault(); // Prevent form submission

    if (existingSubscriberInfo && existingSubscriberInfo.email === emailInput.value) {
      // Email is already subscribed
      successMessage.textContent = 'This email is already subscribed.';
      successMessage.style.color = 'red';

      // Clear input fields
      fullNameInput.value = '';
      emailInput.value = '';

      // Append the message after the form
      const newsletterSection = document.querySelector('.newsletter');
      newsletterSection.appendChild(successMessage);

      return;
    }

    if (!fullNameInput.value || !emailInput.value) {
      // Display error message if inputs are empty
      successMessage.textContent = 'Please fill out both fields';
      successMessage.style.color = 'red';

      // Clear input fields
      fullNameInput.value = '';
      emailInput.value = '';

      // Append the message after the form
      const newsletterSection = document.querySelector('.newsletter');
      newsletterSection.appendChild(successMessage);

      return;
    }

    // Store subscriber information in localStorage
    const subscriberInfo = {
      fullName: fullNameInput.value,
      email: emailInput.value,
    };

    localStorage.setItem('subscriber', JSON.stringify(subscriberInfo));

    // Display success message
    successMessage.textContent = 'Thank you for subscribing';
    successMessage.style.color = 'green';

    // Clear input fields
    fullNameInput.value = '';
    emailInput.value = '';

    // Append the message after the form
    const newsletterSection = document.querySelector('.newsletter');
    newsletterSection.appendChild(successMessage);
  }

  // Add event listener to the form submit button
  const subscribeButton = document.querySelector('.newsletter-subscribe');
  subscribeButton.addEventListener('click', handleSubscribe);

