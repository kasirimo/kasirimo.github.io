document.addEventListener('DOMContentLoaded', () => {
    const countdown = () => {
      const now = new Date().getTime();
      const eventDate = new Date('February 28, 2025 00:00:00').getTime();
      
      const timeLeft = eventDate - now;
  
      // Calculate time parts
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      // Update HTML content
      document.getElementById('days').innerText = days;
      document.getElementById('hours').innerText = hours;
      document.getElementById('minutes').innerText = minutes;
      document.getElementById('seconds').innerText = seconds;
  
      // If countdown is finished, show message
      if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = 'The event has passed!';
      }
    };
  
    // Update countdown every second
    const interval = setInterval(countdown, 1000);
  });
  