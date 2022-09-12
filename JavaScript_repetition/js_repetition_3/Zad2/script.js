function count() {
  const sides = document.getElementsByClassName("sides");
  const results = document.getElementsByClassName("result");

  const a = parseFloat(sides[0].value);
  const b = parseFloat(sides[1].value);
  const c = parseFloat(sides[2].value);

  let area = a * b * c;
  let circuit = 4 * a + 4 * b + 4 * c;
  console.log("pole: " + area);
  console.log("obwod: " + circuit);
  results[0].innerHTML = area;
  results[1].innerHTML = circuit;
}
