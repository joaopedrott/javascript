import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import { 
    CardContainer, 
    Content,
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo, 
    UserPicture 
} from './styles'

const Card =()=> {
  return (
    <CardContainer>
       <ImageBackground src="https://hermes.dio.me/articles/cover/2bdbb734-52cf-4352-919f-0b271912a40c.png"/>
       <Content>
        <UserInfo>
            <UserPicture src="https://avatars.githubusercontent.com/u/13596247?v=4"/>
            <div>
                <h4>Joao Pedro</h4>
                <p>Ha 8 minutos</p>
            </div>
        </UserInfo>
        <PostInfo>
            <h4>Projeto para curso de HTML e CSS</h4>
            <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
            <h4>#HTML #CSS #Javascript</h4>
            <p>
                <FiThumbsUp/> 10
            </p>
        </HasInfo>
       </Content>
        
    </CardContainer>

    
  )
}

export { Card }