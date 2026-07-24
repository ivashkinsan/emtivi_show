export interface Musician {
    id: string;
    name: string;
    instrument: string;
    description: string;
    photo?: string; // URL to photo
}

export const MUSICIANS: Musician[] = [
    {
        id: 'temnikova',
        name: 'Дарья Темникова',
        instrument: 'Вокал',
        description: 'Яркая солистка с очень красивым тембром голоса.',
    },
    {
        id: 'arutyunov',
        name: 'Филипп Арутюнов',
        instrument: 'Саксофон',
        description: 'Сакс-гуру, виртуоз, чьи соло дышат джазом и фанком.',
    },
    {
        id: 'katruk',
        name: 'Максим Катрук',
        instrument: 'Гитара',
        description: 'Гитарист-виртуоз с безупречным слухом.',
    },
    {
        id: 'ivashkin',
        name: 'Александр Ивашкин',
        instrument: 'Клавиши',
        description: 'Вдохновитель за клавишами, лидер группы.',
    },
    {
        id: 'stulnev',
        name: 'Дмитрий Стульнев',
        instrument: 'Барабаны',
        description: 'Драм-мастер, лучшее сердцебиение региона.',
    }
];
