import React from 'react';
import styles from './Contact.module.css';
import { ChannelHeader } from '../../components/molecules/ChannelHeader';
import { ContactForm } from './components/ContactForm';
import { SocialLinks } from './components/SocialLinks';
import Button from '../../components/atoms/Button/Button';
import { useScrollReveal } from '../../hooks';

const AnimatedContactSection = ({ children }: { children: React.ReactNode }) => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.2, triggerOnce: true });
    return (
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`${styles.section} ${isVisible ? styles.visible : ''}`}>
            {children}
        </div>
    );
};


export const ContactChannel: React.FC = () => {
    return (
        <div className={styles.container}>
            <ChannelHeader>CH 06 | CONTACT | LIVE</ChannelHeader>

            <AnimatedContactSection>
                <div className={styles.mainContact}>
                    <a href="tel:+79051797560" className={styles.phone}>+7 905 179 75 60</a>
                    <span className={styles.contactPerson}>(Александр)</span>
                    <Button href="tel:+79051797560" variant="primary" size="lg">Позвонить</Button>
                </div>
            </AnimatedContactSection>

            <AnimatedContactSection>
                <ContactForm />
            </AnimatedContactSection>
            
            <AnimatedContactSection>
                <SocialLinks />
            </AnimatedContactSection>
        </div>
    );
};

export default ContactChannel;
