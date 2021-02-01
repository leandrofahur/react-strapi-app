"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async find(params, populate) {
    const products = await strapi.query("product").find(params, populate);
    return products.map((product) => product.title);
  },
};
