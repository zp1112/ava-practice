module.exports = {
  countNum: (str) => {
    const e = [];
    const a = [...new Set(str.replace(/\s+/g, '').split(''))].map((row) => {
      const reg = new RegExp(row, 'g');
      return {
        key: row,
        value: str.match(reg).length
      };
    });
    a.map(row => row.value === Math.max(...a.map(row => row.value)) ? e.push(row.key) : null);
    return e;
  },
}