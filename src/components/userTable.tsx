import React, { useState } from "react";
import styles from '../styles/table.module.css'
interface Props {
  data: User[]
}

export const UserTable: React.FC<Props> = ({data}) => {
  const [sortedColumn, setSortedColumn] = useState<string>('name')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')


  const handleSort = (columnName: string) => {
    if(sortedColumn === columnName) {
      setSortOrder(sortOrder === 'asc' ? "desc" : 'asc')
    } else {
      setSortedColumn(columnName)
      setSortOrder("asc")
    }
  }

  const sortedData = data.sort((a: any, b: any): number => {
  const valueA = a[sortedColumn]
  const valueB = b[sortedColumn]
  if(valueA < valueB) {
    return sortOrder === 'asc' ? -1 : 1
  }  
  if(valueA > valueB){
    return sortOrder === 'asc' ? 1 : -1
  }
  return 0
  
  })


  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th onClick={() => handleSort('name')}>Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Comapny</th>
        </tr>

      </thead>
      <tbody>
       {sortedData?.map((user, i)=>{
        return<tr key={i}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.address.city}</td>
          <td>{user.company.name}</td>
          </tr>
       })}

      </tbody>
    </table>
  );
};
