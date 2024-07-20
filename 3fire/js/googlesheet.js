const scriptURL = 'https://script.google.com/macros/s/AKfycbxHFjT7v5FPrFPx9a6SZ7sxIFsZsgx9aZburCutv4jDx99lX2v1oYkwKsexdcORsDfUfw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})