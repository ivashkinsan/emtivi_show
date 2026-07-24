import { useState, useEffect } from 'react';
import { useChannelStore } from '../store';

/**
 * Manages the transition between channels to allow for exit animations.
 * It delays the rendering of the next channel until the `isSwitching`
 * state from the store becomes false.
 */
export const useChannelTransition = () => {
  const { currentChannel, isSwitching } = useChannelStore();
  const [channelToRender, setChannelToRender] = useState(currentChannel);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isSwitching) {
      // Start exit animation
      setShouldRender(false);
    } else {
      // isSwitching is false, means timeout is over
      // Update the channel to be rendered and start enter animation
      setChannelToRender(currentChannel);
      setShouldRender(true);
    }
  }, [isSwitching, currentChannel]);

  return { channelToRender, shouldRender };
};
