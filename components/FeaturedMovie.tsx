export interface IFeaturedMovie {
  item: {
    genres: { name: string }[]
    overview: string
    backdrop_path: string
    original_name: string
    vote_average: number
    number_of_seasons: number
    first_air_date: string
    id: number
  }
}

/**
 * Featured movie as background hero
 */

export default function FeaturedMovie({ item }: IFeaturedMovie) {
  let firstDate = new Date(item.first_air_date)

  let genres = []
  for (let i in item.genres) {
    genres.push(item.genres[i].name)
  }

  let descr = item.overview
  if (descr.length > 200) {
    descr = descr.substring(0, 200) + "..."
  }

  if (!item) return null

  return (
    <>
      <section
        className="featured"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
        }}
      >
        <div className="featured--vertical">
          <div className="featured--horizontal">
            <div className="featured--name">{item.original_name}</div>
            <div className="featured--info">
              <div className="featured--points">{item.vote_average} pontos</div>
              <div className="featured--year">{firstDate.getFullYear()}</div>
              <div className="featured--seasons">
                {item.number_of_seasons} temporada
                {item.number_of_seasons !== 1 ? "s" : ""}
              </div>
            </div>
            <div className="featured--description">{descr}</div>
            <div className="featured--buttons">
              <a href={`/watch/${item.id}`} className="featured--watchbutton">
                ► Assistir
              </a>
              <a
                href={`/list/add/${item.id}`}
                className="featured--mylistbutton"
              >
                + Minha Lista
              </a>
            </div>
            <div className="featured--genres">
              Gêneros: <strong> {genres.join(", ")} </strong>
            </div>
          </div>
        </div>
      </section>

      <style jsx>
        {`
          .featured {
            height: 100vh;
            width: 100vw;
            background-color: #111;
            color: #fff;
            margin: 0;
            font-family: "Roboto", sans-serif;
          }

          .featured--vertical {
            width: inherit;
            height: 100vh;
            background: linear-gradient(to top, #111 10%, transparent);
            overflow: hidden;
          }

          .featured--horizontal {
            width: inherit;
            height: inherit;
            background: linear-gradient(to right, #000 30%, transparent 70%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 30px;
            padding-bottom: 150px;
            padding-top: 70px;
          }

          .featured--name {
            font-size: 60px;
            font-weight: bold;
          }

          .featured--info {
            font-size: 18px;
            font-weight: bold;
            margin-top: 15px;
            display: flex;
            flex-direction: row;
          }

          .featured--points {
            color: #46d369;
          }

          .featured--year {
            margin: 0 10px;
          }

          .featured--description {
            margin-top: 15px;
            font-size: 20px;
            color: #999;
            max-width: 40%;
          }

          .featured--buttons {
            margin-top: 15px;
          }

          .featured--mylistbutton,
          .featured--watchbutton {
            display: inline-block;
            font-size: 20px;
            font-weight: bold;
            padding: 12px 25px;
            border-radius: 5px;
            text-decoration: none;
            margin-right: 10px;
            opacity: 1;
            transition: all ease 0.2s;
          }

          .featured--mylistbutton:hover,
          .featured--watchbutton:hover {
            opacity: 0.7;
          }
          .featured--watchbutton {
            background-color: #fff;
            color: #000;
          }

          .featured--mylistbutton {
            background-color: #333;
            color: #fff;
          }

          .featured--genres {
            margin-top: 15px;
            font-size: 18px;
            color: #999;
          }

          @media (max-width: 760px) {
            .featured {
              height: 90vh;
            }
            .featured--name {
              font-size: 40px;
            }
            .featured--info {
              font-size: 16px;
            }
            .featured--description {
              font-size: 14px;
              max-width: 100%;
              margin-right: 30px;
            }
            .featured--mylistbutton,
            .featured--watchbutton {
              font-size: 10px;
            }
            .featured--genres {
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  )
}
