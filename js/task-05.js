  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }

  const changeColorButton = document.querySelector('.change-color');
  const colorSpan = document.querySelector('.color');

  changeColorButton.addEventListener('click', function () {
    const randomColor = getRandomHexColor();

    document.body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;

  });

  function isDarkColor(color) {
    const hexColor = color.substring(1);
    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);
  }
