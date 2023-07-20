import assert from "assert"
import isFromBellville from "../isFromBelleville.js"

describe('Test my isFromBellvile function' , function(){
    it('should return "true" if the reg.no. is from Bellville (starts with CY)and false if not' , function(){
        assert.equal(true,isFromBellville("CY1258"));

     
    });
    it('should return "true" if the reg.no. is from Bellville (starts with CY)and false if not' , function(){
        assert.equal(false,isFromBellville("CA1258"));
    });
    it('should return "true" if the reg.no. is from Bellville (starts with CY)and false if not' , function(){
        assert.equal(false,isFromBellville("1235CY"));
    });

});