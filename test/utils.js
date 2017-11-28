import chai from 'chai';
import utils from '../index.js';

const expect = chai.expect;
// countNum
describe('countNum:找出字符串中字符数最多的那个字符,不包括空格', () => {
  describe('找出字符串中字符数最多的那个字符', () => {
    it('should return l', () => {
      expect(utils.countNum('hello world')[0]).to.eq('l');
    })
  });
  describe('有相同个数的最多的字符串', () => {
    it('should return 3', () => {
      expect(utils.countNum('hh ee llo').length).to.eq(3);
    })
  });
});