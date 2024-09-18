import React, { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import styled from 'styled-components';

// Registrar los componentes de Chart.js
ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #121212;
  color: #ffffff;
  padding: 2rem;
  min-height: 100vh;
`;

const ChartContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 2rem;
  height: 60vh;  /* Ajusta la altura en función del viewport */
  min-height: 400px;  /* Tamaño mínimo para pantallas pequeñas */
`;

const LanguageChart = ({ data }) => {
  const chartRef = useRef(null);
  const [gradientOffset, setGradientOffset] = useState(0);

  // Función para crear un degradado animado
  const createAnimatedGradient = (ctx, chartArea) => {
    const gradient = ctx.createLinearGradient(0, 0, chartArea.width, 0);
    const colorStart = `rgba(0, 255, 0, ${Math.abs(Math.sin(gradientOffset))})`;
    const colorEnd = `rgba(0, 128, 0, ${Math.abs(Math.cos(gradientOffset))})`;

    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorEnd);

    return gradient;
  };

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      const ctx = chart.ctx;
      const chartArea = chart.chartArea;

      const animateGradient = () => {
        if (!chartArea) return;

        chart.data.datasets[0].backgroundColor = createAnimatedGradient(ctx, chartArea);
        chart.update();
        setGradientOffset(prev => prev + 0.02); // Incremento para la animación
      };

      const interval = setInterval(animateGradient, 50); // Actualiza el gráfico cada 50ms

      return () => clearInterval(interval);
    }
  }, [chartRef, gradientOffset]);

  const chartData = {
    labels: data.map(item => item.language),
    datasets: [
      {
        label: 'Dominio (%)',
        data: data.map(item => item.percentage),
        borderColor: '#ffffff',
        borderWidth: 2,
        barPercentage: 0.9,  
        categoryPercentage: 0.6,
        minBarLength: 10,  // Añadir un tamaño mínimo para las barras
      },
    ],
  };

  const options = {
    indexAxis: 'y',  
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        display: true,
        color: '#ffffff',
        anchor: 'end',
        align: 'right',
        formatter: (value) => `${value}%`,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#ffffff',
          font: {
            size: 14,  
          },
        },
        grid: {
          display: false,
        },
        beginAtZero: true,
        max: 100,
      },
      y: {
        ticks: {
          color: '#ffffff',
          font: {
            size: 16,  
          },
        },
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,  // Desactiva mantener la proporción para ajustarlo mejor al contenedor
    animation: {
      duration: 0,  
    },
  };

  return (
    <Container>
      <h2>Dominio de Lenguajes</h2>
      <ChartContainer>
        <Bar ref={chartRef} data={chartData} options={options} />
      </ChartContainer>
    </Container>
  );
};

export default LanguageChart;
