'use client'
import { z } from 'zod'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Image from 'next/image'
import { useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { usePresignedFile } from '@/modules/files/hooks/use-presigned-file'
import { cn } from '@/lib/utils'
import { createProjectSchema } from '../schemas/create-project'
import { useCreateProject } from '../hooks/use-create-project'
import { useTeamId } from '@/modules/teams/hooks/use-team-id'


type CreateProjectForm = z.infer<typeof createProjectSchema>

interface CreateProjectFormProps {
  onCancel?: () => void
}

export function CreateProjectForm ({ onCancel }: CreateProjectFormProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const teamId = useTeamId()
  const form = useForm<CreateProjectForm>({
    defaultValues: {
      name: '',
      teamId
      
    },
    resolver: zodResolver(createProjectSchema)
  })
  const { mutate, isPending } = useCreateProject()
  const { mutateAsync: presignFile } = usePresignedFile()
  const router = useRouter()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      form.setValue('image', file)
    }
  }

  const onSubmit = async (data: CreateProjectForm) => {
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
        image,
        teamId: data.teamId
      }
    }, {
      onSuccess: ({ data }) => {
        form.reset()
        router.push(`/time/${teamId}/projeto/${data.id}`)
      }
    })
  }

  return (
    <Card className='w-full h-full'>
      <CardHeader className='flex px-7'>
        <CardTitle className='text-xl font-bold'>
          Crie um novo projeto
        </CardTitle>
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
                            alt='Imagem do projeto'
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
                            {form.watch('name') ? form.watch('name')[0].toUpperCase() : 'T'}
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
                      <FormLabel>Nome do Projeto</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          placeholder='Digite o nome do projeto'
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
                className={cn(!onCancel && 'invisible')}
                variant='secondary'
                size='lg'
                type='button'
                onClick={onCancel}
              >
                Cancelar
              </Button>

              <Button
                size='lg'
                type='submit'
                onClick={() => {}}
                disabled={isPending}
              >
                Criar Projeto
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}