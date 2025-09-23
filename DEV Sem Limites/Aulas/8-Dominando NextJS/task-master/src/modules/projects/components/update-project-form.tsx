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
import { Project } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { updateProjectSchema } from '../schemas/update-project'
import { useUpdateProject } from '../hooks/use-update-project'
import { useDeleteProject } from '../hooks/use-delete-project'
import { useConfirm } from '@/hooks/use-confirm'

type UpdateProjectForm = z.infer<typeof updateProjectSchema>

interface UpdateProjectFormProps {
  initialData: Project
}

export function UpdateProjectForm ({ initialData }: UpdateProjectFormProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const form = useForm<UpdateProjectForm>({
    defaultValues: {
      name: initialData.name ?? '',
      image: initialData.image ?? undefined
    },
    resolver: zodResolver(updateProjectSchema)
  })
  const { mutate, isPending } = useUpdateProject()
  const { mutateAsync: deleteProject, isPending: isDeletingProject } = useDeleteProject()
  const { mutateAsync: presignFile } = usePresignedFile()
  const router = useRouter()
  const [DeleteDialog, confirmDelete] = useConfirm(
    'Deletar Projeto',
    'Essa ação não pode ser desfeita.'
  )

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      form.setValue('image', file)
    }
  }

  const handleDeleteProject = async () => {
    const ok = await confirmDelete()

    if (!ok) return

    await deleteProject({
      param: {
        projectId: initialData.id
      }
    }, {
      onSuccess: () => {
        router.push('/')
      }
    })
  }

  const onSubmit = async (data: UpdateProjectForm) => {
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
        projectId: initialData.id
      }
    })
  }

  const name = form.watch('name')

  return (
    <>
      <DeleteDialog />
      <Card className='w-full h-full'>
        <CardHeader className='flex flex-col px-7'>
          <CardTitle className='text-xl font-bold'>
            Geral
          </CardTitle>
          <CardDescription>
            Configure as informações gerais do projeto.
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
                              {name ? name[0].toUpperCase() : 'P'}
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

              <div className='flex items-center justify-between gap-2'>
                <Button
                  className='text-red-500 border-red-500 hover:bg-red-50'
                  variant='secondary'
                  size='lg'
                  disabled={isPending || isDeletingProject}
                  type='button'
                  onClick={handleDeleteProject}
                >
                  Deletar Projeto
                </Button>
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
    </>
  )
}