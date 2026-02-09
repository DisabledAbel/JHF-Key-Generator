const slider = document.getElementById("numLength");
const lenVal = document.getElementById("lenVal");
const passwordInput = document.getElementById("corePassword");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

slider.oninput = () => {
  lenVal.textContent = slider.value;
};

passwordInput.addEventListener("input", () => {
  const val = passwordInput.value;
  let score = 0;

  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[a-z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;

  if (!val) {
    strengthBar.style.width = "0%";
    strengthText.textContent = "Strength: —";
    return;
  }

  if (score <= 2) {
    strengthBar.style.width = "33%";
    strengthBar.style.background = "#ef4444";
    strengthText.textContent = "Strength: Weak";
  } else if (score <= 4) {
    strengthBar.style.width = "66%";
    strengthBar.style.background = "#f59e0b";
    strengthText.textContent = "Strength: Medium";
  } else {
    strengthBar.style.width = "100%";
    strengthBar.style.background = "#22c55e";
    strengthText.textContent = "Strength: Strong";
  }
});

function generateKey() {
  const version = document.getElementById("version").value;
  const site = document.getElementById("siteTag").value.toUpperCase();
  const core = passwordInput.value;
  const len = slider.value;

  if (!core) {
    alert("Enter your password");
    return;
  }

  let nums = "";
  for (let i = 0; i < len; i++) {
    nums += Math.floor(Math.random() * 10);
  }

  document.getElementById("output").value =
    `${version}${site}${core}${nums}`;
}

function copyKey() {
  const out = document.getElementById("output");
  if (!out.value) return;

  navigator.clipboard.writeText(out.value);
  alert("Copied!");
}

function togglePassword() {
  passwordInput.type =
    passwordInput.type === "password" ? "text" : "password";
}
