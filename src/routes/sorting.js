let express = require('express')
let router = express.Router()

router.post('/sorting', (req, resp) => {
    if(!req.body) {
        return resp.status(400).send('Request body is missing')
    }
    let srcObj = req.body
    let level0 = srcObj['0']
    let level1 = srcObj['1']
    let level2 = srcObj['2']

    let level0Map = new Map()
    level0.forEach(st => {
        level0Map.set(st.id, st)
    })

    let level1Map = new Map()
    level1.forEach(nd => {
        level1Map.set(nd.id, nd)
        level0Map.get(nd['parent_id']).children.push(nd);
    })

    level2.forEach(rd => {
        level1Map.get(rd['parent_id']).children.push(rd);
    })

    return resp.status(200).send(level0);
})


module.exports = router