'use client'
import { z } from 'zod'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Image from 'next/image'
import { useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { usePresignedFile } from '@/modules/files/hooks/use-presigned-file'
import { updateTeamSchema } from '../schemas/update-team'
import { useUpdateTeam } from '../hooks/use-update-team'
import { Team } from '@prisma/client'

type UpdateTeamForm = z.infer<typeof updateTeamSchema>

interface UpdateTeamFormProps {
  initialData: Team
}

export function UpdateTeamForm ({ initialData }: UpdateTeamFormProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const form = useForm<UpdateTeamForm>({
    defaultValues: {
      name: initialData?.name,
      image: initialData?.image as string
    },
    resolver: zodResolver(updateTeamSchema)
  })
  const { mutate, isPending } = useUpdateTeam()
  const { mutateAsync: presignFile } = usePresignedFile()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      form.setValue('image', file)
    }
  }

  const onSubmit = async (data: UpdateTeamForm) => {
    let image: string | undefined = undefined

    if (data.image instanceof File) {
      const { url, fields } = await presignFile({
        json: {
          contentType: data.image.type
        }
      })

      const formData = new FormData()

      Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value as string)
      })

      formData.append('file', data.image)

      // Upload the file to S3
      await fetch(url, {
        method: 'POST',
        body: formData,
      })

      image = `${url}${fields.key}`
    }

    mutate({
      json: {
        name: data.name,
        image
      },
      param: {
        teamId: initialData.id
      }
    })
  }

  const name = form.watch('name')

  return (
    <Card className='w-full h-full'>
      <CardHeader className='flex flex-col px-7'>
        <CardTitle className='text-xl font-bold'>
          Geral
        </CardTitle>
        <CardDescription>
          Configure as informações do time
        </CardDescription>
      </CardHeader>

      <CardContent className='px-7'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='flex gap-x-4 w-full'>
              <FormField 
                name='image'
                control={form.control}
                render={({ field }) => (
                  <div className='flex flex-col justify-center gap-y-2'>
                    <div className='flex items-center gap-x-5'>
                      {field.value ? (
                        <div className='size-20 relative rounded-none overflow-hidden'>
                          <Image 
                            alt='Imagem do time'
                            fill
                            className='object-cover'
                            src={field.value instanceof File ? URL.createObjectURL(field.value) : field.value}
                          />
                        </div>
                      ) : (
                        <Avatar className='size-20 rounded-none'>
                          <AvatarFallback 
                            className='text-white text-3xl rounded-none bg-yellow-500'
                            onClick={() => inputRef.current?.click()}
                          >
                            {name ? name[0].toUpperCase() : 'T'}
                          </AvatarFallback>
                        </Avatar>
                      )}

                      <input
                        ref={inputRef}
                        type='file'
                        className='hidden'
                        accept='.jpeg, .jpg, .png, .svg'
                        onChange={handleFileChange}
                        disabled={isPending}
                      />
                    </div>
                  </div>
                )}
              />

              <div className='w-full'>
                <FormField
                  name='name'
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome do Time</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          placeholder='Digite o nome do time'
                          className='w-full'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className='py-7'>
              <Separator />
            </div>

            <div className='flex items-center justify-end gap-2'>
              <Button
                size='lg'
                type='submit'
                disabled={isPending}
              >
                Salvar Alterações
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}