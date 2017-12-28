const assert = require('assert');
const a = 1;
const b = 2;
const c = 1;

//assert(Object.is(a,b),'a == b'); //普通断言和console.assert相同用法; 1: 断言表达式 2:失败提示 ,测试value是否为真值; 等价于 assert.ok();

assert.ok(1);

//assert.ok(false);

//只测试可枚举的属性 assert.deepEqual;

const obj1 = {
    a: {
        b: 1
    }
};
const obj2 = {
    a: {
        b: 2
    }
};

const obj3 = {
    a: {
        b: '1'
    }
};
const obj4 = Object.create(obj3);
// assert.deepEqual(obj1, obj2);//深度比较断言失败;
assert.deepEqual(obj1, obj3); //使用==非全等来进行比较;
//assert.deepEqual(obj1,obj4,'原型链不会进行比较'); //深度比较不会对原型链和非枚举属性进行比较;

assert.deepEqual({a: 1}, {a: '1'}); //测试通过,因为使用==进行比较;

// assert.deepStrictEqual({a: 1}, {a: '1'}); //断言失败,因为使用===进行比较,1!=='1';

//deepStrictEqual
const date = new Date();
const object = {a: 1};
const fakeDate = {a: 1};

Object.setPrototypeOf(fakeDate, Date.prototype);

assert.deepEqual(object, fakeDate); //断言成功,不对原型进行比较;

//assert.deepStrictEqual(object, fakeDate); //断言失败,会对原型进行比较;

//assert.deepStrictEqual(Number(1), Number(2)); //会对包装对象里面的内容进行比较;

assert.deepStrictEqual(new String('foo'), Object('foo')); //会对包装对象里面的内容进行比较;

/*
assert.doesNotThrow(function () {
    throw new TypeError('我抛出了类型错误');
}, TypeError,'断言失败,抛出TypeError'); //不要抛出TypeError的错误,如果抛出了就说明断言失败了;*/

assert.equal(1, '1');//使用==进行比较,不会深入,只比较地址是否相同;

assert.equal(1, 1);

// assert.equal({a:1},{a:1}); //地址不同,断言失败;

//这个是所有断言失败会调用的底层方法;
// assert.fail('a', 'b'); //这个就是断言失败抛出的错误;

// assert.fail(1, 2, undefined, '>');

function show() {
    //assert.fail('a','b',undefined,'!==',show);
}

show();

//assert.ifError(value) 如果错误存在那么断言失败;
assert.ifError(0);

//assert.ifError(new Error('Error存在')); //如果err存在,那么抛出错误;  好像不是断言...

//assert.notDeepEqual({a: {b: 2}}, {a: {b: 2}}); //断言不深度相等, 相等则断言失败

assert.notDeepStrictEqual({a: {b: 2}}, {a: {b: '2'}});

// assert.notEqual(1,'1','1 != \'1\''); //断定!=不相等,相等则断言失败;

//assert.strictEqual(1,'1'); //全等比较

assert.notStrictEqual(1,'1');

assert.throws(function () {
   throw new Error('抛出错误');
},TypeError); //断定是否抛出某种类型的错误;