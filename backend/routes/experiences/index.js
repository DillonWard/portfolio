const express = require("express");
const app = express();
const { Client } = require("pg");

const GetExperiences = app.get("/", async (req, res) => {
  const client = new Client(process.env.CONNECTION_URL);

  try {
    await client.connect();
    const results = await client.query("SELECT * from experience");
    await client.end();
    res.send(results.rows);
  } catch (error) {
    await client.end();
    console.log(error);
    res.status(405);
    res.send(String(error));
  }
});

const CreateExperiences = app.post("/", async (req, res) => {
  const client = new Client(process.env.CONNECTION_URL);
  let keys = [];
  let values = [];

  for (const [key, value] of Object.entries(req.body)) {
    keys.push(key);
    values.push(value);
  }

  const indexes = keys.map((item, index) => `$${index + 1}`).join(", ");
  keys = keys.join(", ");
  try {
    await client.connect();
    const text = `INSERT INTO experience(${keys}) VALUES(${indexes}) RETURNING *`;
    const results = await client.query(text, values);
    await client.end();

    res.send(results.rows);
  } catch (error) {
    await client.end();
    console.log(error);
    res.status(405);
    res.send(String(error));
  }
});

const UpdateExperiences = app.put("/:id", async (req, res) => {
  const client = new Client(process.env.CONNECTION_URL);
  let entries = [];
  for (const [key, value] of Object.entries(req.body)) {
    entries.push(`${key} = ${`'${value.replace("'", "''")}'`}`);
  }
  entries = entries.join(", ");
  try {
    await client.connect();

    const text = `UPDATE experience SET ${entries} WHERE id = ${req.params.id} RETURNING *`;
    const results = await client.query(text);
    await client.end();
    res.send(results.rows);
  } catch (error) {
    await client.end();
    console.log(error);
    res.status(405);
    res.send(String(error));
  }
});

const DeleteExperiences = app.delete("/:id", async (req, res) => {
  const client = new Client(process.env.CONNECTION_URL);

  try {
    await client.connect();
    const results = await client.query(
      `DELETE from experience WHERE id = ${req.params.id}`
    );
    await client.end();
    res.send(results.rows);
  } catch (error) {
    await client.end();
    console.log(error);
    res.status(405);
    res.send(String(error));
  }
});

module.exports = [
  GetExperiences,
  CreateExperiences,
  UpdateExperiences,
  DeleteExperiences,
];
