import React, { Suspense, useMemo, lazy, FC } from 'react';
import styles from './App.module.css';
import { TVShell } from '../components/TV/TVShell/index';
import { BottomNavigation } from '../components/organisms/Navigation/index';
import { useChannelTransition } from '../hooks/useChannelTransition';
import Loader from '../components/atoms/Loader/Loader';
import { Providers } from './providers/index';

// Lazy load all channel components
const HomeChannel = lazy(() => import('../channels/CH01-Home/index')) as FC;
const AboutChannel = lazy(() => import('../channels/CH02-About/index')) as FC;
const BandChannel = lazy(() => import('../channels/CH03-Band/index')) as FC;
const ShowsChannel = lazy(() => import('../channels/CH04-Shows/index')) as FC;
const MediaChannel = lazy(() => import('../channels/CH05-Media/index')) as FC;
const ContactChannel = lazy(() => import('../channels/CH06-Contact/index')) as FC;

const channelMap: Record<string, React.FC<{}>> = {
    'CH01': HomeChannel,
    'CH02': AboutChannel,
    'CH03': BandChannel,
    'CH04': ShowsChannel,
    'CH05': MediaChannel,
    'CH06': ContactChannel,
};

const channelColorMap: Record<string, 'purple' | 'gold' | 'blue' | 'red' | 'white'> = {
    'CH01': 'purple',
    'CH02': 'gold',
    'CH03': 'purple',
    'CH04': 'red',
    'CH05': 'blue',
    'CH06': 'gold',
};

const ChannelComponent: React.FC<{ channelId: string }> = ({ channelId }) => {
    const Component = channelMap[channelId] || HomeChannel;
    return <Component />;
};

import { ChannelHeader } from '../components/molecules/ChannelHeader';


const AppContent: React.FC = () => {
    const { channelToRender, shouldRender } = useChannelTransition();
    const ambientColor = useMemo(() => channelColorMap[channelToRender] || 'purple', [channelToRender]);

    return (
        <TVShell ambientColor={ambientColor} channelId={channelToRender}>
            {/* Header and Nav are outside the animated/scrolling container */}
            <ChannelHeader channelId={channelToRender.substring(0, 5)} />
            
            <div className={styles.channelContainer}>
                <Suspense fallback={<Loader variant="bars" size="lg" />}>
                    <div className={`${styles.channelContent} ${shouldRender ? styles.visible : ''}`}>
                        <ChannelComponent channelId={channelToRender} />
                    </div>
                </Suspense>
            </div>

            <BottomNavigation />
        </TVShell>
    );
};

export const App: React.FC = () => {
    return (
        <Providers>
            <AppContent />
        </Providers>
    );
};
