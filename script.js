function setColor(btn, color) {
  const button =
    document.querySelector('button');
  button.addEventListener('click',
    () => {
      button.style.backgroundColor =
        "green";
    });

}
