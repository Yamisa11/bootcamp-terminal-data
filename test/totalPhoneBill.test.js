import assert from 'assert'
import totalPhoneBill from '../JS/totalPhoneBill.js'

describe('Test my totalPhoneBilltion' , function(){
    it('should return total amount of bill (sms&calls cost) in a given string after splitting it' , function(){
        assert.equal("R4.05",totalPhoneBill("sms, call, sms"));
    });
    it('should return total number R0.65' , function(){
        assert.equal("R0.65",totalPhoneBill("sms"));
    });
    it('should return R2.75' , function(){
        assert.equal("R2.75",totalPhoneBill("call"));
    });
    it('should return R10.20' , function(){
        assert.equal("R10.20",totalPhoneBill("sms, call, call, call, sms, sms"));
    });

});