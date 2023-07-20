import assert from "assert";
import countAllFromTown from "../JS/countAllFromTown.js";

describe('The countAllFromTown function', function(){

    it('should return 1 as provided location indicator (CY) matches the registration ', function(){
        assert.equal('1', countAllFromTown('CY1586', "CY"));
    });
    it('should return 3. Three registration numbers start with GP', function(){
        assert.equal('3', countAllFromTown('GP255, GP1827, CA1754,GP458M, EY1478',"GP"));
    });
    it('should return nothing. Registration number CJ225 does not match location indicator EY', function(){
        assert.equal('', countAllFromTown('CJ255', "EY"));
    });
});