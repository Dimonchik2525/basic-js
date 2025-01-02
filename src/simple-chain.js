const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  // Returns the length of the chain
  getLength() {
    return this.chain.length;
  },

  // Adds a link to the chain
  addLink(value) {
    if (value === undefined) {
      this.chain.push('(  )');  // If no value is provided, add an empty link '(  )'
    } else {
      this.chain.push(`( ${String(value)} )`);  // Convert the value to string and wrap in parentheses
    }
    return this;  // For chaining
  },

  // Removes a link at the given position
  removeLink(position) {
    // Check if position is an integer and within the bounds
    if (typeof position !== 'number' || !Number.isInteger(position) || position <= 0 || position > this.chain.length) {
      throw new Error("You can't remove incorrect link!");
    }

    // Remove the link at the specified position (1-indexed)
    this.chain.splice(position - 1, 1);
    return this;  // For chaining
  },

  // Reverses the order of the links in the chain
  reverseChain() {
    this.chain.reverse();  // Reverse the array
    return this;  // For chaining
  },

  // Finalizes the chain and returns it as a string
  finishChain() {
    // Join the links with '~~' and reset the chain
    const result = this.chain.join('~~');
    this.chain = [];  // Clear the chain for future operations
    return result;
  }
};

module.exports = {
  chainMaker
};
