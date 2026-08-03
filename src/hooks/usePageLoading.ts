import { useState, useEffect } from 'react';

type LoadingState = 'loading' | 'shrinking' | 'expanding' | 'finished';

export const usePageLoading = (isLoading: boolean, isAllowedToShrink: boolean) => {
    const [state, setState] = useState<LoadingState>('loading');

    useEffect(() => {
        // Мы начинаем сжатие только если данные загрузились И прошло время (isAllowedToShrink)
        if (!isLoading && isAllowedToShrink && state === 'loading') {
            setState('shrinking');
        }
    }, [isLoading, isAllowedToShrink, state]);

    const handleShrinkEnd = () => {
        console.log('handleShrinkEnd triggered');
        if (state === 'shrinking') {
            setState('expanding');
        }
    };

    const handleExpandEnd = () => {
        console.log('handleExpandEnd triggered');
        if (state === 'expanding') {
            setState('finished');
        }
    };

    return {
        state,
        handleShrinkEnd,
        handleExpandEnd,
    };
};
