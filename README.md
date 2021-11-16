## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

### Links

- GitHub URL: (https://github.com/stormFred/Portfolio)
- Live Site URL:(https://stormfred-portfolio.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Netlify] and [GitHub] pages for continous deployment

### What I learned. React Js

- React Functional_Components:

```React js
    export default function Navbar() {
      ...
      return(
        <div className="navbar">
          ...
        </div>
      )
    }
```

- Using useState:

```React js

  import React, { useState} from 'react'
  ...
  const [displayMenu, setDisplayMenu] = useState(false)
}
```

- Passing props to child using contextApi:

```Reactjs

  export const PortfolioContext = React.createContext()
  ...
  <PortfolioContext.Provider
    value={{ isPortrait, handleShowMenu, displayMenu }}>
    ....
  </PortfolioContext.Provider>
```

- Then, use useContext :

```Reactjs

  import React, { [useContext] } from 'react'
  ...
  const { isPortrait, handleShowMenu, displayMenu } =
		useContext(PortfolioContext)
  ...
  </div>
    {isPortrait ? (
      displayMenu && <Footer handleShowMenu={handleShowMenu} />
    ) : (
      <Footer handleShowMenu={handleShowMenu} />
    )}
  </div>
```

- mediaQuery by using "react-resonsive" library

```
  import { useMediaQuery } from 'react-responsive'
  const isPortrait = useMediaQuery({ query: '(max-width: 750px)' })
```

### Continued development

-Use React Router to add another page for a cv or cover letter
-Refactor the naming of the componets to make them more re-usable

### Useful resources

- [React Basics](https://reactjs.org) - This helped me with understanding the basic react concepts. I really liked how they kept everyting simple and good explanations.

- [contextApi](https://medium.com/nerd-for-tech/using-context-api-in-react-with-functional-components-dbc653c7d485) - This is an amazing article which helped me finally understand how to pass props from parent component to child using contextApi. I'd recommend it to anyone still learning this concept.

- mediaQuery by using react-resonsive
  run: npm install react-responsive --save

## Author

- Twitter - [@FredStorm](https://www.twitter.com/stormFred)
