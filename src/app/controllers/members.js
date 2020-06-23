const { age, date } = require("../../lib/utils")

module.exports = {
    index(req, res){

        return res.render("members/index", { members: data.members })
},

    show(req, res){
        return
    },

    create(req, res){
        return res.render("members/create")
},

    post(req, res){
    
        const keys = Object.keys(req.body)

        for( key of keys){
            if (req.body[key] == "") {
                return res.send("Please, fill all fields")
            }
        }

        let { avatar_url, birth, services, gender, name} = req.body

        return
},

edit(req, res){
    return
},

put(req, res){
    return
},

delete(req, res){
    return
},
}