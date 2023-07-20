import assert from 'assert'
import yearsAgo from '../yearsAgo.js'

describe('Test my yearsAgo function' , function(){
    it('should return number of years between number provided and current year' , function(){
        assert.equal(3,yearsAgo("2020"));
    });
    it('should return total number 23' , function(){
        assert.equal(23,yearsAgo("2000"));
    });
    it('should return 10' , function(){
        assert.equal(10,yearsAgo("2013"));
    });
 

});