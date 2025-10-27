const comicsController = {}

comicsController.getComics = (reqs, res) => {
    res.json({message: 'Lista de comics'});
}

module.exports = comicsController