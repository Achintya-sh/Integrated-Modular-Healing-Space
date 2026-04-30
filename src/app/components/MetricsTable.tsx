const metrics = [
  {
    metric: 'Negative emotional state',
    before: '61%',
    after: 'down to ~30%',
    improvement: -50.8
  },
  {
    metric: 'Perceived isolation',
    before: '72%',
    after: 'down to ~37%',
    improvement: -48.6
  },
  {
    metric: 'Perceived wait duration',
    before: 'Baseline',
    after: 'down 20%',
    improvement: -20
  },
  {
    metric: 'Satisfaction score',
    before: 'Baseline',
    after: 'up 25%',
    improvement: 25
  },
  {
    metric: 'Anxiety self-report (Calm Zone)',
    before: 'Baseline',
    after: 'down 32%',
    improvement: -32
  },
  {
    metric: 'Cortisol markers (Biophilic Zone)',
    before: 'Baseline',
    after: 'down 28%',
    improvement: -28
  }
];

export function MetricsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-white/30">
            <th className="text-left py-4 px-4 text-white">Metric</th>
            <th className="text-left py-4 px-4 text-white">Before</th>
            <th className="text-left py-4 px-4 text-white">After (Projected)</th>
            <th className="text-right py-4 px-4 text-white">Impact</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((metric, index) => (
            <tr
              key={index}
              className="border-b border-white/20 hover:bg-white/10 transition-colors"
            >
              <td className="py-4 px-4 text-white">{metric.metric}</td>
              <td className="py-4 px-4 text-white/80">{metric.before}</td>
              <td className="py-4 px-4 text-white/80">{metric.after}</td>
              <td className="py-4 px-4 text-right">
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                    metric.improvement > 0
                      ? 'bg-white/20 text-white'
                      : 'bg-white/90 text-[#3D8A50]'
                  }`}
                >
                  {metric.improvement > 0 ? '↑' : '↓'}
                  {Math.abs(metric.improvement)}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
        <p className="text-white/90 text-sm leading-relaxed">
          These projected improvements demonstrate the significant impact of thoughtful spatial design on patient emotional well-being.
          By creating distinct zones that address different emotional needs, the healing space aims to reduce anxiety,
          increase satisfaction, and create a more humane hospital experience.
        </p>
      </div>
    </div>
  );
}
