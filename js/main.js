for (i = 0; i < 25; i++) {
  console.log(i);
}
// დავალება2
let a = 0;
while (a < 20) {
  a++;
  console.log(a);
}
// დავალება3
let b = 1;
do {
  console.log(b);
  b++;
} while (b < 30);

// დავალება4
const numbers = [2, 3, 6, 7, 8, 9, 23, 24, 29];
for (let numbers = 2; numbers <= 2; numbers++) {
  console.log(numbers);
  for (let numbers = 6; numbers <= 6; numbers++) console.log(numbers);
  for (let numbers = 8; numbers <= 8; numbers++) console.log(numbers);
  for (let numbers = 24; numbers <= 24; numbers++) console.log(numbers);
}

// დავალება5
let day;
switch (new Date(1).getDay()) {
  case 0:
    day = "კვირა";
    break;
  case 1:
    day = "ორშაბათი";
    break;
  case 2:
    day = "სამშაბათი";
    break;
  case 3:
    day = "ოთხშაბათი";
    break;
  case 4:
    day = "ხუთშაბათი";
    break;
  case 5:
    day = "პარასკევი";
    break;
  case 6:
    day = "შაბათი";
}
console.log(new Date());
