import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import React, { useEffect, useState } from "react"
import FeaturedMovie from "~/components/FeaturedMovie"
import Header from "~/components/Header"
import MovieRow from "~/components/MovieRow"
import Tmdb from "~/services/Tmdb"

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  movieList,
  featuredData,
}) => {
  const [blackHeader, setblackHeader] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setblackHeader(true)
      } else {
        setblackHeader(false)
      }
    }

    window.addEventListener("scroll", scrollListener)

    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [])

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
        ))}
      </section>
      <footer>
        Todos os direitos das imagens são da Netflix. Dados Extraidos de
        https://www.themoviedb.org/
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif"
            alt="loading"
          ></img>
        </div>
      )}
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({}) => {
  const movieList = await Tmdb.getHomeList()

  const originals = movieList.filter((i) => i.slug === "originals")
  const randomChosen = Math.floor(
    Math.random() * (originals[0].items.results.length - 1),
  )
  const chosen = originals[0].items.results[randomChosen]
  const chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv")
  const featuredData = chosenInfo

  return {
    props: {
      movieList,
      featuredData,
    },
    revalidate: 20,
  }
}
