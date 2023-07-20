import assert from "assert";
import findItemsOver20 from "../findItemsOver20.js"

describe('The finditemsOver function', function(){
    let fruitsEat = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    

    it('should return an array with items that have quantity bigger than 20' , function(){
        assert.deepEqual([{ name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 }],findItemsOver20(fruitsEat,20));

    });
  
});