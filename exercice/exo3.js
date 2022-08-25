let salary = Number(prompt("entrer le salaire:"));

switch (true) {
  case salary <= 100000:
    alert("you are poor");
    break;
  case salary <= 200000:
    alert("you ill get");
    break;
  case salary <= 300000:
    alert("hope");
    break;
  case salary <= 400000:
    alert("you going");
    break;
  case salary >= 500000:
    alert("you are ok");
    break;
  default:
    alert("you joke");
}
