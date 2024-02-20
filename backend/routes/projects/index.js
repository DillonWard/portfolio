const express = require("express");
const app = express();
const { Client } = require("pg");

const GetProjects = app.get("/", async (req, res) => {
  const client = new Client(process.env.CONNECTION_URL);

  try {
    await client.connect();
    const results = await client.query("SELECT * from project");
    await client.end();
    res.send(results.rows);
  } catch (error) {
    await client.end();
    console.log(error);
    res.status(405);
    res.send(String(error));
  }
});

const CreateProject = app.post("/", async (req, res) => {
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
    const text = `INSERT INTO project(${keys}) VALUES(${indexes}) RETURNING *`;
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

const UpdateProject = app.put("/:id", async (req, res) => {
  const client = new Client(process.env.CONNECTION_URL);
  let entries = [];
  for (const [key, value] of Object.entries(req.body)) {
    entries.push(
      `${key} = ${
        Array.isArray(value)
          ? `'{${value.join(", ")}}'`
          : `'${value.replace("'", "''")}'`
      }`
    );
  }
  entries = entries.join(", ");
  try {
    await client.connect();

    const text = `UPDATE project SET ${entries} WHERE id = ${req.params.id} RETURNING *`;
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

const DeleteProject = app.delete("/:id", async (req, res) => {
  const client = new Client(process.env.CONNECTION_URL);

  try {
    await client.connect();
    const results = await client.query(
      `DELETE from project WHERE id = ${req.params.id}`
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

module.exports = [GetProjects, CreateProject, UpdateProject, DeleteProject];
