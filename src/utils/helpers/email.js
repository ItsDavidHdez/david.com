function toEmail(name, email, message, data) {
  data = `mailto:david-0610@live.com.mx?subject=nombre ${name}  correo ${email}&body=${message}`;
  return data;
}

const handleSubmitEmail = (event, button) => {
  event.preventDefault();
  button.current.click();
};

export { toEmail, handleSubmitEmail };
