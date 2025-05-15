import { useParams } from "next/navigation";

export function useTeamId() {
    const params = useParams();

    return params.teamId as string;

}