const UOMType = {
  HECTOLITRE: 100,
  Litre: 1,
  KILO: 1,
  GRAMMES: 0.001,
  DOZEN: 12,
  THOUSAND: 1000,
  Unit: 1
};

const itemUomType = document.querySelector('[data-doctype="UOM"]');
const itemQuantityElement = document.querySelector(
  '[data-fieldname="quantity"]'
);
const itemQuantity = Number(
  itemQuantityElement.querySelector('.control-value').textContent
);
const amountOfItemInLitres = UOMType[itemUomType.dataset.name];

const totalLitresProducedInBom = itemQuantity * amountOfItemInLitres;

const recipeItemsList = document
  .querySelector('[data-fieldname="items"]')
  .querySelector('.rows')
  .querySelectorAll('.grid-row');

let controlSum = 0;

recipeItemsList.forEach((item) => {
  const recipeItemUomType = item.querySelector('[data-doctype="UOM"]');
  const recipeItemQuantity = item.querySelector('[data-fieldname="qty"]');

  console.log(recipeItemUomType);
  console.log(recipeItemQuantity);

  controlSum +=
    Number(recipeItemQuantity.textContent) *
    UOMType[recipeItemUomType.dataset.name];
});

console.log(totalLitresProducedInBom);
console.log(controlSum);
