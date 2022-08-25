const router = require("express").Router();
//  const stripe = require("stripe")();

const Stripe = require('stripe');
const stripe = Stripe('sk_test_51KtL1xKQ1tjcGbkeVyQfylLkrDiyyyuQ8fWTG8016ora6E8D81Onng236deGyw2wXXbfi9VQQqVClQ1FNIIvaOWN00RBiOAo2M');
router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;