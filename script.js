// Load cards from LocalStorage or use default fallback data
let deck = JSON.parse(localStorage.getItem('flashcards')) || [
    { question: "What is the capital of India?", answer: "New Delhi" },
    { question: "What does DOM stand for?", answer: "Document Object Model" },
    { question: "Which language runs directly in the browser?", answer: "JavaScript" }
];

let currentIndex = 0;

const flashcard = document.getElementById('flashcard');
const qText =
