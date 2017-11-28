import chai from 'chai';
import test from 'ava';
import utils from '../index.js';

const expect = chai.expect;
// countNum
test('countNum:找出字符串中字符数最多的那个字符,不包括空格', t => {
  t.is(utils.countNum('hello world')[0], 'l');
});