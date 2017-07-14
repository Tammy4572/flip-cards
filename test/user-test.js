const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
    it('app should return successful', function(done){
        request(app)
        .post('/api/signup')
        .send({email: 'test@test', message: 'Success'})
        .expect(200)
        .expect(response => {
            assert.deepEqual(reqsponse.body, { email: 'test@test', password: 'test'})
        })
        .end(done);
    })
});