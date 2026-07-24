import temnikovaImg from '../../img/Persons/Temnikova_color.jpg';
import arutyunovImg from '../../img/Persons/Arutunov_color.jpg';
import katrukImg from '../../img/Persons/Katruk_color.jpg';
import ivashkinImg from '../../img/Persons/Ivashkin_color.jpg';
import stulnevImg from '../../img/Persons/Stulnev_color.jpg';

export interface Musician {
    id: string;
    name: string;
    instrument: string;
    description: string;
    photo?: string;
}

export const MUSICIANS: Musician[] = [
    {
        id: 'temnikova',
        name: 'Дарья',
        instrument: 'Вокал',
        description: 'Яркая солистка с очень красивым тембром голоса.',
        photo: temnikovaImg
    },
    {
        id: 'arutyunov',
        name: 'Филипп',
        instrument: 'Саксофон',
        description: 'Сакс-гуру, виртуоз, чьи соло дышат джазом и фанком.',
        photo: arutyunovImg
    },
    {
        id: 'katruk',
        name: 'Максим',
        instrument: 'Гитара',
        description: 'Гитарист-виртуоз с безупречным слухом.',
        photo: katrukImg
    },
    {
        id: 'ivashkin',
        name: 'Александр',
        instrument: 'Клавиши',
        description: 'Вдохновитель за клавишами, лидер группы.',
        photo: ivashkinImg
    },
    {
        id: 'stulnev',
        name: 'Дмитрий',
        instrument: 'Барабаны',
        description: 'Драм-мастер, лучшее сердцебиение региона.',
        photo: stulnevImg
    }
];
