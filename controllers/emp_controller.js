const { query } = require("express");

//imporing connection
let connection = require("../config/connection");

//post
exports.CREATE_EMPLOYEE = async (req, res) => {
  let { name, email, password } = req.body;
  let query = "insert into user(name,email,password) values(?,?,?)";
  connection.query(query, [name, email, password], (err, result) => {
    if (!err) {
      return res.status(200).json({ message: "user created" });
    } else {
      return res.status(500).json(err);
    }
  });
};

//getAllEmp
exports.GET_ALL_EMP = async (req, res) => {
  let query = "select * from user";
  connection.query(query, (err, result) => {
    if (!err) {
      return res.status(200).json(result);
    } else {
      return res.status(500).json(err);
    }
  });
};

//update Emp
exports.UPDATE_EMP = async (req, res) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  let query = "update user set name=?,email=?,password=? where id=?";
  connection.query(query, [name, email, password, id], (err, result) => {
    if (!err) {
      if (result.affectedRows == 0) {
        return res.status(400).json({ message: "user id is not found" });
      } else {
        return res.status(200).json({ message: "user updated" });
      }
    } else {
      return res.status(400).json(err);
    }
  });
};

//delete Emp
exports.DELETE_EMP = async (req, res) => {
  const id = req.params.id;
  let query = "delete from user where id=?";
  connection.query(query, [id], (err, result) => {
    if (!err) {
      if (result.affectedRows == 0) {
        return res.status(400).json({ message: "user id is not found" });
      } else {
        return res.status(200).json({ message: "user deleted" });
      }
    } else {
      return res.status(400).json(err);
    }
  });
};

//get one Emp
exports.FIND_ONE_EMP = async (req, res) => {
  const id = req.params.id;
  let query = "select * from user where id=?";
  connection.query(query, [id], (err, result) => {
    if (!err) {
      return res.status(200).json(result);
    } else {
      return res.status(400).json(err);
    }
  });
};
