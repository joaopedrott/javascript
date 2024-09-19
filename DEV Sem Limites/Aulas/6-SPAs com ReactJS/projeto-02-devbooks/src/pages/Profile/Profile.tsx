import { useState } from "react";
import { MainLayout } from "../../Layouts/MainLayout";
import { Container, ProfileMenu, ProfileMenuItem } from "./Profile.styles";

type ProfileTab = 'personal-data' | 'security'

export function Profile () {
    const [ profileTab, setProfileTab ] = useState<ProfileTab>('personal-data')

    const handleChangeProfileTab = (tab: ProfileTab) => setProfileTab(tab)

    return(
         <MainLayout>
            <h1>Meu perfil</h1>

            <Container>
                <ProfileMenu>
                    <ul>
                        <ProfileMenuItem 
                        isActive={profileTab === 'personal-data'} 
                        onClick={() => handleChangeProfileTab('personal-data')}>
                            Dados Pessoais
                        </ProfileMenuItem>
                        <ProfileMenuItem 
                        isActive={profileTab === 'security'}
                        onClick={() => handleChangeProfileTab('security')}
                        >
                            Seguranca
                        </ProfileMenuItem>
                    </ul>
                </ProfileMenu>

            {profileTab ==='personal-data' && <h2>Dados Pessoais</h2>}
            {profileTab ==='security' && <h2>Dados Seguranca</h2>}
            </Container>
         </MainLayout>
    )
}