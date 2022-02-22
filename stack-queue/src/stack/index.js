
let Stack = function () {
  this._author = 'subhamkumarchandrawansi@gmail.com';
  this._date = '21st feb, 2022';
  this._data = [];
}

Stack.prototype.length = 0;

Stack.prototype.push = function(data) {
  this._data.push(data);
  this.length += 1
}


Stack.prototype.pop = function() {
  this._data.pop();
  this.length -= 1
}

export default Stack
export { Stack }


