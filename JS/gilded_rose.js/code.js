class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    let special_cases = [
      'Sulfuras, Hand of Ragnaros',
      'Aged Brie',
      'Backstage passes to a TAFKAL80ETC concert',
      'Conjured Mana Cake',
    ]
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].name === 'Aged Brie' && this.items[i].quality < 50) {
        if (this.items[i].sellIn < 0) {
          this.items[i].quality = this.items[i].quality + 1;
        }
        this.items[i].quality = this.items[i].quality + 1;
      }
      if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].sellIn < 0) {
          this.items[i].quality = 0;
        }
        else {
          if (this.items[i].sellIn < 5) {
            this.items[i].quality = this.items[i].quality + 1;
          }
          if (this.items[i].sellIn < 10) {
            this.items[i].quality = this.items[i].quality + 1;
          }
          this.items[i].quality = this.items[i].quality + 1;
        }
        if (this.items[i].quality >= 50){
          this.items[i].quality = 50
        }
      }
      if (this.items[i].name === 'Conjured Mana Cake') {
        if (this.items[i].sellIn <= 0) {
          this.items[i].quality = this.items[i].quality - 2;
        }
        this.items[i].quality = this.items[i].quality - 2;
      }
      if (this.items[i].quality > 0 && !special_cases.includes(this.items[i].name)) {
        if (this.items[i].sellIn < 0) {
          this.items[i].quality = this.items[i].quality - 1;
        }
        this.items[i].quality = this.items[i].quality - 1;
      }
      if (this.items[i].quality < 0 ) this.items[i].quality = 0;
    }
    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
