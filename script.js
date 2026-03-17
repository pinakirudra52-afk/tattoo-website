document.getElementById('appointment-form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Appointment submitted! We will contact you soon.');
  this.reset();
});