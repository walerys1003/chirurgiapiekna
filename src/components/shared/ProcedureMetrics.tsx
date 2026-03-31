import { formatPrice } from '@/lib/utils';

interface ProcedureMetricsProps {
  painLevel: number;
  priceMin: number;
  priceMax: number;
  anesthesiaType: 'local' | 'sedation' | 'general';
  recoveryTime: string;
  resultDuration: string;
  satisfactionRate: number;
}

const anesthesiaLabels: Record<string, string> = {
  local: 'znieczulenie miejscowe',
  sedation: 'sedacja',
  general: 'znieczulenie ogólne',
};

export function ProcedureMetrics({
  painLevel,
  priceMin,
  priceMax,
  anesthesiaType,
  recoveryTime,
  resultDuration,
  satisfactionRate,
}: ProcedureMetricsProps) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-data)',
        fontSize: '12px',
        color: 'var(--color-porcelain-500)',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
      }}
    >
      <div>
        {formatPrice(priceMin, priceMax)} · {anesthesiaLabels[anesthesiaType]} · {recoveryTime}
      </div>
      <div>
        ból {painLevel}/10 · efekt {resultDuration} · satysfakcja {satisfactionRate}%
      </div>
    </div>
  );
}