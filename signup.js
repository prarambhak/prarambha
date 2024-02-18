function togglePasswordVisibility(inputId) {
  const input = document.getElementById(inputId);
  const toggleBtn = document.querySelector(`#${inputId} + .toggle-password`);
  if (input.type === "password") {
      input.type = "text";
      toggleBtn.textContent = "Hide";
  } else {
      input.type = "password";
      toggleBtn.textContent = "Show";
  }
}