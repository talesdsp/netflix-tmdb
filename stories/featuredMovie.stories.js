import React from "react"
import FeaturedMovie from "../components/FeaturedMovie"

export default {
  title: "Featured Movie",
  component: FeaturedMovie,
}

const FeaturedMovieTemplate = (args) => <FeaturedMovie {...args} />

export const featuredMovie = FeaturedMovieTemplate.bind({})
featuredMovie.args = {
  item: {
    genres: [{ name: "Drama" }, { name: "Action" }],
    overview: "The description text for the series",
    backdrop_path: "/z59kJfcElR9eHO9rJbWp4qWMuee.jpg",
    original_name: "The Flash",
    vote_average: 7.7,
    number_of_seasons: 7,
    first_air_date: "2014-01-16",
    id: 60735,
  },
}
