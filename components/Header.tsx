export interface IHeader {
  /**
   * Toggle transparent or black background color
   */
  black?: boolean
}

/**
 * Root navigation bar with logo and user profile
 */

export default function Header({ black = false }: IHeader) {
  return (
    <>
      <header className={black ? "black" : ""}>
        <div className="header--logo">
          <img
            width="70"
            height="50"
            src="http://nativeadvertisinginstitute.com/wp-content/uploads/2015/03/Netflix_Logo_Digital-Video.png"
          />
        </div>
        <div className="header--user">
          <img
            width="35"
            height="35"
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          />
        </div>
      </header>

      <style jsx>
        {`
          header {
            position: fixed;
            z-index: 999;
            top: 0px;
            left: 0px;
            right: 0px;
            height: 70px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 30px;
            background: transparent;
            transition: all ease 0.5s;
          }
          header.black {
            background: #141414;
          }
          .header--logo {
          }

          .header--logo img {
            height: 100%;
          }

          .header--user {
          }

          .header--user img {
            height: 100%;
            border-radius: 3px;
          }
        `}
      </style>
    </>
  )
}
