function chooseTheme(theme) {
  if (theme == "dark") {
    document.body.classList.remove("lightTheme");
    document.body.classList.add("darkTheme");
    for (var i1 = 0; i1 < document.getElementsByClassName("btnStyle").length; i1++) {
      document.getElementsByClassName("btnStyle")[i1].classList.remove("lightTheme");
      document.getElementsByClassName("btnStyle")[i1].classList.add("darkTheme");
    }
    console.log("zoop");
  }
  if (theme == "light") {
    document.body.classList.remove("darkTheme");
    document.body.classList.add("lightTheme");
    for (var i1 = 0; i1 < document.getElementsByClassName("btnStyle").length; i1++) {
      document.getElementsByClassName("btnStyle")[i1].classList.remove("darkTheme");
      document.getElementsByClassName("btnStyle")[i1].classList.add("lightTheme");
    }
    console.log("boop");
  }
}
