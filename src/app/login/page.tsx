'use client';

import { LoginForm } from '@/components/features/auth/LoginForm';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { AuthLayout } from '@/components/features/auth/AuthLayout';

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
    <AuthLayout subtitle="Sign in to your account" formValidation={form}>
      <LoginForm formValidation={form} onSubmit={onSubmit} />
    </AuthLayout>
  );
};

export default Login;
