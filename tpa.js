// // #1..............
// const isRelevant = (topics, paragraph) => {
//     for (const topic of topics) {
//         if (paragraph.includes(topic)) {
//             return true;
//         }
//     }return false;
// }

// // #2..............
// const about = (topics) => (paragraph) => isRelevant(topics, paragraph)
// // // ---OR---
// // // function about1(topics) {
// // //     return function(paragraph) {
// // //         return isRelevant(topics, paragraph)
// // //     }
// // // }

// // const aboutCats = about1(["cat", "kitten", "cats"]);
// // // console.log(aboutCats("The quick brown fox jumps over the lazy dog.")); // false
// // console.log(aboutCats("The quick brown cat jumps over the lazy dog.")) // true

// // #3....................
// const getRelevantSentences = (criteriaFn, sentences) => {
//     const relevantSentences = [];
//     for (sentence of sentences) {
//         if(criteriaFn(sentence)) {
//             relevantSentences.push(sentence);
//         }
//     } return relevantSentences;
// }

// const aboutCats = about(["cat", "kitten", "cats"]);
// const sentences = [
//   "I have a pet cat.",
//   "I have a pet dog.",
//   "I don't have a pet.",
// ];

// console.log(getRelevantSentences(aboutCats, sentences));
// console.log(getRelevantSentences((s) => s.length > 17, sentences));

// #4....................
const getLengthDistance = (s1, s2) => Math.abs(s1.length - s2.length);

// console.log(getLengthDistance("goat", "whale")); // 1
// console.log(getLengthDistance("goat", "boat")); // 0
// console.log(getLengthDistance("whale", "goat")); // 1

// #5...................
const getClosestInLength = (words, word, limit) => {
    for(const item of words) {
        if(getLengthDistance(word, item) > limit) {
            return word;
        }return getLengthDistance(word, item);
    }
}

const words = ["hello", "bye", "goodbye"];
console.log(getClosestInLength(words, "hi", 3)); // "bye"
// console.log(getClosestInLength(words, "hi", 0)); // "hi"

// recursion
// arrow functions
// higher order functions (functions as parameters or output)