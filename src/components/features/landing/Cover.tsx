import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';

export const Cover = () => {
  return (
    <section className="py-20 w-full bg-blue-50">
      <div className="h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between">
        <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-6xl font-bold tracking-tight text-gray-900">
            <span className="block">Start your projects</span>
            <span className="block text-primary">faster than ever</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
            Speed up your workflow with this professional starter kit. Set up to help you launch
            your next project in minutes, not days.
          </p>
          <div className="mt-10 flex gap-4">
            <Button size="lg" className="cursor-pointer text-base">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer text-base">
              Demo <ArrowRightIcon size={18} className="ml-2" />
            </Button>
          </div>
          <p className="mt-6 text-sm text-gray-500">No credit card required · 5-minute setup</p>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-1/2">
          <div className="relative lg:pl-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
              <div className="p-2 bg-gray-100 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-2 text-xs text-gray-500 font-mono">terminal</div>
                </div>
              </div>
              <div className="bg-gray-900 p-4 font-mono text-sm text-gray-100">
                <p className="text-green-400">
                  $ git clone git@github.com:davic64/next-tailwind.git
                </p>
                <p className="text-gray-400">Downloading repository...</p>
                <p className="text-gray-100">cd next-tailwind</p>
                <p className="text-gray-100">yarn install</p>
                <p className="text-gray-400">Installing dependencies...</p>
                <p className="text-green-400">Success! Your project is ready.</p>
                <p className="text-green-400">$ yarn dev</p>
                <p className="text-gray-400">http://localhost:3000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
