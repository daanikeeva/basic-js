const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arrayForChainMaker: [],
  getLength() {
    return this.arrayForChainMaker.length;
  },
  addLink( value ) {
    if (value === undefined) {
      this.arrayForChainMaker.push(`( )`);
      return this
    }
    else this.arrayForChainMaker.push(`( ${value + ''} )`)
    return this
  },
  removeLink( position ) {
    if (typeof position === 'number' && position >= 1 && position <= this.arrayForChainMaker.length) {
      this.arrayForChainMaker.splice(position-1, 1);
      return this
    }
    else {
      this.arrayForChainMaker = [];
      throw new Error("You can't remove incorrect link!");
    }
    // return this
    // remove line with error and write your code here
  },
  reverseChain() {
    this.arrayForChainMaker.reverse();
    return this
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let result = this.arrayForChainMaker.join('~~');
    this.arrayForChainMaker = [];
    return result
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).reverseChain().finishChain()) // => '( 1 )~~( 2 )~~( 3 )'
// console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain())// '( 3rd )~~( function () { } )');

module.exports = {
  chainMaker
};
