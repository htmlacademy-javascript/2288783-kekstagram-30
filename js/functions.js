function calculateSymbol(str, number){
  if (str.length >= number){
    return true
  }
  else{
    return false
  }
}
function isPalindrome(string) {
  string = string.toLowerCase().replaceAll();
  const stringArray = [...string];
  const newArray = [];
  stringArray.forEach(index => {
    newArray.unshift(index);
  });
  const reversedString = newArray.join('');
  console.log(string);
  return string === reversedString;
}
