import { useAuth } from "../../hooks/useAuth";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { Input } from "../Input";
import { AvatarContainer, UpdateProfileContainer } from "./PersonalData.styles";

export function PersonalData () {
    const { user } = useAuth()

    return(
        <div>
            <AvatarContainer>
                <Avatar size={140} />

                <Button>Alterar Foto</Button>
                <Button variant="outlined"> Remover Foto</Button>
            </AvatarContainer>

            <UpdateProfileContainer>
                <Input label="Nome Completo" value={user?.name}/>
                <Input label="Endereco de Email" value={user?.email} disabled/>
                <Button>Salvar</Button>
            </UpdateProfileContainer>
        </div>
    )
}