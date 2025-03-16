import connection from "../data/db";

function index(req, res) {
  const sql = "SELECT * FROM movies";
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
}

function show(req, res) {
    const id = req.params.id;
    const movieSql = "SELECT * FROM movies WHERE id = ?";
    connection.query(movieSql, [id], (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: "Film non trovato" });
        return;
      }
      res.json(results[0]);
    });
  
}

function destroy(req, res) {
    const id = req.params.id;
    const sql = "DELETE FROM movies WHERE id = ?"; 
    connection.query(sql, [id], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: "Film non trovato" });
            return;
        }
        res.json({ message: "Film eliminato con successo" });
        res.sendStatus(204);
        });

        
  
}   

export { index, show, destroy };