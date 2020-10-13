import React from 'react'
import './main.css'
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'
import Card from '../../component/card/Card'

export default function main() {
  const LAUNCHES_PAST = gql`
    {
      launchesPast(limit: 10) {
        mission_name
        launch_date_local
        id
        details
      }
    }`

  const ListLaunchesPast = () => {
    const {data, error, loading} = useQuery(LAUNCHES_PAST)

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>
    return data.launchesPast.map(({mission_name, launch_date_local, id, details}) => {
      const date = launch_date_local
      .slice(0, 10)
      .split("-")
      .reverse()
      .join("/");

      return (
        <li key={id}>
          <Link to={`/Mission/${id}`}>
            <Card title={mission_name} description={details} date={date}/>
          </Link>
        </li>
      )
    })
  }

  return (
    <div className='main'>
      <div className="container">
        <h1 className="title">List Launches Past</h1>
        <ul>
          <ListLaunchesPast/>
        </ul>
      </div>
    </div>
  )
}
