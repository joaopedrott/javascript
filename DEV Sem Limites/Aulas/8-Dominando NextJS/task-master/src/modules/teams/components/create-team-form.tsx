'use client'
import { z } from 'zod'

import { createTeamSchema } from '../schamas/create-team'
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

type CreateTeamForm = z.infer<typeof createTeamSchema>

export function CreateTeamForm() {
    const inputRef = useRef<HTMLInputElement>(null)
    const form = useForm<CreateTeamForm>({
        defaultValues: {
            name: '',
        },
        resolver: zodResolver(createTeamSchema)
    })

    const onSubmit = async (data:  CreateTeamForm) => {
        console.log(data)
    }

    return (
        <Card className='w-full h-full'>
            <CardHeader className='flex px-7'>
                <CardTitle className='text-xl font-bold'>
                    Crie um novo time
                </CardTitle>
            </CardHeader>

            <CardContent className='px-7'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className='flex gap-x-4 w-full'>

                            <FormField 
                            name='image'
                            control={form.control}
                            render={({ field })=>(
                                <div className=' flex flex-col justify-center gap-y-2'>
                                    <div className='flex items-center gap-x-5'>
                                        {field.value ? (
                                            <div className=' size-20 relative rouded-none overflow-hidden'>
                                                <Image 
                                                alt='Imagem do time'
                                                fill
                                                className='object-cover'
                                                src={field.value instanceof File ? URL.createObjectURL(field.value) : field.value}
                                                />
                                            </div>
                                        ):(
                                            <Avatar className='size-20 rounded-none cursor-pointer'>
                                                <AvatarFallback 
                                                className='text-white text-3xl rounded-none bg-yellow-500'
                                                onClick={()=> inputRef.current?.click()}
                                                >
                                                    {form.watch('name') ? form.watch('name')[0].toUpperCase() : 'T'}
                                                </AvatarFallback>
                                            </Avatar>
                                        )}

                                        <input 
                                        ref={inputRef}
                                        type='file'
                                        className='hidden'
                                        accept='.jpg, .png, .jpeg, .svg'
                                        />
                                    </div>
                                </div>
                            )}
                            />

                            <div className='w-full'>
                                <FormField
                                name='name'
                                control={form.control}
                                render={({ field })=> (
                                    <FormItem>
                                        <FormLabel>Nome do time</FormLabel>
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
                                >

                                </FormField>
                            </div>


                        </div>
                            <div className='py-7'>
                                <Separator />
                            </div>

                            <div className='flex items-center justify-end gap-2'>
                                <Button
                                variant={'secondary'}
                                size={'lg'}
                                type='button'
                                onClick={()=>{}}
                                >
                                    Cancelar
                                </Button>
                                <Button
                                size={'lg'}
                                type='submit'
                                onClick={()=>{}}
                                >
                                    Criar time
                                </Button>

                            </div>



                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}