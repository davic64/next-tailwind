'use client';

import { RegisterForm } from '@/components/features/auth/RegisterForm';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { AuthLayout } from '@/components/features/auth/AuthLayout';

const registerSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z.string().email('Ingrese un correo electrónico válido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const Register = () => {
  const router = useRouter();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    console.log(data);
    setTimeout(() => {
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <AuthLayout subtitle="Create your account" formValidation={form}>
      <RegisterForm onSubmit={onSubmit} formValidation={form} />
    </AuthLayout>
  );
};

export default Register;
