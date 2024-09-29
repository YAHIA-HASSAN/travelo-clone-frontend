document
  .getElementById('feedbackForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;

    const message = `Thank you ${firstName} ${lastName} for your feedback!`;
    document.getElementById('thankYouMessage').textContent = message;
  });
