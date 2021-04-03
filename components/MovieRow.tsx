import { NavigateBefore, NavigateNext } from "@material-ui/icons/"
import { useState } from "react"

/**
 * Horizontal list of movie cards
 */
export default function MovieRow({ title, items }) {
  const [scrollX, setScrollX] = useState(0)

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }
    setScrollX(x)
  }
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listW = items.results.length * 150
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60
    }
    setScrollX(x)
  }

  return (
    <>
      <div className="movieRow">
        <h2>{title}</h2>
        <div className="movieRow-left" onClick={handleLeftArrow}>
          {process.env.NODE_ENV == "production" ? (
            <NavigateBefore style={{ fontSize: 50 }} />
          ) : null}
        </div>
        <div className="movieRow-right" onClick={handleRightArrow}>
          {process.env.NODE_ENV == "production" ? (
            <NavigateNext style={{ fontSize: 50 }} />
          ) : null}
        </div>

        <div className="movieRow--listarea">
          <div
            className="movieRow--list"
            style={{
              marginLeft: scrollX,
              width: items.results.length * 150,
            }}
          >
            {items.results.length > 0 &&
              items.results.map((item, key) => (
                <div key={key} className="movieRow--item">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .movieRow {
            color: #fff;
            margin-bottom: 30px;
          }

          .movieRow h2 {
            margin: 0px 0px 0px 30px;
          }

          .movieRow--listarea {
            overflow-x: hidden;
            padding-left: 30px;
          }

          .movieRow--list {
            transition: all ease 0.2s;
          }

          .movieRow--item {
            display: inline-block;
            width: 150px;
            cursor: pointer;
          }

          .movieRow--item img {
            width: 100%;
            transform: scale(0.9);
            transition: all ease 0.2s;
          }

          .movieRow--item img:hover {
            transform: scale(1);
          }

          .movieRow-left,
          .movieRow-right {
            position: absolute;
            width: 40px;
            height: 225px;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 99;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            cursor: pointer;
            opacity: 0;
            transition: all ease 0.2s;
          }

          .movieRow-left {
            left: 0;
          }

          .movieRow-right {
            right: 0;
          }

          .movieRow:hover .movieRow-left,
          .movieRow:hover .movieRow-right {
            opacity: 1;
          }

          @media (max-width: 760px) {
            .movieRow-left,
            .movieRow-right {
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  )
}
