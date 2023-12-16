const flashcardsData = [
  {
    word: 'Serendipity',
    meaning:
      'The occurrence and development of events by chance in a happy or beneficial way',
  },
  { word: 'Ephemeral', meaning: 'Lasting for a very short time' },
  { word: 'Ubiquitous', meaning: 'Present, appearing, or found everywhere' },
  { word: 'Mellifluous', meaning: 'Sweet or musical; pleasant to hear' },
  {
    word: 'Quixotic',
    meaning: 'Extremely idealistic; unrealistic and impractical',
  },
  {
    word: 'Pernicious',
    meaning: 'Having a harmful effect, especially in a gradual or subtle way',
  },
  { word: 'Eloquent', meaning: 'Fluent or persuasive in speaking or writing' },
  {
    word: 'Resilience',
    meaning: 'The capacity to recover quickly from difficulties; toughness',
  },
  {
    word: 'Ineffable',
    meaning: 'Too great or extreme to be expressed or described in words',
  },
  {
    word: 'Sycophant',
    meaning:
      'A person who acts obsequiously toward someone important in order to gain advantage',
  },
];

const cardContainer = document.getElementById('card-container');
const startButton = document.getElementById('start-button');
const doneButton = document.getElementById('done-button');
const resetButton = document.getElementById('reset-button');
const scoreCard = document.getElementById('score-card');

let score = 10;
let wrong = 0;
let clickedCards = [];

const updateScore = () => {
  score--;
  wrong++;
  scoreCard.innerText = "Score : " + score;
};

const handleStart = () => {
  clickedCards = [];
  cardContainer.innerHTML = '';

  flashcardsData.forEach((item, index) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'border-2 border-green-500 rounded-md p-5 h-full';
    cardElement.innerText = item.word;
    cardContainer.appendChild(cardElement);
    score = 10;
    wrong = 0;
    scoreCard.innerText = "Score : " + score;

    cardElement.addEventListener('click', () => {
      cardElement.classList.add('border-red-500');
      cardElement.innerText = item.meaning;
      updateScore();
      clickedCards.push({ index, card: item });
    });
  });

  resetButton.classList.remove('hidden');
  startButton.classList.add('hidden');
  doneButton.classList.remove('hidden');
};

const handleReset = () => {
  cardContainer.innerHTML = '';
  score = 10;
  wrong = 0;
  clickedCards = [];

  startButton.classList.remove('hidden');
  resetButton.classList.add('hidden');
  doneButton.classList.add('hidden');
  scoreCard.innerText = "";
};

const handleDone = () => {
  scoreCard.innerText = "You got " + wrong + " words wrong. Score : " + score;

  cardContainer.innerHTML = '';

  clickedCards.sort((a, b) => a.index - b.index);

  clickedCards.forEach(({ card }) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'border-2 border-red-500 rounded-md p-5   h-full';

    const wordElement = document.createElement('p');
    wordElement.innerText = card.word;
    wordElement.className = 'font-bold text-xl';
    cardElement.appendChild(wordElement);

    const meaningElement = document.createElement('p');
    meaningElement.innerText = card.meaning;
    cardElement.appendChild(meaningElement);

    cardContainer.appendChild(cardElement);
  });

  resetButton.classList.add('hidden');
  startButton.classList.remove('hidden');
  doneButton.classList.add('hidden');
};

