// On bookmark created
chrome.bookmarks.onCreated.addListener(async (id, bookmark) => {
  // Load url
  // Cors anywhere
  const load = await fetch(
    `https://cors-anywhere.herokuapp.com/${bookmark.url}`
  );
  //   const load = await fetch(bookmark.url);
  const html = await load.text();

  // Create el
  const el = document.createElement("html");
  el.innerHTML = html;

  // Get javascript tag with id __NEXT_DATA__
  const script = el.querySelector("script#__NEXT_DATA__");
  // Get innerText to json
  const json = JSON.parse(script.innerText);
  const data = json.props.pageProps.productConfigResult.data;

  // Get info
  const name = data.name;
  const price = data.price;
  const maxPrice = data.max_price;
  const minPrice = data.min_price;

  console.log(json);
  console.log("Product name : ", name);
  console.log("Product price : ", price);
  console.log("Product max price : ", maxPrice);
  console.log("Product min price : ", minPrice);
  //   console.log(
  //     "Product name : ",
  //     el.querySelector("h1#mcis-pdp-product-title").innerText
  //   );
  //   console.log(
  //     "Product Overprice",
  //     el.querySelectorAll(
  //       'span[data-testid="qa-pdp-specialprice-mobile-product-option"]'
  //     )
  //   );
  //   console.log(
  //     "Product price : ",
  //     el.querySelectorAll(
  //       'span[data-testid="qa-pdp-price-mobile-product-option"]'
  //     )
  //   );
});
