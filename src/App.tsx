import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router";
import { UserTable, AddUser } from "components";

const App: React.FC = () => {
  const [data, setData] = useState<User[]>([]);

  const getUserDetails = async(): Promise<void> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const jsonData = await response.json()
    setData(jsonData)
    console.log({jsonData})
  }

  const handleAdd = (data: User) => {
    setData((prev) => {
      const newData = structuredClone(prev)
      newData.push(data)
      return newData
    })
  }

  useEffect(()=> {
    getUserDetails()
  }, [])

  const routes = useRoutes([
    { path: "/", element: <UserTable data={data} /> },
    { path: "/addUser", element: <AddUser handleAdd={handleAdd} /> },
  ]);
  return routes;
};

export default App;
