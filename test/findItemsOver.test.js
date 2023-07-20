import assert from "assert";
import findItemsOver from "../findItemsOver.js"

describe('The finditemsOver function', function(){
    let fruitsEat = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    

    it('should return an array with items that have quantity bigger than 20' , function(){
        assert.deepEqual([{ name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 }],findItemsOver(fruitsEat,20));

    });
    it('should return an array with items that have quantity bigger than 10' , function(){
        assert.deepEqual([{ name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 }],findItemsOver(fruitsEat,10));

    });
    it('should return an array with items that have quantity bigger than 50' , function(){
        assert.deepEqual([],findItemsOver(fruitsEat,50));

    });
});