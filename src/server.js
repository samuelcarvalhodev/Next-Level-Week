const express = require("express");
const server = express();

//pegar o banco de dados
const db =  require("./database/db");

server.use(express.static("public"));


//habilita o uso do req.body
server.use(express.urlencoded({extended: true}))


const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


server.get("/", (req, res) => {
  return  res.render("index.html", {
      title: "Pontos"
  })
})

server.get("/create-point", (req, res) => {
  //console.log(req.query);
  
   return res.render("create-point.html")
   
})



server.post("/savepoint", (req,res) =>{
  console.log(req.body);

const query = `
        INSERT INTO places(
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        )VALUES (?,?,?,?,?,?,?);` 
        const values = [
          req.body.image,
          req.body.name,
          req.body.address,
          req.body.address2,
          req.body.state,
          req.body.city,
          req.body.items
        ]

        //Função Callback *Não se usa função anônima quando usamos o "this"*
        function afterInsertData(err) {
            if(err){

                 console.log(err);
                 return res.send("Erro no cadastro")
            }

            console.log("cadastrado com sucesso");
            console.log(this);            
            return res.render("create-point.html", {saved: true});
             }

        db.run(query, values, afterInsertData)

  
  
})

server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == ""){
      //pesquisa vazia
      return res.render("search-results.html", {total: 0})
    }






     db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if(err){
          return console.log(err);
        }
        
        const total = rows.length;
        console.log("Aqui estão os seus registros" + total);
        console.log(rows);  
       
        //mopstrar a pagina HTML com os dados do BD
        return res.render("search-results.html", {places: rows, total})
    })
    
 })

server.listen(3000);