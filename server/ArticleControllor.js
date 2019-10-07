const savedList = []
const comments = []


module.exports = {
    saveArticle(req, res) {
        // console.log(req.body)
        savedList.push(req.body)
        res.status(200).send(savedList)
        console.log(savedList)
    }, 

    // updateList(req, res) {
    //     res.status(200).send(savedList)
    // },

    addItem(req, res) {
        const {addOn} = req.body;
         savedList.push(addOn)
         console.log(savedList)
         res.status(200).send(savedList)
    },

    editItem(req, res){
        const {index, newItem} = req.body;
        savedList[index] = newItem;
        res.status(200).send(savedList)
    },

    deleteItem(req, res) {
        const {index} = req.params;
        savedList.splice(index, 1)
        res.status(200).send(savedList)
    },

    // deleteArticle(req, res) {
    //     const {index} = req.params;
    //     savedList.splice(index, 1)
    //     res.status(200).send(savedList)
    // }
}