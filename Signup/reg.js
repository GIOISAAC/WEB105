const form = document.getElementById("registrationForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const countryCodeSelect = document.getElementById("countryCode");
const phoneNumberInput = document.getElementById("phoneNumber");

form.addEventListener("input", (event) => {
  if (firstName.value.match(/[^A-Za-z]/g) || firstName.value.length < 4 || firstName.value.length > 10) {
    firstName.setCustomValidity("First name must be between 4 and 10 letters and contain only letters.");
    firstName.reportValidity();
    event.preventDefault();
  } else {
    firstName.setCustomValidity("");
  }
});

form.addEventListener("submit", (event) => {
  if (firstName.checkValidity()) {
    console.log("Form is valid, you can submit it.");
  } else {
    console.log("Form is not valid.");
    event.preventDefault();
  }
});

firstName.addEventListener("keydown", (event) => {
  if (event.key === "Tab" && !firstName.checkValidity()) {
    event.preventDefault();
  }
});

lastName.addEventListener("input", (event) => {
  if (lastName.value.match(/[^A-Za-z]/g) || lastName.value.length < 6 || lastName.value.length > 12) {
    lastName.setCustomValidity("Last name must be between 6 and 12 letters and contain only letters.");
    lastName.reportValidity();
    event.preventDefault();
  } else {
    lastName.setCustomValidity("");
  }
});

lastName.addEventListener("keydown", (event) => {
  if (event.key === "Tab" && !lastName.checkValidity()) {
    event.preventDefault();
  }
});

lastName.addEventListener("submit", (event) => {
  if (lastName.checkValidity()) {
    console.log("Form is valid, you can submit it.");
  } else {
    console.log("Form is not valid.");
    event.preventDefault();
  }
});

email.addEventListener("input", (event) => {
    const emailValue = email.value.trim();
  
    if (!emailValue.includes("@gmail.com") && !emailValue.includes("@outlook.com") || !emailValue.includes(".") || emailValue.indexOf("@") <= 3 || emailValue.lastIndexOf(".") <= emailValue.indexOf("@") + 2 || emailValue.lastIndexOf(".") - emailValue.indexOf("@") < 3) {
      email.setCustomValidity("Please enter a valid email address with correct domain spelling");
      email.reportValidity();
      event.preventDefault();
    } else {
      email.setCustomValidity("");
    }
  });
  
  email.addEventListener("keydown", (event) => {
    if (event.key === "Tab" && !email.checkValidity()) {
      event.preventDefault();
    }
  });
  
  email.addEventListener("submit", (event) => {
    if (email.checkValidity()) {
      console.log("Form is valid, you can submit it.");
    } else {
      console.log("Form is not valid.");
      event.preventDefault();
    }
  });

  countryCodeSelect.addEventListener("change", () => {
    const countryCode = countryCodeSelect.value;
    phoneNumberInput.value = `+${countryCode}`;
  });
  
  phoneNumberInput.addEventListener("input", () => {
    if (phoneNumberInput.value.startsWith("+")) {
      countryCodeSelect.value = phoneNumberInput.value.slice(1);
    }
  });



  phoneNumber.addEventListener("input", (event) => {
    const phoneValue = phoneNumber.value.trim();
  
    if (!phoneValue.match(/^\d{10}$/)) {
      phoneNumber.setCustomValidity("Please enter a valid 10-digit phone number.");
      phoneNumber.reportValidity();
      event.preventDefault();
    } else {
      phoneNumber.setCustomValidity("");
    }
  });
  
  phoneNumber.addEventListener("keydown", (event) => {
    if (event.key === "Tab" && !phoneNumber.checkValidity()) {
      event.preventDefault();
    }
  });
  
  phoneNumber.addEventListener("submit", (event) => {
    if (phoneNumber.checkValidity()) {
      console.log("Form is valid, you can submit it.");
    } else {
      console.log("Form is not valid.");
      event.preventDefault();
    }
  });