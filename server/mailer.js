const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendEmail = function(name, email, subject, message) {
  const msg = {
    to: "samarthparikh62@gmail.com",
    from: "parikh.samarth18@gmail.com",
    subject: `My Website: ${subject}`,
    text: message,
    html: `<p>Name: ${name}</p><br /><p>Email: ${email}</p><br /><p>Message: ${message}</p>`
  };
  sgMail.send(msg);
};
