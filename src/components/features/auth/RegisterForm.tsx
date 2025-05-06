import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Control } from 'react-hook-form';

interface RegisterFormProps {
  formValidation: {
    handleSubmit: (
      onSubmit: (data: { name: string; email: string; password: string }) => void,
    ) => (e: React.FormEvent) => void;
    control: Control<{
      name: string;
      email: string;
      password: string;
    }>;
  };
  onSubmit: (data: { name: string; email: string; password: string }) => void;
}

export const RegisterForm = ({ onSubmit, formValidation }: RegisterFormProps) => {
  return (
    <form className="space-y-6" onSubmit={formValidation.handleSubmit(onSubmit)}>
      <FormField
        control={formValidation.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Your Name" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
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

      <Button type="submit" className="w-full">
        Register
      </Button>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
};
