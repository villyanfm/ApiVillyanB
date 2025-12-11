module.exports = (app) => {
  app.get('/noticias', async (req, res) => {
    await app.DBClient.connect();
    const noticias = await app.DBClient.db('portalnoticias')
      .collection('noticias').find().toArray();
    console.log(noticias);
    res.json(noticias)
  })
}