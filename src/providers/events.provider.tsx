import Config from '@/config';
import { EventSubscriber } from '@/types/general.type';
import Utils from '@/utils';
import { ReactNode, createContext, useContext, useState } from 'react';

type ProviderState = {
  getTopics: typeof Config.events.topics;
  on: (topic: string, func: (metadata: Record<string, any>) => void) => string;
  emit: (topic: string, metadata: Record<string, any>) => void;
  off: (id: string) => void;
};

export const EventsContext = createContext<ProviderState>({
  getTopics: [],
  on: () => '',
  emit: () => {},
  off: () => {},
});

type ProviderProps = {
  children: ReactNode;
};

export const EventsProvider = ({ children }: ProviderProps) => {
  const [subscribers, setSubscribers] = useState<EventSubscriber[]>([]);

  const getTopics = Config.events.topics;

  const on = (topic: string, func: (metadata: Record<string, any>) => void) => {
    if (!getTopics.includes(topic)) return '';
    const id = Utils.text.random(10);
    setSubscribers([...subscribers, { id, topic, func }]);
    return id;
  };

  const emit = (topic: string, metadata: Record<string, any>) => {
    if (!getTopics.includes(topic)) return;
    subscribers.forEach((subs) => {
      if (subs.topic == topic) {
        subs.func(metadata);
      }
    });
  };

  const off = (id: string) => {
    setSubscribers((prev) => {
      return prev.filter((subs) => subs.id != id);
    });
  };

  return (
    <EventsContext.Provider value={{ getTopics, on, emit, off }}>{children}</EventsContext.Provider>
  );
};

export const useEvents = () => {
  return useContext(EventsContext);
};
