import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export function useGetTeams() {
  return useQuery({
    queryKey: ["teams"],
    queryFn: async () => {
      const response = await client.api.teams.$get()

      if (!response.ok) {
        throw new Error('Error ao buscar os times')
      }

      return await response.json()
    }
  })
}