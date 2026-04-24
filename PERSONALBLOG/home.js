// Dashboard Interactivity
document.addEventListener('DOMContentLoaded', function () {

  // STAT CARD ANIMATION 
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('animate');
    });
  }, observerOptions);

  document.querySelectorAll('.stat-card').forEach(card => observer.observe(card));

  // LIVE TOTAL CAR COUNT FROM LOCALSTORAGE
  function updateTotalCount() {
    try {
      const userCars = JSON.parse(localStorage.getItem('userCars')) || [];
      const totalEl = document.getElementById('totalCarsCount');
      if (totalEl) {
        totalEl.textContent = userCars.length;
      }
    } catch (e) {
      // fail silently
    }
  }

  updateTotalCount();

});