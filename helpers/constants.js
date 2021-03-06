exports.USER_AGENTS = [
  'Mozilla/5.0 [Macintosh; Intel Mac OS X 10_11_4] AppleWebKit/601.5.17 [KHTML, like Gecko] Version/9.1 Safari/601.5.17',
  'Mozilla/5.0 [Windows NT 10.0; WOW64] AppleWebKit/537.36 [KHTML, like Gecko] Chrome/50.0.2661.94 Safari/537.36',
  'Mozilla/5.0 [Macintosh; Intel Mac OS X 10_11_4] AppleWebKit/537.36 [KHTML, like Gecko] Chrome/50.0.2661.94 Safari/537.36',
  'Mozilla/5.0 [Windows NT 6.1; WOW64; rv:45.0] Gecko/20100101 Firefox/45.0'
];

exports.CONTINENTS = new Map([
  ["AF", "Africa"],
  ["AS", "Asia"],
  ["EU", "Europe"],
  ["NA", "North America"],
  ["OC", "Oceania"],
  ["SA", "South America"]
]);

exports.DEF_CONTINENTS = [...this.CONTINENTS.keys()];

exports.MIN_AGE = 13;
exports.MAX_AGE = 110;

exports.SEX = ['male', 'female'];

exports.COUNTRIES = [];

exports.KEYWORDS = [];