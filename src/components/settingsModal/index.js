export const backgroundChange = (darkMode) => {
  if (darkMode) {
    document.body.classList.add("bg-dark");
    document.body.classList.remove("bg-light");
  } else {
    document.body.classList.add("bg-light");
    document.body.classList.remove("bg-dark");
  }
};

export const darkModeClasses = (boxElements, scoreElements, shadowElements, darkMode) => {
  if (boxElements && scoreElements && shadowElements) {
    boxElements.forEach((boxElement) => {
      if (darkMode) {
        boxElement.classList.add("dark");
        boxElement.classList.remove("light");
      } else {
        boxElement.classList.add("light");
        boxElement.classList.remove("dark");
      }
    });
    scoreElements.forEach((scoreElement) => {
      if (darkMode) {
        scoreElement.classList.add("dark");
        scoreElement.classList.remove("light");
      } else {
        scoreElement.classList.add("light");
        scoreElement.classList.remove("dark");
      }
    });
    shadowElements.forEach((shadowElement) => {
      if (darkMode) {
        shadowElement.classList.add("no-shadow");
        shadowElement.classList.remove("shadow");
      } else {
        shadowElement.classList.add("shadow");
        shadowElement.classList.remove("no-shadow");
      }
    });
  }
};

