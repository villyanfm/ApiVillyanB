const { ObjectId } = require("mongodb");

module.exports = (app) => {
  app.get('/noticias/id/:id', async (req, res) => {
    const id = ObjectId.createFromHexString(req.params.id)
    await app.DBClient.connect();
    const noticias = await app.DBClient.db('portalnoticias')
      .collection('noticias').find({_id:id}).toArray();
    console.log(noticias);
    res.json(noticias)
  })
}