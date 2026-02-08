function generateKey() {
  const prefix = "JHFv1";
  const core = document.getElementById("corePassword").value;

  if (!core) {
    alert("Enter your actual password first");
    return;
  }

  const randomNumbers = Math.floor(10 + Math.random() * 90);

  const finalKey = prefix + core + randomNumbers;

  document.getElementById("output").value = finalKey;
}
