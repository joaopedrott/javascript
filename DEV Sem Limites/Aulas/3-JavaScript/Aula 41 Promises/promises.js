/*
* JavaScript Assoncrono
 Um codigo assincrono leva um tempo para ser executado, podendo resultar em um erro ou sucesso.

 Dois exemplos de principais de operacoes assincronas
 *Comunicacao com APIs (backend)
 *Consultas da banco de dados

 No java script temos 3 formas de lidarmos com assincronismos:
 *Callbacks
 *Promises
 *Async/Await

*/

//Promises

//funcao para pegar posts
const getPosts=()=> { 
    return new Promise ((resolve,reject)=> {
        const error = false

        if(error) {//em caso de erro
            return reject('Erro ao buscar posts')
        }
        //usou timeout para simular uma operacao assincrona
        setTimeout(()=> {
            const posts = [
                {id: 1, title: 'Post 1', body: 'Este e post 1'},
                {id: 2, title: 'Post 2', body: 'Este e post 2'}
            ]
    
            resolve(posts) // resolve retorna os posts
        },2000)
    })
    }
    
    //funcao pega comentarios e retorna com callback
    const getComments = (postId) => {
        return new Promise ((resolve, reject)=> {
            const error = false

            if(error) {//em caso de erro
                return reject('Erro ao buscar comentarios')
            }


            setTimeout(()=>{
                const comments = [
                    {text: 'Comentario 1'},
                    {text: 'Comentario 2'}
                ]
        
                resolve(comments)
            },1000)
        })
        
    }
    
    
  getPosts()
  .then(posts => getComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(error => console.log(error))