const lines = [
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

const titleCased = () => {

  return lines.map((array) => {
      const array1 = array.split(' ');
      const arrayNew = array1.map((string) => {
          string = `${string[0].toUpperCase()}${string.slice(1)}`;
          return string;
      })
      return arrayNew.join(" ");
  })
  return lines
}

console.log(titleCased())