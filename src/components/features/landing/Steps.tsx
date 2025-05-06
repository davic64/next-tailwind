import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { SectionLayout } from './SectionLayout';

const steps = [
  {
    id: '01',
    title: 'Clone repository',
    description:
      'Clone the base repository to start with an optimized and ready-to-use project structure.',
    code: 'git clone git@github.com:davic64/next-tailwind.git',
  },
  {
    id: '02',
    title: 'Install dependencies',
    description:
      'Download all necessary project dependencies using your package manager of choice.',
    code: 'cd next-tailwind && yarn install',
  },
  {
    id: '03',
    title: 'Run the project',
    description: 'Run the project in your local environment and start developing.',
    code: 'yarn dev',
  },
];

export const Steps = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <SectionLayout
        titleSection="How it works"
        title="Get started in just 4 steps"
        description="Our boilerplate is designed to be extremely easy to use. Follow these simple steps to get started."
      >
        <div className="relative">
          <div className="mt-16">
            <div className="relative">
              {/* Line connecting all steps */}
              <div className="hidden md:block absolute left-[50%] h-full w-0.5 bg-gray-200 transform -translate-x-1/2 z-0"></div>

              <div className="space-y-12 relative z-10">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center gap-8`}
                  >
                    <div className="md:w-1/2">
                      <Card>
                        <CardHeader className="flex items-center gap-4">
                          <span className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary text-lg font-bold shrink-0">
                            {step.id}
                          </span>
                          <h3 className="text-xl font-medium text-gray-900">{step.title}</h3>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-gray-500">{step.description}</p>
                          <div className="bg-gray-800 rounded-md p-3 overfloy-x-auto">
                            <code className="text-green-400 font-mono text-sm">{step.code}</code>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="hidden relative md:flex">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mx-auto z-20 animate-ping absolute" />
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mx-auto z-20">
                        <span className="text-primary font-bold">{step.id}</span>
                      </div>
                    </div>

                    <div className="md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </section>
  );
};
