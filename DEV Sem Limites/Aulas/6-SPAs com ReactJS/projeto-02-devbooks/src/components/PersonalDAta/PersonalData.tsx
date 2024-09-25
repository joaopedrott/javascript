import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useUpdateProfileMutation } from "../../hooks/useUpdateProfileMutation";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { Input } from "../Input";
import { AvatarContainer, UpdateProfileContainer } from "./PersonalData.styles";

export function PersonalData () {
    const { user } = useAuth()
    const [name, setName]= useState('')
    const { mutateAsync, isPending } = useUpdateProfileMutation()
    

    const handleUpdateProfile = async () => {
        await mutateAsync({
            name
        })
    }
    return(
        <div>
            <AvatarContainer>
                <Avatar size={140} />

                <Button>Alterar Foto</Button>
                <Button variant="outlined"> Remover Foto</Button>
            </AvatarContainer>

            <UpdateProfileContainer>
                <Input label="Nome Completo" defaultValue={user?.name} onChange={(e)=> setName(e.target.value)}/>
                <Input label="Endereco de Email" defaultValue={user?.email} disabled/>
                <Button disabled={!name || isPending} onClick={handleUpdateProfile}>
                    {isPending ? 'Salvando...' : 'Salvar'}
                    </Button>
            </UpdateProfileContainer>
        </div>
    )
}