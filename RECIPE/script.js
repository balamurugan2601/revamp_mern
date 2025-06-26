let currentStep = 0;

function toggleIngredients() {
  const list = document.getElementById('ingredients');
  list.classList.toggle('hidden');
}

function toggleSteps() {
  const list = document.getElementById('steps');
  list.classList.toggle('hidden');
}

function startCooking() {
  const steps = document.querySelectorAll('#steps li');
  if (steps.length > 0) {
    steps.forEach(step => step.style.background = 'none');
    steps[0].style.background = '#dcedc8';
    currentStep = 0;
    updateProgressBar();
  }
}

function nextStep() {
  const steps = document.querySelectorAll('#steps li');
  if (currentStep < steps.length - 1) {
    steps[currentStep].style.background = 'none';
    currentStep++;
    steps[currentStep].style.background = '#dcedc8';
    updateProgressBar();
  }
}

function updateProgressBar() {
  const steps = document.querySelectorAll('#steps li');
  const percent = ((currentStep + 1) / steps.length) * 100;
  document.getElementById('progress-bar').style.width = percent + '%';
}
