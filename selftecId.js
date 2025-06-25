/**
 * SelftecId - Simple Unique ID Generator
 * Author: Selftec
 * License: Custom
 */

const SelftecId = {
    /**
     * Generates a unique alphanumeric ID with optional prefix.
     * @param {string} [prefix=''] - Optional string to prefix the ID.
     * @returns {string} - The generated unique ID.
     */
    generate(prefix = '') {
        const randomPart = Math.random().toString(36).substr(2, 9);
        const timestamp = Date.now().toString(36);
        return `${prefix}${timestamp}${randomPart}`;
    }
};

// Example usage:
// const id = SelftecId.generate('user_');
// console.log(id); // Example output: user_lh4q9hzp8f7t23m

module.exports = SelftecId;
