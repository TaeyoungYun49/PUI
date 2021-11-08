### Programming Usable Interfaces <br>
Fall 2021 MHCI Carnegie Mellon University <br>
Homework 6B
Website Link: <a href="https://taeyoung-hw-6b.netlify.app/index.html"> Netlify Deployed Website </a>

### <b>Design Updates</b>
1. A low-fidelity prototype and design choices: The cart on the previous design takes up less than half of the page, but I changed it to the full pageview. I decided to change it in order to provide adequate information about the products with sufficient white space. 

2. A high-fidelity digital mockup and design choices:
<a href="https://www.figma.com/file/nRG88n1pAcfixPyXNyiG7v/Interactive-Prototype-(Develop)?node-id=0%3A1">Link to Figma </a>
Considering potential case that the list of products gets longer, I moved the total price section to the right, not below the product list. I also added a button to move the product to a wishlist to keep track of the product they are interested in. 

### <b>Extra Credit</b>
<b>1. The Wishlist Functionality</b> (max 3pts) – implemented on “Bed Pillow detail page” & “Index page”
- Users can add and remove items to their wishlist. I created a separate wishlist page which is accessible by clicking the heart icon on the navigation bar. The wishlist saves the item that the user selected. Only the items with the same filler, color, and pillow type are considered the same item. 
- [Bonus] The heart icon on the “Add to Wishlist” button visually indicates that the item is added to the wishlist. When the item is already in the wishlist, the button text shows “Remove from Wisilist.”

<b>2. Interesting JavaScript functionality</b> (max 3pts)
- The pulsing, blinking, and filling animations were applied to the heart icon to provide a joyful user experience when users add items to the wishlist.
- A text notification pops up when adding items to the shopping cart.
- The shopping cart page correctly calculates the total price based on the user’s selection (Pillow type and filler)

<b>3. Carousel for showcasing similar products</b> (max 5pts) – implemented on "Bed Pillow detail page"
- The carousel can be manually operated using arrow icons on the side but automatically scrolls to the right. 

<b>4. All the product pages are functional and all products can be added to the shopping cart with their options kept.</b> (max 2pts)
