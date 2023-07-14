export const disciplines = [
    {
        name: 'Иностранный язык',
        department: 'Иностранных языков',
        control: [{ type: 'Лабораторная работа', totalHours: 32, missedHours: 12, attestation1: 3, attestation2: 4 }],
    },
    {
        name: 'Методы и средства моделирования в экономике',
        department: 'Системного анализа и обработки информации',
        control: [
            {
                type: 'Лабораторная работа',
                totalHours: 32,
                missedHours: 16,
                attestation1: 2,
                attestation2: 3,
            },
            { type: 'Семинар', totalHours: 8, missedHours: 8, attestation1: 0, attestation2: 3 },
            { type: 'Лекция', totalHours: 12, missedHours: 12, attestation1: 1, attestation2: 3 },
        ],
    },
];
