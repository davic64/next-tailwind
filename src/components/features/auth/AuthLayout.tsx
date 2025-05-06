import { Card, CardContent } from '@/components/ui/card';
import { CodeIcon } from 'lucide-react';
import { Form } from '@/components/ui/form';

interface AuthLayotProps {
  subtitle: string;
  formValidation: any;
  children: React.ReactNode;
}

export const AuthLayout = ({ subtitle, formValidation, children }: AuthLayotProps) => {
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
              <p className="text-gray-600 text-sm">{subtitle}</p>
            </div>
            <Form {...formValidation}>{children}</Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
