const pipesAndCisternsQuestions = [
  {
    numb: 1,
    question: "How long does it take for Pipe A to fill the tank alone?",
    options: ["6 hours", "8 hours", "10 hours", "12 hours"],
    correctAnswer: "6 hours",
  },
  {
    numb: 2,
    question: "What is the capacity of the tank filled by Pipe B?",
    options: ["100 liters", "150 liters", "200 liters", "250 liters"],
    correctAnswer: "200 liters",
  },
  {
    numb: 3,
    question: "How long does it take for Pipe C to empty the tank?",
    options: ["8 hours", "10 hours", "12 hours", "14 hours"],
    correctAnswer: "10 hours",
  },
  {
    numb: 4,
    question:
      "If Pipe A and Pipe B together can fill the tank in 4 hours, how long does it take for Pipe B alone?",
    options: ["4 hours", "6 hours", "8 hours", "10 hours"],
    correctAnswer: "8 hours",
  },
  {
    numb: 5,
    question:
      "What is the efficiency of Pipe A if it can fill the tank in 8 hours?",
    options: ["10%", "12.5%", "15%", "20%"],
    correctAnswer: "12.5%",
  },
  {
    numb: 6,
    question:
      "If Pipe C can empty the tank in 12 hours, how long will it take for all three pipes together to fill the tank?",
    options: ["6 hours", "8 hours", "10 hours", "12 hours"],
    correctAnswer: "12 hours",
  },
  {
    numb: 7,
    question:
      "What is the time taken for Pipe A and Pipe C together to fill the tank?",
    options: ["5 hours", "6 hours", "7 hours", "8 hours"],
    correctAnswer: "7 hours",
  },
  {
    numb: 8,
    question:
      "If Pipe B can fill the tank in 5 hours, what is the total time taken for all three pipes together to fill the tank?",
    options: ["2 hours", "3 hours", "4 hours", "5 hours"],
    correctAnswer: "3 hours",
  },
  {
    numb: 9,
    question:
      "What is the ratio of the efficiencies of Pipe A, Pipe B, and Pipe C?",
    options: ["2:3:4", "1:2:3", "3:4:5", "4:5:6"],
    correctAnswer: "1:2:3",
  },
  {
    numb: 10,
    question:
      "If Pipe B and Pipe C together can empty the tank in 6 hours, how long does it take for Pipe A alone to fill the tank?",
    options: ["9 hours", "12 hours", "15 hours", "18 hours"],
    correctAnswer: "15 hours",
  },
];

const probabilityQuestions = [
  {
    numb: 1,
    question: "What is the probability of rolling a 6 on a fair six-sided die?",
    options: ["1/8", "1/4", "1/6", "1/2"],
    correctAnswer: "1/6",
  },
  {
    numb: 2,
    question: "If you flip a coin, what is the probability of getting heads?",
    options: ["1/2", "1", "1/4", "3/4"],
    correctAnswer: "1/2",
  },
  {
    numb: 3,
    question:
      "What is the probability of drawing a red card from a standard deck of playing cards?",
    options: ["1/2", "1/4", "1/3", "1/5"],
    correctAnswer: "1/2",
  },
  {
    numb: 4,
    question:
      "If you roll two six-sided dice, what is the probability of getting a sum of 7?",
    options: ["1/6", "1/8", "1/12", "1/36"],
    correctAnswer: "1/6",
  },
  {
    numb: 5,
    question:
      "If you draw two cards from a deck without replacement, what is the probability that both cards are red?",
    options: ["1/26", "1/25", "1/24", "1/23"],
    correctAnswer: "1/25",
  },
  {
    numb: 6,
    question:
      "In a standard deck of playing cards, what is the probability of drawing a face card (jack, queen, or king)?",
    options: ["1/4", "1/3", "1/2", "3/4"],
    correctAnswer: "3/4",
  },
  {
    numb: 7,
    question:
      "If you spin a spinner with 8 equal sections numbered 1 through 8, what is the probability of landing on an even number?",
    options: ["1/4", "1/2", "3/4", "1"],
    correctAnswer: "1/2",
  },
  {
    numb: 8,
    question:
      "If you draw a card from a deck, what is the probability that it is a black card?",
    options: ["1/2", "13/26", "1/3", "1/4"],
    correctAnswer: "1/2",
  },
  {
    numb: 9,
    question:
      "In a bag of marbles, there are 4 red marbles, 3 blue marbles, and 5 green marbles. What is the probability of drawing a blue marble?",
    options: ["3/12", "2/12", "1/4", "1/3"],
    correctAnswer: "1/4",
  },
  {
    numb: 10,
    question:
      "If you flip a fair coin 3 times, what is the probability of getting exactly 2 heads?",
    options: ["1/8", "3/8", "3/16", "1/4"],
    correctAnswer: "3/8",
  },
];

const problemsOnAgeQuestions = [
  {
    numb: 1,
    question:
      "If John is 10 years older than Alice, and the sum of their ages is 50, how old is Alice?",
    options: ["15 years", "20 years", "25 years", "30 years"],
    correctAnswer: "20 years",
  },
  {
    numb: 2,
    question:
      "Three years ago, the age of Tom was double the age of Jerry. If Tom is now 30 years old, how old is Jerry?",
    options: ["15 years", "18 years", "21 years", "24 years"],
    correctAnswer: "24 years",
  },
  {
    numb: 3,
    question:
      "The average age of a family of four members is 30 years. If the age of the youngest member is 15 years, what is the average age of the other three members?",
    options: ["20 years", "25 years", "30 years", "35 years"],
    correctAnswer: "35 years",
  },
  {
    numb: 4,
    question:
      "A father is three times as old as his son. If the sum of their ages is 45, how old is the son?",
    options: ["10 years", "15 years", "20 years", "25 years"],
    correctAnswer: "15 years",
  },
  {
    numb: 5,
    question:
      "Two years ago, the age of a mother was 6 times the age of her daughter. If the mother is now 40 years old, how old is the daughter?",
    options: ["8 years", "10 years", "12 years", "14 years"],
    correctAnswer: "8 years",
  },
  {
    numb: 6,
    question:
      "The sum of the ages of three friends is 60. If the age of the first friend is twice the age of the second friend, and the age of the second friend is three times the age of the third friend, how old are they?",
    options: ["10, 20, 30", "15, 20, 25", "20, 15, 25", "25, 15, 20"],
    correctAnswer: "15, 20, 25",
  },
  {
    numb: 7,
    question:
      "If the present age of a father is 40 years and his son is 10 years, in how many years will the father be twice as old as his son?",
    options: ["5 years", "8 years", "10 years", "15 years"],
    correctAnswer: "10 years",
  },
  {
    numb: 8,
    question:
      "A man is 5 years older than his wife. If the sum of their ages is 65, how old is his wife?",
    options: ["25 years", "30 years", "35 years", "40 years"],
    correctAnswer: "30 years",
  },
  {
    numb: 9,
    question:
      "The ratio of the present ages of two friends is 3:4. If the sum of their ages is 49, how old are they?",
    options: ["21, 28", "24, 25", "18, 24", "20, 29"],
    correctAnswer: "21, 28",
  },
  {
    numb: 10,
    question:
      "The ages of A, B, and C are in the ratio 3:4:5. If the sum of their ages is 72, how old is B?",
    options: ["12 years", "16 years", "20 years", "24 years"],
    correctAnswer: "16 years",
  },
];

const profitAndLossQuestions = [
  {
    numb: 1,
    question:
      "If the cost price of an item is $50 and it is sold for $80, what is the profit percentage?",
    options: ["30%", "40%", "50%", "60%"],
    correctAnswer: "60%",
  },
  {
    numb: 2,
    question:
      "If the cost price of an item is $120 and it is sold for $80, what is the loss percentage?",
    options: ["20%", "30%", "40%", "50%"],
    correctAnswer: "30%",
  },
  {
    numb: 3,
    question:
      "A man buys a shirt for $40 and sells it at a loss of 10%. What is the selling price of the shirt?",
    options: ["$36", "$38", "$40", "$42"],
    correctAnswer: "$36",
  },
  {
    numb: 4,
    question:
      "If the selling price of an item is $90 and the profit percentage is 20%, what is the cost price?",
    options: ["$70", "$72", "$75", "$80"],
    correctAnswer: "$75",
  },
  {
    numb: 5,
    question:
      "If the profit percentage on an item is 25% and the selling price is $125, what is the cost price?",
    options: ["$70", "$90", "$100", "$110"],
    correctAnswer: "$100",
  },
  {
    numb: 6,
    question:
      "A shopkeeper sold a mobile for $900 at a loss of 10%. What is the cost price of the mobile?",
    options: ["$1000", "$1010", "$1050", "$1100"],
    correctAnswer: "$1000",
  },
  {
    numb: 7,
    question:
      "If the cost price of an item is $60 and it is sold at a profit of 25%, what is the selling price?",
    options: ["$75", "$78", "$80", "$85"],
    correctAnswer: "$75",
  },
  {
    numb: 8,
    question:
      "If the loss percentage on an item is 15% and the selling price is $85, what is the cost price?",
    options: ["$80", "$105", "$100", "$110"],
    correctAnswer: "$100",
  },
  {
    numb: 9,
    question:
      "A bicycle is sold for $300 at a profit of 20%. What is the cost price of the bicycle?",
    options: ["$240", "$260", "$250", "$270"],
    correctAnswer: "$250",
  },
  {
    numb: 10,
    question:
      "If the cost price of an item is $80 and it is sold at a loss of 12.5%, what is the selling price?",
    options: ["$65", "$75", "$70", "$80"],
    correctAnswer: "$70",
  },
];
