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

//Callbacks

const getPosts=(callback)=> { 
//funcao para pegar posts e retornar com callback

    //usou timeout para simular uma operacao assincrona
    setTimeout(()=> {
        const posts = [
            {id: 1, title: 'Post 1', body: 'Este e post 1'},
            {id: 2, title: 'Post 2', body: 'Este e post 2'}
        ]

        callback(posts) // callback retorna os posts
    },2000)
   
}

const getComments = (postId,callback) => {
    //funcao pega comentarios e retorna com callback
    setTimeout(()=>{
        const comments = [
            {text: 'Comentario 1'},
            {text: 'Comentario 2'}
        ]

        callback(comments)
    },1000)
}


//1- executa o getPosts e o seu retorno sera o posts
getPosts((posts)=>{ //em seguida podemos fazer  oq quiser com o retorno, no caso, os posts
    console.log(posts)

    // callback hell (inferno) PROBLEMA!
    //callback dentro de callback
    getComments(posts[0].id, (comments)=>{
        console.log(comments)
    })
})