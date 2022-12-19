function makeChange(n) {
  // Initialize a set to store the ways of representing n cents
  const set = new Set();

  // Define the denominations in an array
  const denominations = [25, 10, 5, 1];

  // Define a recursive function to calculate the ways of representing n cents
  function calcWays(remaining, denoms, way) {
    // If there are no more denominations to use, add the current way to the set if it represents the desired amount
    if (denoms.length === 0) {
      if (remaining === 0) {
        set.add(way);
      }
      return;
    }

    // Get the current denomination
    const denom = denoms[0];

    // Calculate the maximum number of times the current denomination can be used to represent the remaining amount
    const maxCount = Math.floor(remaining / denom);

    // Try using the current denomination from 0 to the maximum number of times
    for (let i = 0; i <= maxCount; i++) {
      // Calculate the new remaining amount
      const newRemaining = remaining - (i * denom);
      // Calculate the new way by adding the current denomination to the current way
      const newWay = [...way, i];
      // Recursively call the function with the new remaining amount and remaining denominations
      calcWays(newRemaining, denoms.slice(1), newWay);
    }
  }

  // Initialize the current way as an empty array and start the recursive function
  calcWays(n, denominations, []);

  // Return the set of ways
  return set;
}
