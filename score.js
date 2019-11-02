const bf = require('bigfive');
const opts = {   // These are the default options
 'encoding': 'binary',
 'locale': 'US',
 'logs': 3,
 'max': Number.POSITIVE_INFINITY,
 'min': Number.NEGATIVE_INFINITY,
 'nGrams': [2,3],
 'output': 'lex',
 'places': 9,
 'sortBy': 'lex',
 'wcGrams': 'false',
};

// const str = 'I have trouble making friends.';
// console.log(bf(str, opts));

module.exports = {
    getScore: function(sentence){
        return bf(sentence, opts);
    },
}