const assert = require('chai').assert;
import myApp from '../src/app.js';

describe("Prime",()=>{
    describe("handle valid input", ()=>{
        it("should return [2,3,5,7] for 10", ()=>{
            let result=myApp(10)
            assert.deepEqual(result,[2,3,5,7]);
        });

        it("should return [2,3,5,7,11,13,17,19] for 20", ()=>{
            let result=myApp(20)
            assert.deepEqual(result,[2,3,5,7,11,13,17,19]);
        });

        it("should return [2,3,5,7,11,13,17,19,23,29] for 30", ()=>{
            let result=myApp(30)
            assert.deepEqual(result,[2,3,5,7,11,13,17,19,23,29]);
        });

        it("should return [2,3,5,7,11,13,17,19,23,29,31,37] for 40", ()=>{
            let result=myApp(40)
            assert.deepEqual(result,[2,3,5,7,11,13,17,19,23,29,31,37]);
        });
        it("should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47] for 50", ()=>{
            let result=myApp(50)
            assert.deepEqual(result,[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]);
        });
    })
    describe("handle invalid input", ()=>{
        it("should return Invalid for 1", ()=>{
            let result=myApp(1)
            assert.deepEqual(result,'Invalid');
        });

        it("should return Invalid for -1", ()=>{
            let result=myApp(-1)
            assert.deepEqual(result,'Invalid');
        });

        it("should return Invalid for strings", ()=>{
            let result=myApp('demo')
            assert.deepEqual(result,'Invalid');
        });

        it("should return Invalid for 0", ()=>{
            let result=myApp(0)
            assert.deepEqual(result,'Invalid');
        });

        it("should return Invalid for 12.5", ()=>{
            let result=myApp(12.5)
            assert.deepEqual(result,'Invalid');
        });
    })
    
})


