interface SectionLayoutProps {
  titleSection: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export const SectionLayout = ({
  titleSection,
  title,
  description,
  children,
}: SectionLayoutProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-semibold text-primary uppercase tracking-wide">{titleSection}</h2>
        <p className="mt-2 text-3xl font-bold text-gray-900">{title}</p>
        <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500">{description}</p>
      </div>
      {children}
    </div>
  );
};
