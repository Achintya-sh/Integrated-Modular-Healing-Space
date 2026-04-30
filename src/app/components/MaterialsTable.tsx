const materials = [
  {
    surface: 'Travertine floor',
    color: '#C8A87A',
    roughness: '0.82',
    metalness: '0.0',
    notes: 'Subtle grout #8A6A4A at 1.6 m intervals'
  },
  {
    surface: 'Lime plaster walls',
    color: '#EAD5BB',
    roughness: '0.92',
    metalness: '0.0',
    notes: 'Slight impasto texture'
  },
  {
    surface: 'Oak beams / furniture',
    color: '#6A4220',
    roughness: '0.68',
    metalness: '0.05',
    notes: 'Visible grain, matte sheen'
  },
  {
    surface: 'Sofa upholstery',
    color: '#C49070',
    roughness: '0.88',
    metalness: '0.0',
    notes: 'Woven fabric normal map'
  },
  {
    surface: 'Acoustic panel (linen)',
    color: '#E0D0B8',
    roughness: '0.95',
    metalness: '0.0',
    notes: 'Microfibre texture'
  },
  {
    surface: 'Moss wall tile (dark)',
    color: '#2E6A3A',
    roughness: '0.97',
    metalness: '0.0',
    notes: 'Bumpy organic displacement'
  },
  {
    surface: 'Moss wall tile (light)',
    color: '#4AA05A',
    roughness: '0.95',
    metalness: '0.0',
    notes: ''
  },
  {
    surface: 'Water basin surface',
    color: '#7ECFE0',
    roughness: '0.05',
    metalness: '0.1',
    notes: 'SSR, animated opacity 0.75–0.88'
  },
  {
    surface: 'Pendant lamp shade',
    color: '#D4A840',
    roughness: '0.55',
    metalness: '0.08',
    notes: 'Thin-shell translucency'
  },
  {
    surface: 'Screen face',
    color: '#0A1828',
    roughness: '0.05',
    metalness: '0.5',
    notes: 'emissiveIntensity 0.6–0.9, animated'
  },
  {
    surface: 'Meditation cushion',
    color: '#A865A8',
    roughness: '0.88',
    metalness: '0.0',
    notes: 'Velvet micro-fibre'
  },
  {
    surface: 'Terracotta pot',
    color: '#8A5830',
    roughness: '0.85',
    metalness: '0.0',
    notes: 'Slight sub-surface scatter'
  },
  {
    surface: 'Bookshelf timber',
    color: '#6A4220',
    roughness: '0.72',
    metalness: '0.02',
    notes: ''
  }
];

export function MaterialsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-[#C8A87A]">
            <th className="text-left py-3 px-4 text-[#2E1A10]">Surface</th>
            <th className="text-left py-3 px-4 text-[#2E1A10]">Color</th>
            <th className="text-left py-3 px-4 text-[#2E1A10]">Roughness</th>
            <th className="text-left py-3 px-4 text-[#2E1A10]">Metalness</th>
            <th className="text-left py-3 px-4 text-[#2E1A10]">Notes</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material, index) => (
            <tr
              key={index}
              className="border-b border-[#EAD5BB] hover:bg-[#F5F0EB] transition-colors"
            >
              <td className="py-3 px-4 text-[#6A4220]">{material.surface}</td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg border border-[#C8A87A] shadow-sm"
                    style={{ backgroundColor: material.color }}
                  ></div>
                  <span className="text-sm text-[#8A6A4A] font-mono">{material.color}</span>
                </div>
              </td>
              <td className="py-3 px-4 text-[#6A4220] font-mono text-sm">{material.roughness}</td>
              <td className="py-3 px-4 text-[#6A4220] font-mono text-sm">{material.metalness}</td>
              <td className="py-3 px-4 text-[#8A6A4A] text-sm">{material.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
