interface Zone {
  id: number;
  title: string;
  location: string;
  color: string;
  description: string;
  features: string[];
  mood: string;
}

interface ZoneCardProps {
  zone: Zone;
  isSelected: boolean;
  onClick: () => void;
}

export function ZoneCard({ zone, isSelected, onClick }: ZoneCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-2"
      style={{ borderColor: isSelected ? zone.color : 'transparent' }}
    >
      {/* Color Header */}
      <div
        className="h-24 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${zone.color} 0%, ${zone.color}dd 100%)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="relative h-full flex items-center justify-between px-6">
          <div>
            <div className="text-white/80 text-sm mb-1">Zone {zone.id}</div>
            <h3 className="text-white text-2xl">{zone.title}</h3>
          </div>
          <div className="text-white/90 text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            {zone.location}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-[#6A4220] mb-6 leading-relaxed">
          {zone.description}
        </p>

        {/* Features List */}
        <div className={`space-y-2 transition-all duration-300 ${isSelected ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <h4 className="text-sm uppercase tracking-wide text-[#8A6A4A] mb-3">Key Features</h4>
          {zone.features.map((feature, index) => (
            <div key={index} className="flex gap-3 items-start">
              <div
                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: zone.color }}
              ></div>
              <p className="text-sm text-[#6A4220]">{feature}</p>
            </div>
          ))}
        </div>

        {/* Mood Tag */}
        <div className="mt-6 pt-6 border-t border-[#EAD5BB]">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#8A6A4A]">Emotional Mood:</span>
            <span
              className="text-sm px-3 py-1 rounded-full"
              style={{
                backgroundColor: `${zone.color}20`,
                color: zone.color
              }}
            >
              {zone.mood}
            </span>
          </div>
        </div>
      </div>

      {/* Click Indicator */}
      <div className="px-6 pb-4">
        <div className="text-xs text-[#8A6A4A] text-center">
          {isSelected ? '▲ Click to collapse' : '▼ Click to view features'}
        </div>
      </div>
    </div>
  );
}
