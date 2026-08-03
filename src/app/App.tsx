import React, { Suspense, useMemo, lazy, FC, useState, useEffect } from 'react';
import styles from './App.module.css';
import { TVShell } from '../components/TV/TVShell/index';
import { BottomNavigation } from '../components/organisms/Navigation/index';
import { useChannelTransition } from '../hooks/useChannelTransition';
import { usePageLoading } from '../hooks/usePageLoading';
import Loader from '../components/atoms/Loader/Loader';
import TransitionLoader from '../components/atoms/Loader/TransitionLoader';
import { Providers } from './providers/index';
import { ChannelHeader } from '../components/molecules/ChannelHeader';

// Helper for lazy loading with minimum delay
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
const lazyWithDelay = (importFn: () => Promise<any>, ms: number = 3000) => {
    return lazy(() => Promise.all([importFn(), delay(ms)]).then(([module]) => module));
}

// Lazy load all channel components
const HomeChannel = lazyWithDelay(() => import('../channels/CH01-Home/index')) as FC;
const AboutChannel = lazyWithDelay(() => import('../channels/CH02-About/index')) as FC;
const BandChannel = lazyWithDelay(() => import('../channels/CH03-Band/index')) as FC;
const ShowsChannel = lazyWithDelay(() => import('../channels/CH04-Shows/index')) as FC;
const MediaChannel = lazyWithDelay(() => import('../channels/CH05-Media/index')) as FC;
const ContactChannel = lazyWithDelay(() => import('../channels/CH06-Contact/index')) as FC;
const Test3DChannel = lazyWithDelay(() => import('../channels/CH07-Test3D/index')) as FC;
const AnniversaryChannel = lazyWithDelay(() => import('../channels/CH08-Anniversary/index')) as FC;

const channelMap: Record<string, React.FC<{}>> = {
    'CH01': HomeChannel,
    'CH02': AboutChannel,
    'CH03': BandChannel,
    'CH04': ShowsChannel,
    'CH05': MediaChannel,
    'CH06': ContactChannel,
    'CH07': Test3DChannel,
    'CH08': AnniversaryChannel,
};

const channelColorMap: Record<string, 'purple' | 'gold' | 'blue' | 'red' | 'white'> = {
    'CH01': 'purple',
    'CH02': 'gold',
    'CH03': 'purple',
    'CH04': 'red',
    'CH05': 'blue',
    'CH06': 'gold',
    'CH08': 'white',
};

const ChannelComponent: React.FC<{ channelId: string }> = ({ channelId }) => {
    const Component = channelMap[channelId] || HomeChannel;
    return <Component />;
};

const AppContent: FC = () => {
    const { channelToRender, shouldRender } = useChannelTransition();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isShrinking, setIsShrinking] = useState(false);

    useEffect(() => {
        // 3 секунды лоадера
        const timer = setTimeout(() => {
            setIsShrinking(true); // Запуск схлопывания лоадера
            setTimeout(() => {
                setIsLoaded(true); // Запуск разворачивания приложения
            }, 500); // время анимации схлопывания лоадера
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const ambientColor = useMemo(() => channelColorMap[channelToRender] || 'purple', [channelToRender]);

    return (
        <>
            {/* Начальный лоадер */}
            {!isLoaded && (
                <div className={`${styles.loadingWrapper} ${isShrinking ? styles.shrinking : ''}`}>
                    <Loader variant="bars" size="lg" />
                </div>
            )}
            
            {/* Основное окно */}
            <div className={`${styles.contentWrapper} ${isLoaded ? styles.isLoaded : ''}`}>
                <Suspense fallback={
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
                        <TransitionLoader variant="bars" size="lg" />
                    </div>
                }>
                    <TVShell ambientColor={ambientColor} channelId={channelToRender}>
                        <ChannelHeader channelId={channelToRender.substring(0, 5)} />
                        
                        <div className={styles.channelContainer}>
                            <div className={`${styles.channelContent} ${shouldRender ? styles.visible : ''}`}>
                                <ChannelComponent channelId={channelToRender} />
                            </div>
                        </div>

                        <BottomNavigation />
                    </TVShell>
                </Suspense>
            </div>
        </>
    );
};


export const App: React.FC = () => {
    return (
        <Providers>
            <AppContent />
        </Providers>
    );
};
