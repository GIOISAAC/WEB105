const profileIcon = document.querySelector('.profile-icon');
const profileImage = document.querySelector('.profile-icon img');
const profileInput = document.querySelector('#profile-image');

profileInput.addEventListener('change', function() {
  const file = profileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      profileImage.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

profileIcon.addEventListener('click', function() {
  profileInput.click();
});


  