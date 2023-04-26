let {expect} = require('chai');
let {Shop, Item} = require('./code.js');
describe("Gilded Rose", function() {
  describe("updates sellIn for", function() {
    const gildedRose = new Shop([
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Aged Brie", 0, 5),
    ]);
    const items = gildedRose.updateQuality();
    it("non-especial cases", function() {
      expect(items[0].sellIn).to.equal(9);
      expect(items[1].sellIn).to.equal(4);
    });
    it("Aged Brie", function() {
      expect(items[2].sellIn).to.equal(-1);
    });
  });
  describe("updates quality for ", function() {
    describe("non especial cases:", function() {
      const gildedRose = new Shop([
        new Item("+5 Dexterity Vest", 10, 20),
        new Item("Elixir of the Mongoose", 5, 7),
        new Item("Elixir of the Mongoose", 0, 7),
      ]);
      const items = gildedRose.updateQuality();
      it("Dexterity Vest quality", function() {
        expect(items[0].quality).to.equal(19);
      });
      it("Elixir quality before sell date", function() {
        expect(items[1].quality).to.equal(6);
      });
      it("Elixir quality after sell date", function() {
        expect(items[2].quality).to.equal(5);
      });
    });
    describe("Aged Brie:", function() {
      const gildedRose = new Shop([
        new Item("Aged Brie", 2, 0),
        new Item("Aged Brie", 0, 5),
      ]);
      const items = gildedRose.updateQuality();
      it("before sell date", function() {
        expect(items[0].quality).to.equal(1);
      });
      it("past sell date", function() {
        expect(items[1].quality).to.equal(7);
      });
    });
      describe("Sulfuras:", function() {
      const gildedRose = new Shop([
        new Item("Sulfuras, Hand of Ragnaros", 0, 80),
        new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      ]);
      const items = gildedRose.updateQuality();
      it("before sell date", function() {
        expect(items[0].quality).to.equal(80);
      });
      it("past sell date", function() {
        expect(items[1].quality).to.equal(80);
      });
    });
    describe("Backstage passes with", function() {
      const gildedRose = new Shop([
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
        new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49),
      ]);
      const items = gildedRose.updateQuality();
      it("15 days left", function() {
        expect(items[0].quality).to.equal(21);
      });
      it("10 days left", function() {
        expect(items[1].quality).to.equal(50);
      });
      it("5 days left", function() {
        expect(items[2].quality).to.equal(50);
      });
      it("0 days left", function() {
        expect(items[3].quality).to.equal(0);
      });
    });
    describe("Conjured Mana Cake, it degrades twice as fast", function() {
      const gildedRose = new Shop([
        new Item("Conjured Mana Cake", 3, 6),
        new Item("Conjured Mana Cake", 0, 10),
      ]);
      const items = gildedRose.updateQuality();
      it("before sell date", function() {
        expect(items[0].quality).to.equal(4);
      });
      it("after sell date", function() {
        expect(items[1].quality).to.equal(6);
      });
    });
  });
});
