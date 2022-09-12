function getDataClassName() {
    const general = document.getElementsByClassName("general-info");

    let brand = general[0].value;
    let model = general[1].value;
    let year = general[2].value;
    let price = general[3].value;
    let registration = general[4].value;

    console.log("brand: " + brand);
    console.log("model: " + model);
    console.log("year: " + year);
    console.log("price: " + price);
    console.log("registration: " + registration);

    document.getElementById("result").innerHTML =
      "brand: " +
      brand +
      " model: " +
      model +
      " year: " +
      year +
      " price: " +
      price +
      " registration: " +
      registration;
  }