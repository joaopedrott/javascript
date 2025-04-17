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

type SigninForm = z.infer<typeof registerSchema>;

export function SigninCard() {

    const form = useForm<SigninForm>({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: zodResolver(registerSchema),
    })

    const onSubmit = async (data: SigninForm) => {
        console.log(data);
    }

    return (
        <Card className="w-full h-full md:w-[487px] rounded-none">
            <CardHeader className="flex flex-col items-center justify-center">
                <CardTitle className="text-2xl ">
                    Faca o sei login
                </CardTitle>
            </CardHeader>

            <CardContent className="px-7">
                <Form {...form}>
                    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>


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

                        <Button size={'lg'} className="w-full">Entrar</Button>
                    </form>
                </Form>
            </CardContent>
                

            <div className="px-7">
                <Separator />
            </div>

            <CardContent className="px-7 flex flex-col gap-y-4">
                <Button className="w-full" variant='secondary' size={'lg'}>Entrar com Google</Button>
            </CardContent>

            <CardContent className="px-7 flex items-center justify-center">
                        <p className="text-center">
                            Ainda nao possui uma conta?{' '}
                            <Link href='/registro' className="text-yellow-500">
                            Crie sua conta
                            </Link>
                        </p>
            </CardContent>    
        </Card>
    )
}