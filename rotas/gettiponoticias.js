module.exports = (app) => {
  app.get('/noticias/tiponoticia/:tipo', async (req, res) => {
    await app.DBClient.connect();
    const tipo = req.params.tipo
    const noticias = await app.DBClient.db('portalnoticias')
      .collection('noticias')
      .find({tiponoticia:tipo}).toArray();
    console.log(noticias);
    res.json(noticias)
  })
}