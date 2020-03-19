const { Given, When, Then } = require("cucumber");
var { setDefaultTimeout } = require("cucumber");
const commande = require("../support/main/Commande");
const cms_commande = new commande();


Given(/^Jean est sur l'eboutique de l'oreal paris.$/, async function () {
  await cms_commande.closePopinLivraisonGratuite.call(this)
  return true;
});

When(/^il accède à la sous catégorie "([^"]*)" de la catégorie "([^"]*)"$/, async function (sub_category, category) {
  await cms_commande.gotoCategory.call(this, category)
  await cms_commande.closePopinLivraisonGratuite.call(this)
  await cms_commande.gotoSubCategory.call(this, sub_category)
});

Then(/^il ajoute au panier le produit "([^"]*)"$/, async function (product_name) {
  await cms_commande.closePopinLivraisonGratuite.call(this)
  await cms_commande.gotoProductPage.call(this, product_name)
  await cms_commande.closePopinLivraisonGratuite.call(this)
  await cms_commande.addToCartProduct.call(this)
});

Then(/^Il accède à son panier$/, async function () {
  await cms_commande.gotoCartPage.call(this)
});

Then(/^il valide sa commande en mode invité$/, async function () {
  await cms_commande.checkoutIncognito.call(this)
});
