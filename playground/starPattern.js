const pattern1 = (n) => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= n; col++) {
      rowData = rowData + "*";
    }
    console.log(rowData);
  }
};

const pattern2 = (n) => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= row; col++) {
      rowData = rowData + "*";
    }
    console.log(rowData);
  }
};

const pattern3 = (n) => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= row; col++) {
      rowData = rowData + col;
    }
    console.log(rowData);
  }
};
const pattern4 = (n) => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= row; col++) {
      rowData = rowData + row;
    }
    console.log(rowData);
  }
};

const pattern5 = () => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= n - row + 1; col++) {
      rowData = rowData + "*";
    }
    console.log(rowData);
  }
};

const pattern6 = () => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= n - row + 1; col++) {
      rowData = rowData + col;
    }
    console.log(rowData);
  }
};

const pattern7 = (n) => {
  let stars = 1;
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= n - row; col++) {
      rowData = rowData + " ";
    }
    for (let col = 1; col <= stars; col++) {
      rowData = rowData + "*";
    }
    stars = stars + 2;
    console.log(rowData);
  }
};

const pattern8 = (n) => {
  let stars = 2 * n - 1;
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col < row; col++) {
      rowData = rowData + " ";
    }
    for (let col = 1; col <= stars; col++) {
      rowData = rowData + "*";
    }
    console.log(rowData);
    stars = stars - 2;
  }
};

const pattern9 = (n) => {
  pattern7(n);
  pattern8(n);
};

const pattern10 = (n) => {
  pattern2(n - 1);
  pattern5(n - 1);
};

const pattern11 = () => {
  for (let row = 1; row <= n; row++) {
    let number = row % 2;
    let rowData = "";
    for (let col = 1; col <= row; col++) {
      rowData = rowData + (number % 2) + " ";
      number++;
    }
    console.log(rowData);
  }
};

const pattern12 = (n) => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= row; col++) {
      rowData = rowData + col;
    }
    for (let col = 1; col <= 2 * (n - row); col++) {
      rowData = rowData + " ";
    }
    for (let col = row; col >= 1; col--) {
      rowData = rowData + col;
    }
    console.log(rowData);
  }
};

const pattern13 = (n) => {
  let number = 1;
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= row; col++) {
      rowData = rowData + number + " ";
      number++;
    }
    console.log(rowData);
  }
};

const pattern14 = (n) => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    let character = 65;
    for (let col = 1; col <= row; col++) {
      rowData = rowData + String.fromCharCode(character);
      character++;
    }
    console.log(rowData);
  }
};

const pattern15 = (n) => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    let character = 65;
    for (let col = 1; col <= n - row + 1; col++) {
      rowData = rowData + String.fromCharCode(character);
      character++;
    }
    console.log(rowData);
  }
};

const pattern16 = (n) => {
  let character = 65;
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= row; col++) {
      rowData = rowData + String.fromCharCode(character);
    }
    character++;
    console.log(rowData);
  }
};

const pattern17 = (n) => {
  let character = 65;
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= n - row; col++) {
      rowData = rowData + " ";
    }
    for (let col = 1; col <= row; col++) {
      rowData = rowData + String.fromCharCode(character + col - 1);
    }
    for (let col = row - 1; col >= 1; col--) {
      rowData = rowData + String.fromCharCode(character + col - 1);
    }
    console.log(rowData);
  }
};

const pattern18 = (n) => {
  let character = 65 + n - 1;
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= row; col++) {
      rowData = rowData + String.fromCharCode(character + col - 1);
    }
    character--;
    console.log(rowData);
  }
};

const pattern19 = (n) => {
  pattern20part2(n, 0);
  pattern20part1(n);
};
const pattern20part1 = (n) => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= row; col++) {
      rowData = rowData + "*";
    }
    for (let col = 1; col <= 2 * (n - row); col++) {
      rowData = rowData + " ";
    }
    for (let col = row; col >= 1; col--) {
      rowData = rowData + "*";
    }
    console.log(rowData);
  }
};
const pattern20part2 = (n, spaces) => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= n - row + 1; col++) {
      rowData = rowData + "*";
    }
    for (let col = 1; col <= spaces; col++) {
      rowData = rowData + " ";
    }
    for (let col = 1; col <= n - row + 1; col++) {
      rowData = rowData + "*";
    }
    spaces = spaces + 2;
    console.log(rowData);
  }
};
const pattern20 = (n) => {
  pattern20part1(n);
  pattern20part2(n - 1, 2);
};
const pattern21 = (n) => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= n; col++) {
      if (row == 1 || col == 1 || row == n || col == n) {
        rowData = rowData + "*";
      } else {
        rowData = rowData + " ";
      }
    }
    console.log(rowData);
  }
};

const n = 5;
// pattern1(n);
// pattern2(n);
// pattern3(n);
// pattern4(n);
// pattern5(n);
// pattern6(n);
// pattern7(n);
// pattern8(n);
// pattern9(n);
// pattern10(n);
// pattern11(n);
// pattern12(n);
// pattern13(n);
// pattern14(n);
// pattern15(n);
// pattern16(n);
// pattern17(n);
pattern18(n);
// pattern19(n);
// pattern20(n);
// pattern21(n);
