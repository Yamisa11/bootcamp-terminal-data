import assert from 'assert'
import transportFee from '../transportFee.js'

describe('Test my transportFee function' , function(){
    it('should return "R20" when called with "Morning"' , function(){
        assert.equal("R20",transportFee("morning"));

    });
    it('should return "R10" when called with "Afternoon"' , function(){
        assert.equal("R10",transportFee("afternoon"));
    });
    it('should return "free" when called with "night"' , function(){
        assert.equal("free",transportFee("nightshift"));
    });

});