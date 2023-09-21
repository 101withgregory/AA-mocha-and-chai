const {expect} = require('chai');

const User = require('../class/user')

describe('User class',function(){
    it('should create class successfully',function(){
        let user = new User();
        expect(user).to.exist;
    })
    it('should set username upon creation',function(){
        let user = new User('Greg');
        expect(user.username).to.equal('Greg')
    })
})