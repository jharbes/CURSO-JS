function removeDuplicateCharacters(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }

function comparaStrings(string1,string2){
    string1=removeDuplicateCharacters(string1.toLowerCase().replace(/ /g, "")).split('').sort()
    string2=removeDuplicateCharacters(string2.toLowerCase().replace(/ /g, "")).split('').sort()
    console.log(string1,string2)
    if(JSON.stringify(string1)==JSON.stringify(string2))
        return true
    else
        return false
}

console.log(comparaStrings('a Abelha do Mal',"abemldho"))
console.log(comparaStrings('a a abelha do mal','carro doido'))
console.log(comparaStrings('k c e t a','abcdefghikjlmopcqeasgta'))
console.log(comparaStrings('k c e t a','eck   ta'))