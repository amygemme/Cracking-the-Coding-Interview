// ===============CRACK THE CODING INTERVIEW CHAPTER 1 =============// 
const inquirer = require('inquirer');

inquirer
  .prompt([
    {type: "input", message: "enter first string", name: "string1"},
    {type: "input", message: "enter second string", name: "string2"}
  ])
  .then(answers => {
    var input = answers;
    console.log(input) 
 

 let str1 = input.string1;
 let str2 = input.string2;

 console.log(str1 + str2);
  
//===========    1.1  are all char unique in a string   =======================

console.log("(1.1) Is the string Unique")
// let str = "abcdefghijklmn"

function uniqueChar(string) {
    for (let i = 0; i < string.length; i++) {
        if (i == string.search(string.charAt(i))) {
            // console.log(string.search(string.charAt(i)));
        }
        else{return false;}
    }

    return true;
   };
   
console.log(str1);
console.log(uniqueChar(str1));
console.log(str2 + "\n" + uniqueChar(str2));


   //====  SOLVED ==== ///  

    //  ============== 1.2  given two strings, is one a permutation of the other  ===========
    console.log("(1.2) Is one string a permutation of the other")
    
    console.log("1: " + str1 + "\n2: " + str2);
    var sortAlphabets = function(text) {
        return text.split('').sort().join('');
    };
    
    function IsPermOfOther(string1, string2) {
        if(sortAlphabets(string1) == sortAlphabets(string2)){
            return true;
        }
        else{return false}
        };
        
    console.log(IsPermOfOther(str1, str2));

    //  =========  1.3  replace all spaces with a '%20'   ===================




    // ===========  1.4  is the string a permutaion of a palindrome   ==========
    console.log("(1.4) is it a permutation of a palindrome")

    let trim1 = str1.trim();
    let trim2 = str2.trim();

    function IsPermOfPal(trim) {
        let newChar = 0;
        let repeatChar = 0;
        for (let i = 0; i < trim.length; i++) {
            if (trim.charAt(i) != " ") {
                if (trim.search(trim.charAt(i)) == i) {
                    newChar++;
                }
                else {
                    // ====================Working on the edge case for when a letter repeats 3 or more times 
                    // ======================Such as "never odd or even" =======================

                    // let edgeCase = trim.split(i);
                    // console.log(trim.charAt(i));
                    // console.log("edge:    " + edgeCase);
                    repeatChar++;
                }
            }
        }
        // console.log("new" + newChar);
        // console.log("repeat" + repeatChar);

        if (newChar == repeatChar || newChar - 1 == repeatChar) { return true }
        else { return false }


    }

    console.log("testing string 1" + "\n" + IsPermOfPal(trim1));
    console.log("testing string 2" + "\n" + IsPermOfPal(trim2));

});