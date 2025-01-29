document.getElementById('generate').addEventListener('click', () => {
  const input = document.getElementById('participants').value;
  const names = input.split(',').map(name => name.trim()).filter(name => name);

  if (names.length < 2) {
    alert('Por favor, ingresa al menos 2 nombres.');
    return;
  }

  const assignments = shuffleArray(names);
  displayResult(assignments);
});

function shuffleArray(array) {
  let shuffled = array.slice();
  let assignments = {};

  do {
    shuffled = shuffled.sort(() => Math.random() - 0.5);
  } while (shuffled.some((name, index) => name === array[index]));

  for (let i = 0; i < array.length; i++) {
    assignments[array[i]] = shuffled[i];
  }

  return assignments;
}

function displayResult(assignments) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '<h3>Resultados:</h3>';
  for (const [giver, receiver] of Object.entries(assignments)) {
    resultDiv.innerHTML += `<p>${giver} → ${receiver}</p>`;
  }
}

