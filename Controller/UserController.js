const userService = require('../Service/UserService')


module.exports = {
    async getUserList(req, res) {
        const { page, limit } = req.query
        console.log(page, limit);
        let data = await userService.getUserList(page, limit)

        res.send(data)
    },
    async updateUser(req, res) {

        let data = await userService.updateUser(req.params.id, req.body)

        res.send(data)
    },

    async deleteUser(req, res){

        let data = await userService.deleteUser(req.params.id)
      
        res.send(data)
      },

    async addUser(req, res) {

        userService.addUser(req.body)
    
      
      
        res.send({
          ok: 1
        })
      }

}


