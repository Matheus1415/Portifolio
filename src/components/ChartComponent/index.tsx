import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// Definição das props para o componente
interface ChartComponentProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth: number;
    }[];
  };
  type: 'bar' | 'line' | 'pie';
}

const ChartComponent: React.FC<ChartComponentProps> = ({ data, type }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        // Verificar e destruir gráfico existente
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        // Criar o novo gráfico usando os dados e o tipo recebidos via props
        chartInstanceRef.current = new Chart(ctx, {
          type: type, // O tipo de gráfico agora é configurável via props
          data: data, // Os dados do gráfico também vêm via props
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }

    // Cleanup: destruir o gráfico quando o componente desmontar
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, type]); // Dependências para atualizar o gráfico quando as props mudarem

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
