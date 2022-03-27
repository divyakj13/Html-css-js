let language = ["C", "Java","C++", "Python"];
let updateLanguage=[".net", ...language];//spread
let [a,b,...rest]=updateLanguage;//rest
console.log(updateLanguage);
console.log(rest)
console.log(a)
console.log(language)
