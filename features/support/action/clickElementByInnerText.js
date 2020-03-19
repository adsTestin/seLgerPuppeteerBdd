/**
 * Clicks on an item. 
 * @param {String} selector CSS selector of the item to click.
 * @param {String} waitForSelector If not null, the selector that should exist after the click.
 * @param {String} Value Needed value to be included in the InnerText property for Selector.
 * test should allow to complete.
 */
module.exports = async function (selector, waitForSelector, Value) {
    // Wait until the given selector exists
    await this.page.waitForSelector(selector);

    await this.page.$$eval(selector,
        (nodes, Value) => {
            nodes.map(node => {
                if (node.innerText.trim() == Value) { node.click() }

            })
        }, Value)

    // await this.page.$eval(selector,
    //     (node, Value) => {if (node.innerText.includes(Value)) { node.click() }

    //         }, Value)


};