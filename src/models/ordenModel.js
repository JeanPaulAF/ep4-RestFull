const database = require('../config/database');

class Orden {
    constructor(orden) {
        this.idcliente = orden.idcliente;
        this.estado = orden.estado;
    }

    static registrar(nuevaOrden, result) {
        const sql = 'INSERT INTO ordenes SET ?';
        database.query(sql, nuevaOrden, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, { id: res.insertId, ...nuevaOrden });
        });
    }

    static obtenerPorId(id, result) {
        const sql = 'SELECT * FROM ordenes WHERE idorden = ?';
        database.query(sql, [id], (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res[0]);
        });
    }


    static actualizar(id, orden, result) {
        const sql = 'UPDATE ordenes SET estado = ? WHERE idorden = ?';
        database.query(sql, [orden.estado, id], (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id: id, ...orden });
        });
    }

    static eliminar(id, result) {
        const sql = 'DELETE FROM ordenes WHERE idorden = ?';
        database.query(sql, [id], (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, res);
        });
    }
}

module.exports = Orden;
