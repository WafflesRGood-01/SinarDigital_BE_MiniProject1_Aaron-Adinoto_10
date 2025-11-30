import { formatConfession } from "../utils/helpers.js";
let confessions = [];
let idCounter = 1;

export const getAllConfessions = (req, res) => {
  res.json(confessions);
};

export const addConfession = (req, res) => {
  const { name, confession } = req.body;

  if (!name || !confession) {
    return res.status(400).json({ error: "Do not be afraid, your confession shall not be shared..." });
  }

  const sin = formatConfession(name, confession);

  const newConfession = {
    id: idCounter++,
    name,
    confession,
    sin
  };

  confessions.push(newConfession);

  res.status(201).json(newConfession);
};

export const updateConfession = (req, res) => {
  const id = Number(req.params.id);
  const { name, confession } = req.body;
  const idx = confessions.findIndex(c => c.id === id);

  if (idx === -1) return res.status(404).json({ error: "Confession not found" });
  if (name !== undefined) confessions[idx].name = name;
  if (confession !== undefined) confessions[idx].confession = confession;
  res.json(confessions[idx]);
};

export const deleteConfession = (req, res) => {
  const id = Number(req.params.id);
  const idx = confessions.findIndex(c => c.id === id);

  if (idx === -1) return res.status(404).json({ error: "Confession not found" });
  confessions.splice(idx, 1);
  res.json({ message: "Your confession shall be forgiven and forgotten." });
};