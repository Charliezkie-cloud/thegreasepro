export default function Stats() {
  const stats = [
    { value: '12k+', label: 'Oil Changes Completed' },
    { value: '4.9/5', label: 'Customer Satisfaction' },
    { value: '24/7', label: 'Support Response' },
    { value: '100%', label: 'Tool Precision Grade' },
  ];

  return (
    <section className="py-24 bg-surface-container-lowest border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="font-display text-4xl md:text-5xl text-primary-container mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </div>
              <div className="font-label text-[10px] md:text-xs text-on-surface-variant uppercase tracking-[0.2em] font-bold">
                {stat.label}
              </div>
              <div className="mt-4 flex justify-center">
                <div className="h-0.5 w-8 bg-outline-variant/30 group-hover:w-16 group-hover:bg-primary-container transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
