function count() {
  const sides = document.getElementsByClassName("sides");
  const results = document.getElementsByClassName("result");

  const a = parseFloat(sides[0].value);
  const b = parseFloat(sides[1].value);

  let area = a * b;
  let circuit = 2 * a + 2 * b;
  console.log("pole: " + area);
  console.log("obwod: " + circuit);
  results[0].innerHTML = area;
  results[1].innerHTML = circuit;
}
