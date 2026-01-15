import React from 'react';

const Persons = () => {
    const textStyle = {
        color: 'white',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1rem',
        maxWidth: '800px',
        textAlign: 'left',
        lineHeight: '1.5',
        margin: '20px auto',
        padding: '0 20px',
    };

    const headingStyle = {
        color: 'white',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1.5rem',
        marginBottom: '10px',
        textAlign: 'center',
    };

    const subheadingStyle = {
        color: 'white',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1.2rem',
        marginTop: '20px',
        marginBottom: '10px',
        textAlign: 'left',
        paddingLeft: '20px',
    };

    const listStyle = {
        color: 'white',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1rem',
        listStyleType: 'disc',
        paddingLeft: '40px',
    };

    const contactStyle = {
        color: 'white',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1rem',
        textAlign: 'center',
        marginTop: '30px',
    };

    return (
        <div style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}> {/* Added for scrollability */}
            <h2 style={headingStyle}>EMTIVI — это тот самый хедлайнер, который заряжает танцпол с первых нот!</h2>
            <p style={textStyle}>
                Наш репертуар — сокровищница хитов, знакомых всем, а наша энергия — безгранична.
            </p>
            <p style={textStyle}>
                Любимчики публики и профессионалы своего дела. Мы играем так, чтобы ваш праздник стал незабываемым. Доверьте нам атмосферу — мы сделаем её идеальной!
            </p>
            <p style={textStyle}>
                Ребята из легендарных групп Just Like Heaven и StravberryFields, теперь с ещё большим драйвом! Опыт на сцене — с 2010 года.
            </p>

            <h3 style={subheadingStyle}>Знакомьтесь, команда мечты:</h3>
            <ul style={listStyle}>
                <li>
                    <strong>🎤 Три уникальные вокалистки:</strong> Дарья Темникова, Marissa Moore и Ульяна Уладова. Каждая из них — яркая сольная артистка с собственной неповторимой программой и харизмой. Вместе с EMTIVI они создают по-настоящему звёздное шоу, где есть место и мощному року, и зажигательному фанку, и лиричным балладам.
                </li>
                <li>
                    <strong>🎷 Сакс-гуру Филипп Арутюнов:</strong> саксофонист-виртуоз, чьи соло дышат джазом, фанком и рок-н-роллом. Он не просто играет музыку — он говорит саксофоном, и каждый его «монолог» завораживает.
                </li>
                <li>
                    <strong>🎸 Максим Катрук:</strong> гитарист-виртуоз. Обладатель безупречного слуха и филигранной техники. Каждая его нота — точное попадание в сердце, а соло — это искренняя история, рассказанная струнами.
                </li>
                <li>
                    <strong>🎹 Вдохновитель за клавишами Александр Ивашкин:</strong> Лидер группы, который превращает любую идею в чистый звук.
                </li>
                <li>
                    <strong>🥁 Драм-мастер Дмитрий Стульнев:</strong> Сердцебиение группы! Лучший барабанщик региона, который создает тот самый неуловимый грув и заставляет всех двигаться в такт музыке.
                </li>
            </ul>

            <h3 style={subheadingStyle}>💥 Хотите музыкальное шоу помасштабнее?</h3>
            <p style={textStyle}>
                Закажите «полный состав» с медной секцией (саксофон, труба, тромбон)! 8 профессионалов на вашем празднике — это абсолютный вау-эффект.
            </p>

            <p style={contactStyle}>
                📲 Чтобы мы спели и сыграли для вас:<br/>
                Звоните Александру: +7 905 179 75 60<br/>
                (Обсудим программу, цены и зарезервируем лучшую дату!)
            </p>
        </div>
    );
};

export default Persons;
