function generateKey() {
  const version = document.getElementById("version").value;
  const siteTag = document.getElementById("siteTag").value.toUpperCase();
  const core = document.getElementById("corePassword").value;

  if (!core) {
    alert("Enter your actual password");
    return;
  }

  const randomNumbers = Math.floor(100 + Math.random() * 900);

  const finalKey = `${version}${siteTag}${core}${randomNumbers}`;

  document.getElementById("output").value = finalKey;
}

function copyKey() {
  const output = document.getElementById("output");

  if (!output.value) return;

  output.select();
  navigator.clipboard.writeText(output.value);
  alert("Copied to clipboard");
}

function togglePassword() {
  const input = document.getElementById("corePassword");
  input.type = input.type === "password" ? "text" : "password";
}
