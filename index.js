class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a,b) => a-b);
  }

  get(pos) {
    if (this.items.length < pos+1) throw new Error('OutOfBounds')
    return this.items[pos]
  }

  max() {
    if (this.items.length === 0) throw new Error('EmptySortedList')
    return Math.max(...this.items)
  }

  min() {
    if (this.items.length === 0) throw new Error('EmptySortedList')
    return Math.min(...this.items)
  }

  sum() {
    return this.items.length === 0 ? 0 : this.items.reduce((prev, curr) => prev+curr)
  }

  avg() {
    if (this.items.length === 0) throw new Error('EmptySortedList')
    return this.items.reduce((prev, curr) => prev+curr) / this.length
  }
}

module.exports = SortedList;
