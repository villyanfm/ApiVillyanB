const { ObjectId } = require("mongodb")
module.exports = (app) => {
    app.delete('/delnoticas', async (req, res) => {
        try {
            const id = ObjectId.createFromHexString(req.body._id)
            const resultado = await app.DBClient.db('portalnoticias')
                .collection('noticias')
                .deleteOne({_id: id})
            res.status(200).send("Usuário apagado")
        } catch (error) {
            res.status(400).send("Erro ao apagar o usuário: " + error)
        }
    })
}