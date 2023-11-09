import React from 'react';
import Styles from "./style.module.scss"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['January', 'February', 'March', 'April'];

export default function Chart(dados) {
    console.log(dados.labels);
    const options = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: dados.labels[0],
            },
        },
    };
    const data = {
        labels: [dados.labels[1], dados.labels[2], dados.labels[3], dados.labels[4]],
        datasets: [
            {
                label: 'Votos',
                data: dados.valores.map((n) => n),
                backgroundColor: '#F2B138',
            },
        ],
    };
    return (
        <div className={Styles.container}>
            <h2></h2>
            <Bar options={options} data={data} />
        </div>
    );
}