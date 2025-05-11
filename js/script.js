const closeMenu = document.querySelector(".close");
const openMenu = document.querySelector(".open");
const invite = document.querySelector("#invite");
const envelopeClose = document.querySelector("#envelope-close");
const story = document.getElementById("story");
const storyBtn = document.querySelector(".story");
const rsvpClose = document.getElementById("rsvp-close");
const rsvp = document.querySelector(".Rsvp");
const rsvpOpen = document.querySelector(".rsvp");
const giftOpen = document.querySelector(".gift");
const giftMessage = document.querySelector(".gift-content");
const giftClose = document.querySelector("#close-gift");

envelopeClose.addEventListener("click", () => {
    story.style.display = "none";
});

storyBtn.addEventListener("click", () => {
    story.style.display = "block";
})

invite.style.transition = "0.5s ease";

openMenu.addEventListener("click", function() {
    invite.style.display = "block";
    invite.style.right = "0";
})

closeMenu.addEventListener("click", function() {
    invite.style.right = "-100%";
})

rsvpClose.addEventListener("click", () => {
    rsvp.style.display = "none";
})

rsvpOpen.addEventListener("click", () => {
    rsvp.style.display = "block";
})

giftOpen.addEventListener("click", () => {
    giftMessage.style.display = "flex";
    giftMessage.style.bottom = 0;
})

giftClose.addEventListener("click", () => {
    giftMessage.style.bottom = "-100%";
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbwvXqJ_-fdONRI-HQ9ZzjU-QyD7aXAnmkNjbrTZK7gqFzzSm4icvdGXxDfRiBCVsgacqg/exec';
const form = document.forms['contact-form'];
const submitButton = document.getElementById('submit');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  // Show loading state
  submitButton.value = "Submitting...";
  submitButton.disabled = true;
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {
        alert("Thank you! Form is submitted");
        window.location.reload(); // Reload the page after successful submission
      } else {
        console.error('Error:', response.statusText);
        alert("There was an issue submitting your form. Please try again.");
      }
    })
    .catch(error => {
      console.error('Error!', error);
      alert("An unexpected error occurred. Please try again.");
    })
    .finally(() => {
      // Reset button state in case of an error
      submitButton.value = "Submit";
      submitButton.disabled = false;
    });
});



/*
const scriptURL = 'https://script.google.com/macros/s/AKfycbwvXqJ_-fdONRI-HQ9ZzjU-QyD7aXAnmkNjbrTZK7gqFzzSm4icvdGXxDfRiBCVsgacqg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
*/