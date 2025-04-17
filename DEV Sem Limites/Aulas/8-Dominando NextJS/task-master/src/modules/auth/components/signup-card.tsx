'use client'
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { registerSchema } from "../schemas/register";

type SignupForm = z.infer<typeof registerSchema>;

export function SignupCard() {

    const form = useForm<SignupForm>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
        resolver: zodResolver(registerSchema),
    })

    const onSubmit = async (data: SignupForm) => {
        console.log(data);
    }

    return (
        <Card className="w-full h-full md:w-[487px] rounded-none">
            <CardHeader className="flex flex-col items-center justify-center">
                <CardTitle className="text-2xl ">
                    Crie sua conta
                </CardTitle>

                <CardDescription className="text-center">
                    Ao criar usa conta, voce concorda com nossa {' '}
                    <Link href='/politica-de-privacidade' className="text-yellow-500">Politica de Privacidade</Link>{' '}e{' '}

                    <Link href='/termos-de-servico' className="text-yellow-500">Termos de Servico</Link>
                </CardDescription>
            </CardHeader>

            <CardContent className="px-7">
                <Form {...form}>
                    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                        name='name'
                        control={form.control}
                        render={({field})=>(
                            <FormItem>
                                <FormControl>
                                    <Input 
                                    {...field} 
                                    type="text"
                                    placeholder="Digite seu nome" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        >
                            
                        </FormField>

                        <FormField
                        name='email'
                        control={form.control}
                        render={({field})=>(
                            <FormItem>
                                <FormControl>
                                    <Input 
                                    {...field} 
                                    type="email"
                                    placeholder="Digite seu email" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        >
                            
                        </FormField>


                        <FormField
                        name='password'
                        control={form.control}
                        render={({field})=>(
                            <FormItem>
                                <FormControl>
                                    <Input 
                                    {...field} 
                                    type="password"
                                    placeholder="Digite sua senha" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        >
                            
                        </FormField>

                        <Button size={'lg'} className="w-full">Criar conta</Button>
                    </form>
                </Form>
            </CardContent>
                

            <div className="px-7">
                <Separator />
            </div>

            <CardContent className="px-7 flex flex-col gap-y-4">
                <Button className="w-full" variant='secondary' size={'lg'}>Criar conta com Google</Button>
            </CardContent>

            <CardContent className="px-7 flex items-center justify-center">
                        <p className="text-center">
                            Ja tem uma conta?{' '}
                            <Link href='/login' className="text-yellow-500">
                            Faça login
                            </Link>
                        </p>
            </CardContent>    
        </Card>
    )
}