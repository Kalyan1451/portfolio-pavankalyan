// small script for contact form and year
document.getElementById('year').textContent = new Date().getFullYear();

function submitForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('formStatus');

  if(!name || !email || !message){ status.textContent = 'Please fill all fields.'; return false; }

  // simple mailto fallback - replace with real backend or Formspree integration later
  const subject = encodeURIComponent('Website inquiry from ' + name);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:pavankalyanv539@gmail.com?subject=${subject}&body=${body}`;

  status.textContent = 'Opening mail client…';
  return false;
}
