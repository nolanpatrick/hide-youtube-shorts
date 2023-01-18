// ==UserScript==
// @name     HideShorts
// @version  1
// @grant    none
// @match    https://*.youtube.com/
// ==/UserScript==

// by Nolan Adams
// January 2023

function hide_shorts() {
  // Find all links
	shorts_links = document.getElementsByTagName('a')

  // Iterate through all links
  for (let i = 0; i < shorts_links.length-1; i++)
  {
    //console.log(shorts_links[i].href);
    
    // Hide links (and supporting elements) if link contains 'shorts/'
    if (shorts_links[i].href.includes('shorts/'))
    {
      //console.log('Hiding shorts video'); 
      shorts_links[i].hidden = true;
      shorts_links[i].parentElement.hidden = true;
      shorts_links[i].parentElement.parentElement.hidden = true;
      shorts_links[i].parentElement.parentElement.parentElement.hidden = true
    }
    
    // Hide Shorts button on sidebar
    if (shorts_links[i].title == 'Shorts')
    {
    	shorts_links[i].hidden = true;
    }
  }
  
  // Search for span elements
  shelves = document.getElementsByTagName('span')
  
  // Iterate through all spans
  for (let i = 0; i < shelves.length-1; i++)
  {
    // If span content is 'Shorts', hide entire shelf
    if (shelves[i].textContent == 'Shorts')
    {
      shelves[i].hidden = true;
      shelves[i].parentElement.hidden = true;
      shelves[i].parentElement.parentElement.hidden = true;
      shelves[i].parentElement.parentElement.parentElement.hidden = true;
    }
  }
}


// Run once upon page loading, then run periodically to catch newly-loaded content
setTimeout(hide_shorts, 500)
setInterval(hide_shorts, 5000)