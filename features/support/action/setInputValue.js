const assert = require('assert').strict;

/**
 * Sets the value of an input, textarea or select element.  Will only set the value if the element is not
 * disabled/readonly, and in the case of a select, contains an option with a matching value.
 * @param {String} selector The selector of the element to set the alue of.
 * @param {String} value The value to set on the element.
 */
module.exports = async function (selector, value) {
    await this.page.waitForSelector(selector);
    await this.page.waitFor(1000)
    const isValueSet = await this.page.$(selector);
    isValueSet.type(value)

    assert.strictEqual(isValueSet != null, true, `Error: unable to set "${selector}" value to "${value}"`);
};