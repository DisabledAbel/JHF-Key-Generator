const slider = document.getElementById("numLength");
const lenVal = document.getElementById("lenVal");

slider.oninput = () => {
  lenVal.textContent = slider.value;
};

function generateKey() {
  const version = document.getElementById("version").value;
  const site = document.getElementById("siteTag").value.toUpperCase();
  const core = document.getElementById("corePassword").value;
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
  const input = document.getElementById("corePassword");
  input.type = input.type === "password" ? "text" : "password";
}
