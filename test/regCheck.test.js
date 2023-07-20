import assert from "assert"
import regCheck from "../JS/regCheck.js"

describe('Test my regCheck function' , function(){
    it('should return "true" if the reg.no.(first param) ends with locationIndicator (second param) and false if not' , function(){
        assert.equal(true,regCheck("1258 CA","CA"));
    });
    it('should return "true" ' , function(){
        assert.equal(true,regCheck("MP87 CA","CA"));
    });
    it('should return "false" ' , function(){
        assert.equal(false,regCheck("1256 MP","CA"));
    });
    it('should return "false" ' , function(){
        assert.equal(false,regCheck("MP125 L","MP"));
    });

});