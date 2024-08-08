
const form = document.getElementById("registrationForm");
const inputs = document.querySelectorAll("#registrationForm input, #registrationForm select");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].checkValidity()) {
      isValid = false;
      break;
    }
  }

  if (!isValid) {
    return;
  }

  

  alert("Account successfully registered.");
  window.location.replace("index.html");
});


form.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    let isValid = true;
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].checkValidity()) {
        isValid = false;
        break;
      }
    }
    if (!isValid) {
      event.preventDefault();
    }
  }
});

// FIRST NAME VALIDATION

const firstName = document.getElementById("firstName");
firstName.addEventListener("input", (event) => {
  if (firstName.value.match(/[^A-Za-z]/g) || firstName.value.length < 2 || firstName.value.length > 10) {
    firstName.setCustomValidity("First name must be between 2 and 10 letters and contain only letters.");
  } else {
    firstName.setCustomValidity("");
  }
  firstName.reportValidity();
});

// LAST NAME VALIDATION
const lastName = document.getElementById("lastName");
lastName.addEventListener("input", (event) => {
  if (lastName.value.match(/[^A-Za-z]/g) || lastName.value.length < 3 || lastName.value.length > 12) {
    lastName.setCustomValidity("Last name must be between 3 and 12 letters and contain only letters.");
  } else {
    lastName.setCustomValidity("");
  }
  lastName.reportValidity();
});

const email = document.getElementById("email");
email.addEventListener("input", (event) => {
  const emailValue = email.value.trim();
  if (!emailValue.includes("@gmail.com") && !emailValue.includes("@outlook.com") || !emailValue.includes(".") || emailValue.indexOf("@") <= 3 || emailValue.lastIndexOf(".") <= emailValue.indexOf("@") + 2 || emailValue.lastIndexOf(".") - emailValue.indexOf("@") < 3) {
    email.setCustomValidity("Please enter a valid email address with correct domain spelling");
  } else {
    email.setCustomValidity("");
  }
  email.reportValidity();
});


// Phone Number validation
const phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", (event) => {
  if (!phoneNumber.value.match(/^(095|096|097|077)\d{7}$/)) {
    phoneNumber.setCustomValidity("Phone number must be 10 digits and have correct prefixes  .");
  } else {
    phoneNumber.setCustomValidity("");
  }
  phoneNumber.reportValidity();
});



form.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    let isValid = true;
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].checkValidity()) {
        isValid = false;
        break;
      }
    }
    if (!isValid) {
      event.preventDefault();
    }
  }
});

for (const input of inputs) {
  input.addEventListener("blur", () => {
    input.reportValidity();
  });
}



// DOB VALIDATION
const dob = document.getElementById("dob");
dob.addEventListener("input", (event) => {
  const today = new Date();
  const minimumAge = 18 * 365;

  let selectedDate = new Date(dob.value);

  if (isNaN(selectedDate)) {
    selectedDate = new Date(dob.valueAsNumber);
  }

  if (today < selectedDate || today - selectedDate < minimumAge) {
    dob.setCustomValidity("You must be at least 18 years old and not a future date.");
  } else {
    dob.setCustomValidity("");
  }

  dob.reportValidity();
});


// NRC VALIDATION
const nrcInput = document.getElementById("nrc");

  nrcInput.addEventListener("input", (event) => {
    if (!nrcInput.value.match(/[0-9]{6}\/[0-9]{2}\/[0-9]/)) {
      nrcInput.setCustomValidity("NRC number should be in 6-digits/2-digits/1-digit format");
    } else {
      nrcInput.setCustomValidity("");
    }
    nrcInput.reportValidity();
  });

  // PHYSICAL ADDRESS VALIDATION

  const physicalAddress = document.getElementById("physicalAddress");
  const area = document.getElementById("area");
  const street = document.getElementById("street");

  const inputPattern = /^[a-zA-Z0-9\s!@#$%^&*()-_+=]+$/;

  const validateInput = (event) => {
    if (!event.target.value.match(inputPattern)) {
      event.target.setCustomValidity("Input can only contain alphanumeric characters, spaces, and basic punctuation.");
    } else {
      event.target.setCustomValidity("");
    }
    event.target.reportValidity();
  };

  physicalAddress.addEventListener("input", validateInput);
  area.addEventListener("input", validateInput);
  street.addEventListener("input", validateInput);

  const country = document.getElementById("country");

  country.addEventListener("input", (event) => {
    if (country.value.trim().toLowerCase() !== "zambia") {
      country.setCustomValidity("Country does not match  your region");
    } else {
      country.setCustomValidity("");
    }
    country.reportValidity();
  });


  // SEX AND CLIENT TTYPE VALIDATION 
  const sex = document.getElementById("sex");
    const clientType = document.getElementById("clientType");

    function validateSelect(whichOne) {
      if (whichOne.value === "") {
        whichOne.setCustomValidity("Please select a valid option");
      } else {
        whichOne.setCustomValidity("");
      }
      whichOne.reportValidity();
    }

    sex.addEventListener("change", () => {
      validateSelect(sex);
    });
    clientType.addEventListener("change", () => {
      validateSelect(clientType);
    });

    const hobbies = document.getElementById("hobbies");

    hobbies.addEventListener("input", (event) => {
      if (!hobbies.value.match(/^[a-zA-Z\s]*$/)) {
        hobbies.setCustomValidity("Hobbies can only contain letters and spaces.");
      } else {
        hobbies.setCustomValidity("");
      }
      hobbies.reportValidity();

    });

    // PROVINCE VALIDATION

    const province = document.getElementById("province");

    province.addEventListener("input", (event) => {
      if (!province.value.match(/^[a-zA-Z\s]*$/)) {
        province.setCustomValidity("Province can only contain letters and spaces.");
      } else {
        province.setCustomValidity("");
      }
      province.reportValidity();
    });


    const bankName = document.getElementById("bankName");
    bankName.addEventListener("input", (event) => {
      if (!bankName.value.match(/^[a-zA-Z\s]+$/)) {
        bankName.setCustomValidity("Bank name can only contain letters and spaces.");
      } else {
        bankName.setCustomValidity("");
      }
      bankName.reportValidity();
    });
    
    const bankAccountNo = document.getElementById("bankAccountNo");
    bankAccountNo.addEventListener("input", (event) => {
      if (!bankAccountNo.value.match(/^[0-9]{10}$/)) {
        bankAccountNo.setCustomValidity("Bank account number must be 10 digits.");
      } else {
        bankAccountNo.setCustomValidity("");
      }
      bankAccountNo.reportValidity();
    });
    
    const bankBranch = document.getElementById("bankBranch");
    bankBranch.addEventListener("input", (event) => {
      if (!bankBranch.value.match(/^[a-zA-Z\s]+$/)) {
        bankBranch.setCustomValidity("Bank branch can only contain letters and spaces.");