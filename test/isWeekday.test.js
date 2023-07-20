import assert from 'assert'
import isWeekday from '../isWeekday.js'

describe('Test my isWeekday function' , function(){
    it('should return "true" if the day is a weekday and false if weekend' , function(){
        assert.equal(true,isWeekday("Monday"));
    });
    it('should return "true"' , function(){
        assert.equal(true,isWeekday("Friday"));
    });
    it('should return "false" ' , function(){
        assert.equal(false,isWeekday("Saturday"));
    });
    it('should return "false" ' , function(){
        assert.equal(false,isWeekday("Sunday"));
    });

});