let {expect} = require('chai');
let {Shop, Item} = require('./code.js');
describe("Gilded Rose", function() {
  describe(" some examples: ", function() {
    it("Dexterity Vest", function() {
      const gildedRose = new Shop([
        new Item("+5 Dexterity Vest", 10, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(9);
      expect(items[0].quality).to.equal(19);
    });
    it("Aged Brie", function() {
      const gildedRose = new Shop([
        new Item("Aged Brie", 2, 0),
        new Item("Aged Brie", 0, 5),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(1);
      expect(items[0].quality).to.equal(1);
      expect(items[1].sellIn).to.equal(-1);
      expect(items[1].quality).to.equal(7);
    });
    it("Elixir", function() {
      const gildedRose = new Shop([
        new Item("Elixir of the Mongoose", 5, 7),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(4);
      expect(items[0].quality).to.equal(6);
    });
    it("Sulfuras", function() {
      const gildedRose = new Shop([
        new Item("Sulfuras, Hand of Ragnaros", 0, 80),
        new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(0);
      expect(items[0].quality).to.equal(80);
      expect(items[1].sellIn).to.equal(-1);
      expect(items[1].quality).to.equal(80);
    });
    it("Backstage passes", function() {
      const gildedRose = new Shop([
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
        new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(14);
      expect(items[0].quality).to.equal(21);
      expect(items[1].sellIn).to.equal(9);
      expect(items[1].quality).to.equal(50);
      expect(items[2].sellIn).to.equal(4);
      expect(items[2].quality).to.equal(50);
      expect(items[3].sellIn).to.equal(-1);
      expect(items[3].quality).to.equal(0);
    });
  });
});
