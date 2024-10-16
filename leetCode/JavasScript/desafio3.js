/**
 * @param {string} val
 * @return {Object}
 */
function expect(val1) {
  return {
    toBe: function (val) {
      if (val === val1) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },

    notToBe: function (val) {
      if (val !== val1) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
console.log(expect(5).toBe(5));
