const textarea = document.querySelector('textarea')

const initialTextAreaHight = textarea.scrollHeight


function hendleChatOnKeyDown (event) { //funcao para enviar mensagem apertando enter
    if(event.key === 'Enter' && !event.shiftKey){
        event.preventDefault()
        handleChat()
    }
}

async function createBotReply (content) {//funcao do chat bot do chatGPT
    const API_URL = 'https://api.openai.com/v1/chat/completions'
    const API_KEY = 'API KEY CHATGPT'

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{
                role: 'user',
                content
            }]
        })
    })
    const data = await response.json()
    return data.choices[0].message.content
}

function createChatMessage (message, type){ //cria mensagem seja do usuario ou do bot
    const li = document.createElement('li') //cria a tag li
    li.classList.add('message', type) // adiciona class message e type (bot ou user) no li

    const p = document.createElement('p')//cria a tag p

    if(type === 'bot'){
        //se for do tipo bot sera adicionado a tag i com as classes dela dentro do li
        const i = document.createElement('i')
        i.classList.add('fa-solid', 'fa-robot', 'fa-xl')
        li.appendChild(i)
    }

    p.textContent = message//passa a mensagem para a tag p
    li.appendChild(p) // adiciona a tag p dentro da tag li

    return li
}

function handleCloseChat () {//funcao para fechar o chat apertando x para funcao mobile
    document.body.classList.remove('open-chat')
}

function handleTogglerChat () {//funcao para abrir e fechar o chat usando o botao
    document.body.classList.toggle('open-chat')
}

function handleAutoSize () {
    textarea.style.height = `${initialTextAreaHight}px`
    textarea.style.height = `${textarea.scrollHeight}px`
}

async function handleChat() {
//funcao trim retira os espacos
    const textareaValue = textarea.value.trim()//pega o valor digitado no textarea
    
    if(!textareaValue) {
        //textarea.focus()
        return
    }
    const main = document.querySelector('main')
    const messageHistory = document.querySelector('ul') // faz a ligacao da tag ul que esta no html com a variavel messageHistory

    const userMessage = createChatMessage(textareaValue, 'user') //cria a mensagem do usuario no formato li

    // bota o li da mensagem do usuario no historico de mensagens
    messageHistory.appendChild(userMessage)//adiciona dentro da tag ul a li (como filho) que retornou da funcao (mensagem do usuario)
    main.scrollTo(0, main.scrollHeight)

    textarea.value=''//apaga o campo de texto
    //textarea.focus()

    const botMessage = createChatMessage("Digitando...", 'bot') //cria a mensagem do bot no formato li

    setTimeout(()=>{
        messageHistory.appendChild(botMessage)//insere a mensagem do bot em li no historico de mensagens
        main.scrollTo(0, main.scrollHeight)
    },500)

    try {
        const botReply = await createBotReply(textareaValue) // passa a string digitada no chat para o ChatGPT e retorna a mensagem do ChatGPT

        botMessage.querySelector('p').textContent = botReply // bota a mensagem do ChatGPT no
        main.scrollTo(0, main.scrollHeight)
    } catch (error) {
        botMessage.querySelector('p').textContent='Ops! Algo deu errado. Por favor, tente novamente'
        botMessage.querySelector('p').classList.add('error')
    }
    
    
}


