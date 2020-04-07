import React, { useEffect, useState } from 'react'
import { Image } from './styles'
import { Masonry } from 'masonic'
// import Unsplash from 'unsplash-js'

// const unsplash = new Unsplash({ accessKey: 'mJoHrC8s8iUuDRGMvW9wfuXU7oR8aLLltP79PWrUAaA' })
const data = require('./data-example.json')

function useImagesData () {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    // unsplash.search.photos('greyhounds', 1, 50)
    //   .then(res => res.json())
    //   .then(response => {
    //     setImages(response)
    //     setLoading(false)
    //   })
    setTimeout(() => {
      setImages(data.results)
      setLoading(false)
    })
  }, [])

  return { images, loading }
}

const MasonryCard = ({ data }) => <Image src={data.urls.regular} />

export const ImagesGrid = () => {
  const { images, loading } = useImagesData()

  return (
    <>
      {loading ? <div>Loading!</div> : (
        <Masonry
          items={images}
          render={MasonryCard}
          columnGutter={10}
          columnWidth={372}
          overscanBy={8}
        />)}
    </>
  )
}
