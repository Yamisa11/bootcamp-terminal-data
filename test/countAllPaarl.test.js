import assert from "assert";
import countAllPaarl from "../JS/countAllPaarl.js"

describe('The countAllPaarl function', function(){

    it('should return total number of registration/s from Paarl in the list. returns 1 ', function(){
        assert.equal('1', countAllPaarl('CJ1586'));
    });
    it('should return 3. Three registration numbers start with CJ', function(){
        assert.equal('3', countAllPaarl('CJ255, CJ1827, CA1754,GP458M, CJ1478'));
    });
    it('should return nothing. Registration number EC225 is not from Paarl', function(){
        assert.equal('', countAllPaarl('EC255'));
    });
});