function shipCreator(length, hits, sunk) {
  return {
    length,
    hits,
    sunk,
    hit() {
      return (this.hits += 1);
    },
    isSunk() {
      return this.hits === this.length;
    }

  }
}

module.exports = { shipCreator };