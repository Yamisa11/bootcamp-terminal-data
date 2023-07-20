import assert from "assert";
import countRegNumber from "../JS/countRegNumber.js"

describe('The countRegNumber function', function(){

    it('should return total number of registration/s from Paarl in the list. returns 1 ', function(){
        assert.equal('1', countRegNumber('CJ1586'));
    });
    it('should return 5. There are 5 registration numbers in the list', function(){
        assert.equal('5', countRegNumber('CJ255, CJ1827, CA1754,GP458M, CJ1478'));
    });
    it('should return nothing. There are no registration numbers ', function(){
        assert.equal('1', countRegNumber(''));
    });
});