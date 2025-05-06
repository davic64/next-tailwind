'use client';

import { Card, CardContent } from '@/components/ui/card';
import { CodeIcon } from 'lucide-react';
import { LoginForm } from '@/components/features/login/LoginForm';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';

const loginSchema = z.object({
  email: z.string().email('Ingrese un correo electrónico válido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log('Login data:', data);

    setTimeout(() => {
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="h-screen bg-muted/30">
      <div className="flex items-center justify-center h-full">
        <Card className="border-none shadow-xl shadow-gray-200 max-w-md w-84 md:w-[25rem]">
          <CardContent>
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center bg-primary rounded-lg text-white w-8 h-8">
                  <CodeIcon size={14} />
                </span>
                <span className="font-medium text-xl">BoilerPlate</span>
              </div>
              <p className="text-gray-600 text-sm">Sign in to your account</p>
            </div>
            <Form {...form}>
              <LoginForm formValidation={form} onSubmit={onSubmit} />
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
