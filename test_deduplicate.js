const {deduplicate} = require('./deduplicate'); 
const assert = require('assert');

describe('Test of the deduplicate function', function(){
    const wordList = ['not', 'a', 'pheasant', 'plucker', 'but', 'a', 'pheasant', "plucker's", 'son'];
    const test_list = [ 'a', 'but', 'not', 'pheasant', 'plucker', "plucker's", 'son' ]
    const empty = [];
    it('Test 1 with a duplicated list', function(){
        let result = deduplicate(wordList);
        assert.deepEqual(result, test_list, "the elements of the list are not the same");
    })
    it('Test 2 edge case empty list', function(){
        let result = deduplicate(empty);
        assert.deepEqual(result,empty, "the list is not empty");
    })
    it('Test 3 single element list', function(){
        let result = deduplicate(["a"]);
        assert.deepEqual(result, ["a"], "the list should only contain 'a'");
    })
    it('Test 4 one unique element in a list of six words', function(){
        let result = deduplicate(["a","a","a","a","a","a"]);
        assert.deepEqual(result, ["a"], "the list should only contain one 'a'");
    })
});