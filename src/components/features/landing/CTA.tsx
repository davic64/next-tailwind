import { Button } from '@/components/ui/button';

export const CTA = () => {
  return (
    <div className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Ready to accelerate your development?
        </h2>
        <p className="text-lg leading-6 text-blue-100">
          Start building your next project in minutes with our proven and optimized template.
        </p>
        <a href="https://github.com/davic64/next-tailwind" target="_blank">
          <Button
            size="lg"
            className="text-base cursor-pointer mt-4 text-primary"
            variant="outline"
          >
            Download Now
          </Button>
        </a>
      </div>
    </div>
  );
};
