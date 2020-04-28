barVal = {
  HatchEggs: 0;
  TendEggs: 0;
}

themeSelection = ["dark","light","bad"]
loopItemStylesI = ["logoTxt","topBar"]
loopItemStylesC = ["btnStyle","txtStyle","sectionStyle","btnBar"]

function chooseTheme(chosenTheme) {
  for (var i1 = 0; i1 < loopItemStylesC.length; i1++) {
    for (var i2 = 0; i2 < document.getElementsByClassName(loopItemStylesC[i1]).length; i2++) {
      for (var i3 = 0; i3 < themeSelection.length; i3++) {
        document.body.classList.remove(themeSelection[i3] + "Theme");
        document.getElementsByClassName(loopItemStylesC[i1])[i2].classList.remove(themeSelection[i3] + "Theme");
      }
      document.body.classList.add(chosenTheme + "Theme");
      document.getElementsByClassName(loopItemStylesC[i1])[i2].classList.add(chosenTheme + "Theme");
    }
  }
  for (var i1 = 0; i1 < loopItemStylesI.length; i1++) {
    for (var i2 = 0; i2 < themeSelection.length; i2++) {
      document.getElementById(loopItemStylesI[i1]).classList.remove(themeSelection[i2] + "Theme");
    }
    document.getElementById(loopItemStylesI[i1]).classList.add(chosenTheme + "Theme");
  }
}

function btnPressed(btnClicked) {
    document.getElementById("btnBar" + btnClicked).style.width = barVal.btnClicked;
}
