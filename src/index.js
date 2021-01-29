// complete the function
function palindrom(str) {
  // code goes here
  //Regular Expression is used to remove unwanted caharacters
  var regEx = /[^A-Za-z0-9]/g;

  //Convert str to lowercase & apply Regex
  var convStr = str.toLowerCase().replace(regEx, '');
  
  //Reverse str
  var revStr = convStr.split('').reverse().join('');

  //Results
  return convStr === revStr;
}

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
