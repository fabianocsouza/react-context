import { useEffect, useState, createContext, useContext } from 'react'

export const AuthContext = createContext({});


export const AuthProvider = (props) => {
  const [user, setUser ] = useState({name: ''}) 

  
  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if(userStorage){
      setUser(JSON.parse(userStorage))
    }else {
      setUser({name:''});
    }
  }, []);


  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);