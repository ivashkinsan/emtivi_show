import { create } from 'zustand';

interface ChannelState {
  currentChannel: string;
  previousChannel: string | null;
  isSwitching: boolean;
  setChannel: (channelId: string) => void;
  switchChannel: (channelId: string) => Promise<void>;
}

export const useChannelStore = create<ChannelState>((set, get) => ({
  currentChannel: 'CH01',
  previousChannel: null,
  isSwitching: false,

  setChannel: (channelId: string) => {
    if (get().isSwitching || get().currentChannel === channelId) return;
    set(state => ({
      previousChannel: state.currentChannel,
      currentChannel: channelId,
    }));
  },

  switchChannel: async (channelId: string) => {
    if (get().isSwitching || get().currentChannel === channelId) return;

    set({ isSwitching: true });
    
    // Wait for the channel switch animation
    await new Promise(res => setTimeout(res, 450));

    set(state => ({
      previousChannel: state.currentChannel,
      currentChannel: channelId,
      isSwitching: false,
    }));
  },
}));
