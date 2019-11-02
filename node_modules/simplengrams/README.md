# SimleNGrams

The easiest way to get an array of n-grams from a string!

## Useage
```javascript
const sng = require('simplengrams');
const text = 'A string of text...';
const bigrams = sng(text, 2);
const trigrams = sng(text, 3);
console.log(bigrams, trigrams);
```

Errors return an empty two-dimensional array, i.e. [[]]

If the n-gram size (i.e. '2' or '3' in the example above) is greater than the length of the input string, an empty two-dimensional array is returned, i.e. [[]].

## Example
### Input
```javascript
const sng = require('simplengrams');
const text = 'In the beginning God created the heavens and the earth.';
const opts = {logs: 3};
const bigrams = sng(text, 2, opts);
console.log(bigrams);
```

### Bigram Output
```javascript
[
  [ 'In', 'the' ],
  [ 'the', 'beginning' ],
  [ 'beginning', 'God' ],
  [ 'God', 'created' ],
  [ 'created', 'the' ],
  [ 'the', 'heavens' ],
  [ 'heavens', 'and' ],
  [ 'and', 'the' ],
  [ 'the', 'earth' ],
  [ 'earth', '.' ]
]
```

## The Options Object
The options object is optional, the defaults are:
```
{
  logs: 3
}
```

### 'logs'
**Number - valid options: 0, 1, 2, 3 (default)**
Used to control console.log, console.warn, and console.error outputs.
* 0 = suppress all logs
* 1 = print errors only
* 2 = print errors and warnings
* 3 = print all console logs

## License
(C) 2017-18 [P. Hughes](https://www.phugh.es). All rights reserved.

Shared under the [Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported](http://creativecommons.org/licenses/by-nc-sa/3.0/) license.