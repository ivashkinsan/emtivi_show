import type { CSSProperties } from "react";

const containerStyle: CSSProperties = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#fff',
    fontFamily: 'Arial, sans-serif'
};

const headingStyle: CSSProperties = {
    color: '#FFD700',
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center'
};

const textStyle: CSSProperties = {
    color: '#ccc',
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '1rem',
    maxWidth: '600px',
    textAlign: 'center',
    lineHeight: '1.6',
    margin: '0 auto',
    padding: '10px'
};

const subheadingStyle: CSSProperties = {
    color: '#FFD700',
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '1.5rem',
    marginTop: '40px',
    marginBottom: '10px',
    textAlign: 'left',
    paddingLeft: '20px'
};

const contactStyle: CSSProperties = {
    color: '#FFD700',
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '1.2rem',
    textAlign: 'center',
    marginTop: '30px'
};

const Persons = () => {
    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>EMTIVI — это тот самый хедлайнер, который заряжает танцпол с первых нот!</h2>
            <p style={textStyle}>
                Ребята из легендарных групп Just Like Heaven и StrawberryFields, теперь с ещё большим драйвом!
            </p>
            <p style={textStyle}>
                Сочетание опыта и бешеной энергетики не оставляет равнодушным!
            </p>
            <p style={textStyle}>
                Опыт на сцене — с 2010 года.
            </p>

            <h3 style={subheadingStyle}>Знакомьтесь, команда мечты:</h3>
            <ul>
                <li>Дарья Темникова — Вокал</li>
                <li>Филипп Арутюнов — Саксофон</li>
                <li>Максим Катрук — Гитара</li>
                <li>Александр Ивашкин — Клавиши</li>
                <li>Дмитрий Стульнев — Барабаны</li>
            </ul>

            <h3 style={subheadingStyle}>💥 Хотите музыкальное шоу помасштабнее?</h3>
            <p style={textStyle}>
                Для особенных мероприятий мы расширяем состав до 8 человек, добавляя трубу и тромбон. Усиленная медная секция — это абсолютный вау-эффект, который вы не забудете!
            </p>

            <p style={contactStyle}>
                <a href="tel:+79051797560" style={{color: '#FFD700'}}>+7 (905) 179-75-60</a> — Александр (звоните, чтобы заказать выступление!)
            </p>
        </div>
    );
};

export default Persons;
