import assert from 'assert'
import fromWhere from '../fromWhere.js';

describe('Test my fromWhere function' , function(){
    it('should return name of town of the reg.no when called with the "regNo"' , function(){
        assert.equal("Bellville",fromWhere("CY201"));

    });
    it('should return Cape Town"' , function(){
        assert.equal("Cape Town",fromWhere("CA8795"));
    });
    it('should return Paarl' , function(){
        assert.equal("Paarl",fromWhere("CJ4568"));
    });
    it('should return Some other place!' , function(){
        assert.equal("Some other place!",fromWhere("GP4568"));
    });
});