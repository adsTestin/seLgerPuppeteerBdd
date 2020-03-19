const cms_elements = {
  popup_promotion: {
    location: "LandingPage",
    selector: ".popup-promotion__close-btn",
    close_btn: ".popup-promotion .close-button",
    take_promotion_btn: ".newsletter-promotion__form a.button"
  },
  cart: {
    location: "CartPage",
    selector: "div.icon-cart",
    cart_btn: "a[href='/cart/'",
    cart_btn_name: "Finaliser ma commande"
  },
  category: {
    location: "HomePage",
    selector: "nav.main-nav a[href='/homme']",
    category_selector: ".close-button",
    sub_category_menu: ".filter.filter--menu",
    sub_category_menu_items: "a.filter__title",
  },

  product: {
    location: "ProductPage",
    selector: ".df-name",
    addToCart_btn: ".btn-text",
    addToCart_name: "Ajouter au panier",
    addToCart_zone: ".product-actions"

  },

  checkout: {
    location: "chekcout",
    selector: "button[value='Checkout']",
    checkout_btn: "button[value='Checkout']",
    checkout_btn_name: "Valider ma commande",
    chekcout_incognito_btn: "button[name='dwfrm_login_unregistered']",
    chekcout_incognito_btn_name: "Commander",
    checkout_onestepcheckout: ".checkout_step_onestepcheckout"

  }

};

module.exports = cms_elements;
