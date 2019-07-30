const swag = require("../models/swag");

module.exports = {
  search: (req, res) => {
    const { category } = req.query;
    if (!category) {
      return "category does not exist";
    } else {
      let category = swag.filter(swag => {
        return swag.category === category;
      });
      res.status(200).send(category);
    }
  }
};
