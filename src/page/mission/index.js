import React from 'react';
import './index.css';
import { useQuery, gql } from '@apollo/client';
import imageNotFound from '../../assets/images/not-found-image.jpg';

export default function index() {
  const id = window.location.pathname.slice(9);
  console.log(id)
  const LAUNCH = gql`{
    launch(id: ${id}) {
      mission_name
      details
      links {
        article_link
        flickr_images
        video_link
      }
    }
  }`

  const MissionData = () => {
    const { loading, error, data } = useQuery(LAUNCH)

    if(loading) {
      return (
        <div className='mission'>
          <div className="container">
            <section className="content-loading">
              <div className="loading">
              </div>
            </section>
          </div>
        </div>
      )
    }

    if(error) return <p>Error: {error}</p>

    const { mission_name, details, links: { article_link, flickr_images, video_link }} = data.launch

    return (
      <div className='mission'>
        <div className="container">
          <section className="content">
            <img src={flickr_images[0] ? flickr_images[0] : imageNotFound} alt={mission_name}/>
            <div className="data">
              <h2>{mission_name}</h2>
              <p>{details}</p>
              <a href={article_link ? article_link : video_link} target="_blank" rel="noopener noreferrer">See More</a>
            </div>
          </section>
        </div>
      </div>
    )
  }

  return (
    <div>
      <MissionData />
    </div>
  )
}
