## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./src/Components/Images/project-screenshot.png)

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
- Netlify and GitHub pages for continous deployment

### What I learned

```React js
  using function components:
    export default function Navbar() {
      ...
      return(
        <div className="navbar">
          ...
        </div>
      )
    }
```

```React js
using state :
  import React, { useState } from 'react'
  ...
  const [displayMenu, setDisplayMenu] = useState(false)
}

then passing it to child using contextApi:
  export const PortfolioContext = React.createContext()
  ...
  <PortfolioContext.Provider
				value={{ isPortrait, handleShowMenu, displayMenu }}>
				....
			</PortfolioContext.Provider>

and accesing in a consumer componet(child):
  import React, { useContext } from 'react'
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

### Continued development

-Use React Router to add another page for a cv or cover letter
-Refactor the naming of the componets to make them more re-usable

### Useful resources

- [React Basics](https://reactjs.org) - This helped me with understanding the basic react concepts. I really liked how they kept everyting simple and good explanations.

- [contextApi](https://medium.com/nerd-for-tech/using-context-api-in-react-with-functional-components-dbc653c7d485) - This is an amazing article which helped me finally understand how to pass props from parent component to child using [contextApi]. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/stormFred)
