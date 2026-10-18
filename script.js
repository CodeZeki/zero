class ColorChanger {
  static handleClick(buttonElement) {
    document.getElementById("center").style.backgroundColor = buttonElement.id;
  }
}