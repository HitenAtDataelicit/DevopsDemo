const router = require("express").Router()
const Item = require("../models/Item")

router.get("/health", (req, res) => {
  res.json({ status: "API working" })
})

router.get("/items", async (req, res) => {
  const items = await Item.find()
  res.json(items)
})

router.post("/items", async (req, res) => {
  const item = new Item({ name: req.body.name })
  await item.save()
  res.json(item)
})

module.exports = router