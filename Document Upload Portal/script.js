// Progress based on actual files selected (matches your 2/3 style)
const fileInputs = Array.from(document.querySelectorAll(".doc-file"));
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

function updateProgress() {
  const uploaded = fileInputs.filter(f => f.files && f.files.length > 0).length;
  progressBar.value = uploaded;
  progressText.textContent = `${uploaded}/3`;
}
fileInputs.forEach(f => f.addEventListener("change", updateProgress));
updateProgress(); // initial

// Submit (demo)
document.getElementById("submitBtn").addEventListener("click", () => {
  alert("Documents submitted successfully!");
});
