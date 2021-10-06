// Target all classes and ids from the HTML
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

// Store the classes and ids inside these variables
let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),

  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");



// Target the form and add the submit event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
});



// Engine function which will do all sorts of form validation work.
// ID will target the id,
// SERIAL will target the classes [error class, success and failure icons]
// MESSAGE will print a message inside the .error class
let engine = (id, serial, message) => {
  // id.value.trim() will remove all the extra white spaces from the value which the user inputs
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
}



