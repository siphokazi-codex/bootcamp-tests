
describe('The isFromBellville function', function(){

    it('should check if registration number from bellville', function(){
        assert.equal(true, isFromBellville('CY'));
    });
    it('should check if registration number from bellville', function(){
        assert.equal(false, isFromBellville('CD'));
    });
});
