import assert from "assert";
import greet from "../greet.js";

describe('The greet function', function(){

    it('should greet Yamisa correctly', function(){
        assert.equal('Hello, Yamisa', greet('Yamisa'));
    });
    it('should greet Majija correctly', function(){
    // this test will fail - can you fix it?
        assert.equal('Hello, Majija', greet('Majija'));
    });
});