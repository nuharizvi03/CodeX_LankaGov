// Fetch testimonials
fetch('/api/testimonials')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('testimonialList');
    data.forEach(t => {
      const div = document.createElement('div');
      div.classList.add('testimonial');
      div.innerHTML = `<strong>${t.name}</strong> ★${'★'.repeat(t.rating)}<br><p>${t.comment}</p>`;
      container.appendChild(div);
    });
  });

// Check appointment
function checkAppointment() {
  const ref = document.getElementById('appointmentRef').value;
  fetch(`/api/appointment/${ref}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('statusResult').textContent = data.status;
    });
}
