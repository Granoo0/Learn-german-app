// srsStore.js
// Basic Spaced Repetition implementation utilizing local storage

const SRS_KEY = 'granoo_srs';

// SRS intervals in hours
const SRS_INTERVALS = [
  0,        // Level 0: Right now (needs review immediately)
  12,       // Level 1: 12 hours
  24,       // Level 2: 1 day
  24 * 3,   // Level 3: 3 days
  24 * 7,   // Level 4: 1 week
  24 * 14,  // Level 5: 2 weeks
  24 * 30   // Level 6: 1 month
];

const getSrsData = () => {
  try {
    const data = localStorage.getItem(SRS_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
};

const saveSrsData = (data) => {
  try {
    localStorage.setItem(SRS_KEY, JSON.stringify(data));
  } catch {
    console.error("Failed to save SRS data to localStorage");
  }
};

/**
 * Record an answer for a specific German word.
 * @param {string} germanWord - the target vocabulary word
 * @param {boolean} isCorrect - whether the user got it right or wrong
 */
export const recordSrsAnswer = (germanWord, isCorrect) => {
  const data = getSrsData();
  const wordData = data[germanWord] || { level: 0, nextReview: Date.now() };

  let newLevel = wordData.level;
  
  if (isCorrect) {
    // Increase level, maxing out at the highest interval
    newLevel = Math.min(newLevel + 1, SRS_INTERVALS.length - 1);
  } else {
    // Reset back to level 0 (or drop 1 level, but Anki style usually drops harsh or to 0)
    newLevel = 0;
  }

  // Calculate next review time
  const hoursToAdd = SRS_INTERVALS[newLevel];
  const nextReviewTime = Date.now() + (hoursToAdd * 60 * 60 * 1000);

  data[germanWord] = {
    level: newLevel,
    nextReview: nextReviewTime,
    lastReviewed: Date.now()
  };

  saveSrsData(data);
};

/**
 * Filters and sorts a vocabulary list to prioritize words due for review.
 * @param {Array} vocabList - Array of vocabulary objects
 * @param {number} maxDue - Max number of due words to return at the top
 * @returns {Array} - The sorted array where due words are first, followed by unseen/random words.
 */
export const getSrsQueue = (vocabList, maxDue = 10) => {
  const data = getSrsData();
  const now = Date.now();

  const due = [];
  const unseenOrFuture = [];

  vocabList.forEach(word => {
    const wordRecord = data[word.german];
    if (wordRecord) {
      if (wordRecord.nextReview <= now) {
        due.push({ ...word, srsData: wordRecord });
      } else {
        unseenOrFuture.push(word);
      }
    } else {
      // Never seen before, prioritize randomly or at back
      unseenOrFuture.push(word);
    }
  });

  // Sort due words so the most overdue come first
  due.sort((a, b) => a.srsData.nextReview - b.srsData.nextReview);

  // Shuffle unseen words so it is varied
  unseenOrFuture.sort(() => 0.5 - Math.random());

  // Merge: Take up to maxDue due words, then fill the rest with unseen words.
  // When practicing, we usually want at least SOME new cards mixed with review cards.
  const queue = [...due, ...unseenOrFuture];
  
  return queue;
};
