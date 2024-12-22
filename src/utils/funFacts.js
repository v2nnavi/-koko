export const funFacts = [
  "KOKO sleeps 20 hours a day, just like a real koala! 🐨",
  "The first KOKO holder dreamt of lambos and woke up with a eucalyptus leaf",
  "Legend says KOKO only trades while sleepwalking 😴",
  "KOKO's favorite trading position is upside down in a tree",
  "Every time KOKO wakes up, the market pumps! 📈",
];

export const getRandomFunFact = () => {
  return funFacts[Math.floor(Math.random() * funFacts.length)];
};