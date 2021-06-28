import React, { createContext, useState } from 'react';

interface BVInterface {
  bettingView: string;
  changeBettingView: any;
}

export const BettingOddsViewContext = createContext<BVInterface>({
  bettingView: '',
  changeBettingView: null,
}); //SOS

const BettingOddsViewProvider: React.FC = ({ children }) => {
  const [bettingView, setBettingView] = useState('fractional');

  const changeBettingView = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBettingView(e.target.value);
  return (
    <BettingOddsViewContext.Provider value={{ bettingView, changeBettingView }}>
      {children}
    </BettingOddsViewContext.Provider>
  );
};

export default BettingOddsViewProvider;
