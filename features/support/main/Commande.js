
const cms_element = require("../data/app.selectors");
const clickElement = require("../action/clickElement");
const clickElementByInnerText = require("../action/clickElementByInnerText")

module.exports = class passerCommande {


    async closePopinLivraisonGratuite() {
        await this.page.waitForSelector(cms_element.popup_promotion.selector);
        await clickElement.call(this, cms_element.popup_promotion.close_btn)
    }

    async gotoCategory(category) {
        await this.page.waitForSelector(cms_element.category.selector);
        await clickElementByInnerText.call(this, cms_element.category.selector, null, category.toUpperCase())
        await this.page.waitFor(3000)

    }

    async gotoSubCategory(sub_category) {
        await this.page.waitForSelector(cms_element.category.sub_category_menu);
        await clickElementByInnerText.call(this, cms_element.category.sub_category_menu_items, null, sub_category)
        await this.page.waitFor(3000)
    }

    async gotoProductPage(product_name) {
        await this.page.waitForSelector(cms_element.product.selector);
        await clickElementByInnerText.call(this, cms_element.product.selector, null, product_name)
        await this.page.waitFor(3000)

    }
    async addToCartProduct() {
        await this.page.waitForSelector(cms_element.product.addToCart_zone);
        await clickElementByInnerText.call(this, cms_element.product.addToCart_btn, null, cms_element.product.addToCart_name)
        await this.page.waitFor(1000)

    }

    async gotoCartPage() {

        await clickElement.call(this, cms_element.cart.selector)
        await this.page.waitForSelector(cms_element.cart.cart_btn);
        await clickElementByInnerText.call(this, cms_element.cart.cart_btn, null, cms_element.cart.cart_btn_name)
        await this.page.waitFor(1000)

    }

    async checkoutIncognito() {

        await this.page.waitForSelector(cms_element.checkout.selector);
        await clickElementByInnerText.call(this, cms_element.checkout.checkout_btn, null, cms_element.checkout.checkout_btn_name)
        await this.page.waitForSelector(cms_element.checkout.chekcout_incognito_btn);
        //  await clickElement.call(this, "button[name='dwfrm_login_unregistered']")
        await clickElementByInnerText.call(this, cms_element.checkout.chekcout_incognito_btn, null, cms_element.checkout.chekcout_incognito_btn_name)
        await this.page.waitForSelector(cms_element.checkout.checkout_onestepcheckout);
        await this.page.waitFor(10000)

    }

}