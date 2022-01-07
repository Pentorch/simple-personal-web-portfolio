function submitData() {
  let name = document.getElementById("input-name").value;

  let email = document.getElementById("input-email").value;

  let phone = document.getElementById("input-phone").value;

  let subject = document.getElementById("input-subject").value;

  let message = document.getElementById("input-message").value;

  let skillHtml = document.getElementById("input-html").checked;

  let skillCss = document.getElementById("input-css").checked;

  let skillJs = document.getElementById("input-js").checked;

  if (name == "") {
    alert("Name is Required");
  } else if (email == "") {
    alert("Email is Required");
  } else if (phone == "") {
    alert("Phone is Required");
  } else if (subject == "") {
    alert("Subject is Required");
  } else if (message == "") {
    alert("Message is Required");
  }

  if (skillHtml) {
    skillHtml = document.getElementById("input-html").value;
  } else {
    skillHtml = "";
  }

  if (skillCss) {
    skillCss = document.getElementById("input-css").value;
  } else {
    skillCss = "";
  }
  if (skillJs) {
    skillJs = document.getElementById("input-js").value;
  } else {
    skillJs = "";
  }
  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(subject);
  console.log(message);
  console.log(skillHtml);
  console.log(skillCss);
  console.log(skillJs);
  let emailReceiver = "willyagustinoefendi@gmail.com";

  let a = document.createElement("a");

  a.href = `mailto: ${emailReceiver}?subject=${subject}&body=Hallo my name ${name} ${message} contact me ${phone} send CV ${email} requirment skill ${skillHtml} ${skillCss}${skillJs}`;
  a.click();

  let dataObject = {
    name: name,
    email: email,
    phoneNumber: phone,
    subject: subject,
    message: message,
    skillHtml: skillHtml,
    skillCss: skillCss,
    skillJs: skillJs,
  };

  console.log(dataObject);
}
