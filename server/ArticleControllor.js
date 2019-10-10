const savedList = []
const comment = []
let id = 1


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
        const {title, comment} = req.body;

        const index = savedList.findIndex((element) => {
            return element.title === title
        })

        if(!savedList[index].comment) {
            savedList[index].comment = []
        }

        const newComment = {id: id, comment: comment}
        id++
         savedList[index].comment.push(newComment)
         res.status(200).send(savedList)
    },

    editItem(req, res){
        const {title, newItem} = req.body;
        const {id} = req.params
        const index = savedList.findIndex((element) => {
            return element.title === title
        }) 
        const commentIndex = savedList[index].comment.findIndex(element => {
            return element.id === +id
        })
        savedList[index].comment[commentIndex].comment = newItem;
        res.status(200).send(savedList)
    },

    deleteItem(req, res) {
        const {title, id} = req.params;
        const index = savedList.findIndex(element => {
            return element.title === title
        })

        const commentIndex = savedList[index].comment.findIndex(element => {
            return element.id === +id
        })
        savedList[index].comment.splice(commentIndex, 1)
        console.log(savedList)
        res.status(200).send(savedList)
    },

 
}