function count() {
    const km = document.getElementById("km");
    const results = document.getElementById("result");

    let mile = km.value * 0.6214;

    console.log("mile morskie: " + mile);
    results.innerHTML = "mile morskie: " + mile;
  }