import React from "react"
import Link from "gatsby-link"

const Menu = () => (
  <div
    style={{
      background: "#1b5e20",

      paddingTop: "15px",
    }}
  >
    <ul
      style={{
        listStyle: "none",

        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <li>
        <Link
          to="/"
          style={{
            color: `black`,
            backgroundColor: `yellow`,
            textDecoration: `underline overline`,
          }}
        >
          Index
        </Link>
      </li>
      <li>
        <Link
          to="/photo"
          style={{
            color: `red`,
          }}
        >
          {" "}
          Photo
        </Link>
      </li>
      <li>
        <Link
          to="/video"
          style={{
            color: `white`,
            backgroundColor: `black`,
          }}
        >
          Video
        </Link>
      </li>
      <li>
        <Link
          to="/politics"
          style={{
            color: `orange`,
          }}
        >
          POL 101Y
        </Link>
      </li>
      <li>
        {" "}
        <Link
          to="/cook"
          style={{
            color: `white`,
            backgroundColor: `black`,
          }}
        >
          Cook
        </Link>
      </li>
      <li>
        <Link to="/code">Code</Link>
      </li>
      <li>
        <Link
          to="/resume"
          style={{
            color: `red`,
            backgroundColor: `white`,
          }}
        >
          Resume
        </Link>
      </li>
    </ul>
  </div>
)

export default Menu
