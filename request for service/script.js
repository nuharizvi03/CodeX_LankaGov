const form = document.getElementById("serviceForm");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const inputs = document.querySelectorAll("#serviceForm input, #serviceForm select, #serviceForm textarea");

inputs.forEach(input => {
  input.addEventListener("input", updateProgress);
});

function updateProgress() {
  let filled = 0;

  inputs.forEach(input => {
    if (input.value.trim() !== "") {
      filled++;
    }
  });

  let percent = Math.round((filled / inputs.length) * 100);
  progressBar.value = percent;
  progressText.textContent = percent + "%";
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Form submitted successfully!");

  // reset form and progress
  form.reset();
  progressBar.value = 25;
  progressText.textContent = "25%";
});
