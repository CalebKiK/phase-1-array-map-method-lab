const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials.map((tutorialName, index) => {
//     const eachWord = tutorialName.split ('');
      
//     const titleCasedWords = eachWord.map((word, wordIndex) => {
//       if (index === tutorials.length -1 && wordIndex === eachWord.length -1){
//         return word.toUpperCase();
//       } else {
//           return eachWord.charAt(0).toUpperCase() + eachWord.slice(1).toLowerCase();
//       } 
//       });

//     return titleCasedWords.join (''); 
//   })};

// console.log(titleCased());


const titleCased = () => {
  return tutorials.map((tutorialName, index) => {
    const eachWord = tutorialName.split ('');
      
    const titleCasedWords = eachWord.map(eachWord.charAt(0).toUpperCase() + word.slice(1));

    const titleCaseSentence = titleCasedWords.join ('');

    return titleCaseSentence.slice(0,-1).toUpperCase() + titleCaseSentence.slice(-1);

    });  
  }

console.log(titleCased());