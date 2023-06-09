import { FC, PropsWithChildren, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '@/interfaces';

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
          {
               _id: uuidv4(),
               description: 'Pendiente: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
               status: 'pending',
               createdAt: Date.now(),
          },
          {
               _id: uuidv4(),
               description: 'En-Progreso: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...',
               status: 'in-progress',
               createdAt: Date.now() - 1000000,
          },
          {
               _id: uuidv4(),
               description: 'Terminadas: Cras scelerisque vestibulum euismod. Pellentesque finibus eleifend porttitor',
               status: 'finished',
               createdAt: Date.now() - 100000,
          },
    ],
}

export const EntriesProvider:FC<PropsWithChildren> = ({ children }) => {
     const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)
     return (
          <EntriesContext.Provider value={{
               ...state,
          }}>
               { children }
          </EntriesContext.Provider>
    )
}