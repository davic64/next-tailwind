import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Control } from 'react-hook-form';

interface LoginFormProps {
  formValidation: {
    handleSubmit: (
      onSubmit: (data: { email: string; password: string }) => void,
    ) => (e: React.FormEvent) => void;
    control: Control<{
      email: string;
      password: string;
    }>;
  };
  onSubmit: (data: { email: string; password: string }) => void;
}

export const LoginForm = ({ formValidation, onSubmit }: LoginFormProps) => {
  return (
    <form className="space-y-6" onSubmit={formValidation.handleSubmit(onSubmit)}>
      <FormField
        control={formValidation.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="email@example.com" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={formValidation.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="••••••••" {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      <Link href="/forgot-password" className="text-sm text-primary float-right hover:underline">
        Forgot your password?
      </Link>

      <Button type="submit" className="w-full">
        Sign in
      </Button>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};
