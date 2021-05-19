const { pool } = require("../db");

class BaseModel {
  constructor({ name }) {
    this.name = name;
    this.pool = pool;
  }

  findAll() {
    return new Promise((resolve, reject) => {
      this.pool.query(`SELECT * FROM ${this.name}`, (err, rows) => {
        if (err) {
          return reject(err);
        }
        return resolve(rows);
      });
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
}

module.exports = { BaseModel };
