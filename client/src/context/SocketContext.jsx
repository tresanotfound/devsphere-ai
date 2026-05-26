import { createContext } from 'react';

import socket from '../services/socketService';

export const SocketContext = createContext();

function SocketProvider({ children }) {

  return (

    <SocketContext.Provider value={socket}>

      {children}

    </SocketContext.Provider>
  );
}

export default SocketProvider;