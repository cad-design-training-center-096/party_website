import React from 'react';

export interface StatCardProps {
  label: string;
  value: string;
  sublabel: string;
  trend?: string;
  description?: string;
  onClick?: () => void;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  sublabel,
  trend,
  description,
  onClick,
  className = ''
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-6 text-center border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-slate-200/80 transition-all duration-200 group ${
        onClick ? 'cursor-pointer hover:bg-slate-50/80' : ''
      } ${className}`}
    >
      <div className="flex items-center justify-center gap-1.5 mb-2">
        <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
          {label}
        </span>
        {trend && (
          <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
            {trend}
          </span>
        )}
      </div>

      <div className="text-4xl md:text-5xl font-extrabold text-[#1a365d] tabular-nums tracking-tight mb-2 group-hover:scale-[1.02] transition-transform">
        {value}
      </div>

      <div className="text-sm font-medium text-slate-600">
        {sublabel}
      </div>

      {description && (
        <p className="mt-2 text-xs text-slate-500 line-clamp-2 max-w-xs mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};
