const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClass } = require('./pages')

const nunjucks = require('nunjucks')
//configuração do nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//arquivos estaticos
server
.use(express.urlencoded({ extended: true }))
.use(express.static("public"))
//rotas
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClass)
.listen(5500)
