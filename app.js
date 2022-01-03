const inputs = document.querySelectorAll('input');
const verificationButton = document.querySelector('button');
let code = [];

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input', () => {
    inputs[i].blur();
    if (inputs[i] != inputs[inputs.length - 1]) {
      inputs[i+1].focus();
    };
    code += inputs[i].value;
  });
};

document.addEventListener('paste', (evt) => {
  if (evt.target.type === 'text') {
    let data = evt.clipboardData.getData('text');
    code = data;
    data = data.split('');
    inputs.forEach((input, index) => {
      input.value = data[index];
    });

  }
});

verificationButton.addEventListener('click', () => {
  code = code.substring(0, 4);
  if (code == 1234) {
    alert('Code verified!');
  }
  else {
    alert('Code denied!');
  }
});
