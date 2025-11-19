interface CountableSet<T> {
  add(item: T): void;
  remove(item: T): void;
  contains(item: T): boolean;
  getNumberOfCopies(item: T): number;
}

class CountedSet<T> implements CountableSet<T> {
  private items: Map<T, number>;

  constructor() {
    this.items = new Map<T, number>();
  }

  add(item: T): void {
    // Solution
    const count = this.items.get(item);
    if (count === undefined) {
      this.items.set(item, 1);
    } else {
      this.items.set(item, count + 1);
    }

    // Another solution
    // this.items.set(item, (this.items.get(item) || 0) + 1);
  }

  remove(item: T): void {
    // Solution
    const count = this.items.get(item);

    if (count === undefined || count === 0) {
      return;
    } else if (count > 0) {
      this.items.set(item, count - 1);
    }

    // Another Solution
    // if (this.items.has(item) && this.items.get(item)! > 0) {
    //   this.items.set(item, this.items.get(item)! - 1);
    // }
  }

  contains(item: T): boolean {
    const count = this.items.get(item);
    if (count !== undefined && count > 0) {
      return true;
    } else {
      return false;
    }
  }

  getNumberOfCopies(item: T): number {
    const count = this.items.get(item);

    if (count !== undefined) {
      return count;
    } else {
      return 0;
    }

    // return this.items.get(item) || 0;
  }
}

//// Test 1 - Should work
let countedSet = new CountedSet<string>();

countedSet.add("test");
countedSet.add("test");

console.log(countedSet);
console.log(countedSet.contains("test"));
console.log(countedSet.getNumberOfCopies("test"));

countedSet.remove("test");
countedSet.remove("test");
countedSet.remove("test");
console.log(countedSet.getNumberOfCopies("test"));
console.log(countedSet.contains("test"));

//// Test 2 - Should not work
// let codesCounterSet = new CountedSet<200 | 301 | 404 | 500>();

// codesCounterSet.add(404);
// codesCounterSet.add(200);

// console.log(codesCounterSet.contains(404));
// console.log(codesCounterSet.getNumberOfCopies(200));

// codesCounterSet.add(205); //TS Error
// codesCounterSet.getNumberOfCopies(350); //TS Error
