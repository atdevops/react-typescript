import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "../styles/form.module.css"

interface Props {
  handleAdd: Function
}

export const AddUser: React.FC<Props> = ({handleAdd}) => {

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const [city, setCity] = useState<string>('')
  const [company, setCompany] = useState<string>('')

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
      const newObject = {
        id: Math.random(),
        name,
        email,
        address: {
          city,
        },
        company: {
          name: company
        }
      }
      console.log({newObject})
      handleAdd(newObject)
      navigate('/')
  }

  return <form className={styles.form} onSubmit={handleSubmit}>
    <label>Name:</label>
    <input type="text" value={name} onChange={(e)=>setName(e?.target?.value)} />
    <input type="text" value={email} onChange={(e)=>setEmail(e?.target?.value)} />

    <input type="text" value={city} onChange={(e)=>setCity(e?.target?.value)} />

    <input type="text" value={company} onChange={(e)=>setCompany(e?.target?.value)} />
    <button type="submit"> Add User</button>

  </form>
};
