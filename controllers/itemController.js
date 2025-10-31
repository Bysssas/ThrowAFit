import Item from "../models/Item.js";

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createItem = async (req, res) => {
  try {
    const { name, category, imageUrl } = req.body;
    const newItem = new Item({ name, category, imageUrl });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
