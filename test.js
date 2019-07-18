const inquirer = require('inquirer');

inquirer
  .prompt([
    { type: "input", message: "enter first string", name: "string1" },
    { type: "input", message: "enter second string", name: "string2" }
  ])
  .then(answers => {
    var input = answers;
    // console.log(input)


    let str1 = input.string1;
    let str2 = input.string2;

    // console.log(str1 + str2);
    // test function 

    var a = [];
    a.push(["1", "2", "3"]);
    a.push(["4", "5", "6"]);
    a.push(["7", "8", "9"]);

    let n = a[0].length;
    console.log(n);
    let even = true;
    if (n % 2 == 0) { even = true }
    else { even = false };
    console.log("even  " + even);


    function rotate90(matrix) {
      display(matrix);
        let b = [];
        for (j = 0; j < n; j++) {
          let temp = [];
          for (i = n - 1; i >= 0; i--) {
            console.log(a[i][j]);
            console.log("i  " + i)
            temp.push(a[i][j])
          }
          b.push(temp);
          // console.log(b);
          display(b);
        }
      
    }

    rotate90(a);

    function display(a) {
      for (let i = 0; i < n; i++) {
        console.log(a[i]);
      }
    }



    // function end

  });

