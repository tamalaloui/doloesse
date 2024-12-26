let node = { key: 'value' };
let jsonString = (typeof node !== 'object') ? JSON.stringify(node) : 'Node is an object';
console.log(jsonString); // Output: '{"key":"value"}'
