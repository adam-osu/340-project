const { pool } = require("../db");

class BaseModel {
  constructor({ name }) {
    this.name = name;
    this.pool = pool;
  }

  findAll(order = "DESC") {
    return new Promise((resolve, reject) => {
      this.pool.query(
        `SELECT * FROM ${this.name} ORDER BY created_at ${order};`,
        (err, rows) => {
          if (err) {
            return reject(err);
          }
          return resolve(rows);
        }
      );
    });
  }

  findOne(id) {
    return new Promise((resolve, reject) => {
      this.pool.query(
        `SELECT * FROM ${this.name} WHERE id = ?;`,
        [id],
        (err, rows) => {
          if (err) {
            return reject(err);
          }
          return resolve(rows);
        }
      );
    });
  }

  create(data) {
    return new Promise((resolve, reject) => {
      this.pool.query(`INSERT INTO ${this.name} SET ?;`, data, (err, rows) => {
        if (err) {
          return reject(err);
        }
        return resolve(rows);
      });
    });
  }

  update({ id, updates }) {
    return new Promise((resolve, reject) => {
      this.pool.query(
        `UPDATE ${this.name} SET ? WHERE id = ?;`,
        [updates, id],
        (err, rows) => {
          if (err) {
            return reject(err);
          }
          return resolve(rows);
        }
      );
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      this.pool.query(
        `DELETE FROM ${this.name} WHERE id = ?;`,
        [id],
        (err, rows) => {
          if (err) {
            return reject(err);
          }
          return resolve(rows);
        }
      );
    });
  }
}

module.exports = { BaseModel };
