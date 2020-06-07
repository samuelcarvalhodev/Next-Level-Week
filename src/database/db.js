//importar a dependencia do sqlite 3
const sqlite3 = require("sqlite3").verbose();
//iniciar o objeto de banco de datos 
const db = new sqlite3.Database("./src/database/database.db")

//Exportando para aplicações poderem usar
module.exports = db
//Utilizar o objeto de banco de dados para nossas operações
//db.serialize(() => {
    //Com comandos SQL eu vou:

    //1. criar uma tabela 
//db.run(`
        //CREATE TABLE IF NOT EXISTS places (
            //id INTEGER PRIMARY KEY AUTOINCREMENT,
            //image TEXT,
            //name TEXT,
            //address TEXT,
            //address2 TEXT,
          //  state TEXT,
        //    city TEXT,
      //      items TEXT
  //      );
    //`)



    //2. inserir dados na table
//const query = `
        //INSERT INTO places(
            //image,
           // name,
            //address,
          //  address2,
           // state,
            //city,
          //  items
        //)VALUES (?,?,?,?,?,?,?);` 
        //const values = [
           // "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1174&q=80", 
            //"Papersider",
            //"Guilerme Gemballa, Jardim América",
           // "N° 206",
            //"Santa Catarina",
            //"Rio do Sul",
          //  "Resíduos Eletrônicos, Lâmpadas"
        //]
        //Função Callback *Não se usa função anônima quando usamos o "this"*
       // function afterInsertData(err) {
            //if(err){
              //  return console.log(err);
            //}

           // console.log("cadastrado com sucesso");
         //   console.log(this);            
       // }

       // db.run(query, values, afterInsertData)



       
    //3. consultar dados da tabela
        // db.all(`SELECT * FROM places`, function(err, rows) {
        //if(err){
          //  return console.log(err);
        //}
        //console.log("Aqui estão os seus registros");
        //console.log(rows);  
    //})
    
    //4. deletar um dado da tabela

   // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
     //   if(err){
       //     return console.log(err);
        //}
        //console.log("Registro deletado com sucesso");
    //})


   
//})