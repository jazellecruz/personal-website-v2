(function () {
  emailjs.init('S2z636yqByQIXsYdP');
})();

const form = document.getElementById('form');
const name_input = document.getElementById('name-input');
const email_input = document.getElementById('email-input');
const message_input = document.getElementById('message-input');
const form_btn = document.getElementById('form-btn');
const alert_box = document.getElementById('alert-box');
const alert_icon = document.getElementById('alert-icon');
const alert_title = document.getElementById('alert-title');
const alert_msg = document.getElementById('alert-msg');

document.getElementById('form').addEventListener('submit', (e) => sendEmail(e))

const sendEmail = async(e) => {
  e.preventDefault();

  const name = name_input.value;
  const email = email_input.value;
  const message = message_input.value;

  const form_data = {
    from_name : name,
    from_email : email,
    message: message
  }

  try{
    form_btn.innerText = 'Sending...';
    await emailjs.send('service_7mv13kf', 'template_hfn84hi', form_data);

    alert_box.style.borderColor = '#6d9971';
    alert_icon.src = './assets/svg/check.svg';
    alert_title.innerText = 'Successfully Sent!';
    alert_title.style.color = '#7cbe86';
    alert_msg.innerText = 'Your e-mail is now on its way to my inbox.';
  } catch(err) {
    alert_box.style.borderColor = '#db8787';
    alert_icon.src = './assets/svg/error.svg';
    alert_title.innerText = 'Failed To Send!';
    alert_title.style.color = '#db6767';
    alert_msg.innerText = 'There was an error in sending your e-mail. Try again later.';
  } finally{
    form.reset();
    form_btn.innerText = 'Send';
    alert_box.style.display = "block";
    setTimeout(() => closeAlertBox(), 7000);
  }

} 

const closeAlertBox = () => {
  alert_box.style.display = 'none';
}