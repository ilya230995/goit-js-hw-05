class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    return this.items.push(item);
  }
  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    return this.items;
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items);

storage.addItem("Дроид");
console.table(storage.items);

storage.removeItem("Пролонгер");
console.table(storage.items);
