// ===============CRACK THE CODING INTERVIEW CHAPTER 1 =============//  

 let str1 = "";
 let str2 = "";
 
 //Begin Front End // 

 //===========    1.1  are all char unique in a string   =======================

$("#uniqueButton").on("click", function () {
  console.log("button");
  var str1 = document.getElementById("uniquetext").value;
  $("#unique").empty();
  //var str2 = document.getElementById("string2").value;
  let result = uniqueChar(str1);
  if(result){
    $("#unique").append("TRUE, Every character is unique");
    console.log("result is true, the char are unique");
  }
  else{console.log("false it is not unique")
  $("#unique").append("FALSE, There is a repeated character");  
  }
  console.log("enter button");
});

console.log("(1.1) Is the string Unique")

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

    $("#permButton").on("click", function () {
      console.log("permButoon");
      var str1 = document.getElementById("perm1").value;
      var str2 = document.getElementById("perm2").value;

      $("#perm").empty();
      //var str2 = document.getElementById("string2").value;
      let result = IsPermOfOther(str1, str2)
      if(result){
        $("#perm").empty();
        $("#perm").append("They are permutaions of each other");
        console.log("result is true, the char are unique");
      }
      else{console.log("false it is not unique")
      $("#perm").empty();
      $("#perm").append("They are NOT permutations of each other");  
      }
      console.log("enter button");
    });
    
    //Solved///////////////

45
    //  =========  1.3  replace all spaces with a '%20'   ===================
   
   console.log("1.3  replace all spaces with '%20'" )
   $("#replaceButton").on("click", function () {
      console.log("replace button");
        var str = document.getElementById("replaceText").value;
        let str1 = str.trim();
        var chars = str1.split('');
  
        for (let i = 0; i < chars.length; i++) {
          if (chars[i] == " ") {
            chars[i] = "%20";
          } 
        }

        var result = chars.join('');
        $("#replace").empty();
        $("#replace").append(result);  

   });
  
     // console.log(replaceSpace(str1));
      
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


///  ------  1.5  is the string one edit away? ------
console.log("1.5  Is one string one edit away from the other? edits can be remove, replace or add a letter to a string")
function OneEditAway(str1, str2){
    let string1 = str1.trim();
    let string2 = str2.trim();
    let count = 0
     if (string1.length === string2.length){
      for(let i=0; i<string1.length; i++){
        if(string1.charAt(i) == string2.charAt(i)){
          count++;
        }
      }
      if (count +1 == string1.length){
        return true
      }
      else{return false}
  }
    else if(string1.length +1 == string2.length){
      let longer = string2;
      let shorter = string1;
      for(let i=0; i<longer.length; i++){
        if(shorter.charAt(i) != longer.charAt(i)){
          for (let j=i; j< longer.length-i;j++){
            if(shorter.charAt(j) != longer.charAt(j+1)){
              console.log(shorter.charAt(j));
              console.log(longer.charAt(j+1));
              return false;
            }
            else {return true}
          }
          // console.log(longer);
          // console.log(shorter);
          
        }
      }
    }
    else if(string1.length -1 == string2.length){
      let longer = string1;
      let shorter = string2;
      for(let i=0; i<longer.length; i++){
        if(shorter.charAt(i) != longer.charAt(i)){
          for (let j=i; j<= longer.length;j++){
            if (j == longer.length) {return true}
            else if(shorter.charAt(j) != longer.charAt(j+1)){
              return false;
            }
            else {return true}
          }
          // console.log(longer);
          // console.log(shorter);
          
        }
      }
    }
    
    else{return false}
}
  
  console.log(OneEditAway(str1, str2));


  //================= 1.7 rotate a matrix ===========

  var a = [];
  a.push(["1", "2", "3"]);
  a.push(["4", "5", "6"]);
  a.push(["7", "8", "9"]);

  let n = a[0].length;


  function rotate90(matrix) {
    console.log("the original matrix is:")
    display(matrix);
      let b = [];
      for (j = 0; j < n; j++) {
        let temp = [];
        for (i = n - 1; i >= 0; i--) {
          temp.push(a[i][j])
        }
        b.push(temp);
        // console.log(b);
      }
      console.log("The matrix rotated 90 degrees clockwise is:")
      display(b);
      return b;
  }

  rotate90(a);

  function display(a) {
    for (let i = 0; i < n; i++) {
      console.log(a[i]);
    }
  }


//});


