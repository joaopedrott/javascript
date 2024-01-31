import { Link } from 'react-router-dom';
import bannerImage from '../../assets/banner.png';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles'

const Feed = () => {
    return (<>
    <Header autenticado={true}/>
    <Container>
        <Column flex={3}>
        <Title>Feed</Title>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </Column>
        <Column flex={1}>
            <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
        <UserInfo percentual={80} nome="Joao Pedro" image="https://avatars.githubusercontent.com/u/13596247?v=4"/>
        <UserInfo percentual={20} nome="Joao Pedro" image="https://avatars.githubusercontent.com/u/13596247?v=4"/>
        <UserInfo percentual={44} nome="Joao Pedro" image="https://avatars.githubusercontent.com/u/13596247?v=4"/>
        <UserInfo percentual={27} nome="Joao Pedro" image="https://avatars.githubusercontent.com/u/13596247?v=4"/>
        <UserInfo percentual={45} nome="Joao Pedro" image="https://avatars.githubusercontent.com/u/13596247?v=4"/>
        </Column>
        
    </Container>

    </>)
}

export { Feed }