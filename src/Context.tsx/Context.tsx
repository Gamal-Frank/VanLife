import {  createContext, useEffect, useState } from "react";
export interface van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}

interface Props {
    children: React.ReactNode;
  }
  
export const MyContext = createContext<van[]>([]);

const ContextProvider = ({children}:Props) => {

  const [vans, setVans] = useState<van[]>([]);
  
  useEffect(() => {
    fetch("/api/vans")
      .then((data) => {
        return data.json();
      })
      .then((van) => {
        setVans(van.vans);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div>
      <MyContext.Provider value={vans}>
       {children}
      </MyContext.Provider>
    </div>
  );
};


export default ContextProvider;
