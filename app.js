function pesquisar() {



               // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

              //se campoPesquisa for uma string sem nada
              if (campoPesquisa == "")  {
                section.innerHTML = "RAWR!!! Nenhuma banda foi encontrada XD"
            return
              }

              campoPesquisa = campoPesquisa.toLowerCase();
  
              // Inicializa uma string vazia para armazenar os resultados da busca
    let buscas = "";
    let titulo = "";
    


              // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
              //se titulo includes campoPesquisa, então faça...
            if (titulo.includes(campoPesquisa)) {
             // Cria um novo elemento HTML para cada resultado da busca
             buscas += `
               <div class="item-resultado">
               <h2>${dado.titulo}</h2> <p class="descricao-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank">Escute O Artista</a> </div>
                       `;
             
         

        }  

       
    }

              if (!buscas) {
        buscas = "<p>RAWR!!! Nenhuma banda foi encontrada XD</p>"
    
            } 



  
            // Atribui a string com os resultados da busca ao conteúdo HTML da seção
    section.innerHTML = buscas;

  }

