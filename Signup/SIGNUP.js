var fieldPriorities = {
    "firstName": 1,
    "lastName": 2,
    "email": 3,
    "phoneNumber": 4,
    "dob": 5,
    "nrc": 6,
    "physicalAddress": 7,
    "area": 8,
    "street": 9,
    "town": 10,
    "province": 11,
    "country": 12,
    "sex": 13,
    "clientType": 14,
    "hobbies": 15
};

var currentFieldPriority = 1;
var activeField = null;
var previousField = null;

document.addEventListener("keydown", function enterKeyHandler(event) {
    if (event.key === "Tab") {
        if (activeField) {
            if (!checkFieldFilled(activeField)) {
                if (previousField) {
                    enableField(previousField);
                }
                return;
            }
        }
    }
});

function checkFieldPriority(selectedField) {
    if (fieldPriorities[selectedField] < currentFieldPriority) {
        showPopupMessage("Please fill in the higher priority field: " + Object.keys(fieldPriorities)[currentFieldPriority - 1]);
        return false;
    }
    return true;
}

function validateField(fieldId, fieldType) {
    switch (fieldId) {
        case "firstName":
        case "lastName":
            if (fieldType === "text" && document.getElementById(fieldId).value.length < 2) {
                showPopupMessage("Name must be at least 2 characters long.");
                return false;
            }
            break;

        case "email":
            if (fieldType === "email" && !validateEmail(document.getElementById(fieldId).value)) {
                showPopupMessage("Please enter a valid email address.");
                return false;
            }
            break;

        case "phoneNumber":
            if (fieldType === "tel" && !validatePhoneNumber(document.getElementById(fieldId).value)) {
                showPopupMessage("Please enter a valid phone number.");
                return false;
            }
            break;

        case "dob":
            if (fieldType === "date" && !validateDOB(document.getElementById(fieldId).value)) {
                showPopupMessage("Please enter a valid date of birth.");
                return false;
            }
            break;

        case "nrc":
            if (fieldType === "text" && !validateNRC(document.getElementById(fieldId).value)) {
                showPopupMessage("Please enter a valid NRC number.");
                return false;
            }
            break;

        case "physicalAddress":
        case "area":
        case "street":
        case "town":
        case "province":
        case "country":
            if (fieldType === "text" && document.getElementById(fieldId).value.length < 3) {
                showPopupMessage("Address fields must be at least 3 characters long.");
                return false;
            }
            break;

        case "sex":
            if (fieldType === "select" && document.getElementById(fieldId).value === "") {
                showPopupMessage("Please select a value for Sex.");
                return false;
            }
            break;

        case "clientType":
            if (fieldType === "select" && document.getElementById(fieldId).value === "") {
                showPopupMessage("Please select a value for Client Type.");
                return false;
            }
            break;

        case "hobbies":
            if (fieldType === "textarea" && document.getElementById(fieldId).value.length < 10) {
                showPopupMessage("Hobbies must be at least 10 characters long.");
                return false;
            }
            break;

        default:
            break;
    }

    return true;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhoneNumber(phoneNumber) {
    const re = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,4}$/;
    return re.test(phoneNumber);
}

function validateDOB(dob) {
    const re = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    return re.test(dob);
}

function validateNRC(nrc) {
    const re = /^[0-9]{5}-[0-9]{4}-[0-9]{4}$/;
    return re.test(nrc);
}



function showPopupMessage(message) {
    const popupMessage = document.getElementById("popupMessage");
    const popupMessageText = document.getElementById("popupMessageText");
    const popupMessageCloseButton = document.getElementById("popupMessageCloseButton");
  
    popupMessageText.textContent = message;
    popupMessage.style.display = "block";
  
    popupMessageCloseButton.addEventListener("click", function() {
      popupMessage.style.display = "none";
    });
  }
function closeCustomPopup() {
   
}

function enableField(fieldId) {
   
}

function disableFields() {
   
}

function resetForm() {
   
}

