import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Card/Card";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-20">
        {/* first cart */}
        {data.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>

      {/* new arival phone */}
      <h2 className="text-center text-3xl font-bold underline">
        New Arrival Phones
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div class="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img
              src="https://i.ibb.co/vPbnf9P/apple-iphone-15-pro-max-1.jpg"
              class=" w-full object-cover"
            />
          </div>
          <div class="p-6">
            <div class="mb-2 flex items-center justify-between">
              <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                iPhone 15 Pro Max
              </p>
              <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                $95.00
              </p>
            </div>
            <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              You still get a 6.7-inch OLED display with a 2796 x 1290
              resolution and a 120Hz variable refresh rate. Brightness levels
              are also the same, delivering 1,000 nits for typical max
              brightness, 1,600 nits for viewing HDR content, and up to 2,000
              nits for peak outdoor brightness.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* second arival phone */}
        <div class="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img
              src="https://i.ibb.co/PMJ5GVv/google-pixel-8-pro-1.jpg"
              class=" w-full object-cover"
            />
          </div>
          <div class="p-6">
            <div class="mb-2 flex items-center justify-between">
              <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                Google Pixel 8 Pro
              </p>
              <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                $75.00
              </p>
            </div>
            <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              Fully upgraded cameras and never-before-seen editing. Polished
              aluminum frame and matte back glass. The power and brains behind
              Pixel 8 Pro. The new Google Tensor G3 chip is custom-designed with
              Google AI for cutting-edge photo and video features and smarter
              ways to help throughout the day.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* users review */}

      <div class="pb-5">
        <div class="container flex flex-col items-center justify-center w-full p-6 mx-auto mt-4 text-center xl:px-0">
          <div class="text-3xl font-bold tracking-wider uppercase underline">
            Customer review
          </div>
          <h2 class="max-w-2xl  text-3xl font-bold leading-snug tracking-tight  lg:leading-tight lg:text-4xl dark:text-white">
            Here&#x27;s what our customers said
          </h2>
          <p class="max-w-2xl  text-lg leading-normal  lg:text-xl xl:text-xl ">
            A customer review is an evaluation of a product or service made by
            someone who has purchased and used, or had experience with, a
            product or service. Customer reviews are a form of customer feedback
            on electronic commerce and online shopping sites.
          </p>
        </div>
        <div class="container p-6 mx-auto mb-10 xl:px-0">
          <div class="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
            <div class="lg:col-span-2 xl:col-auto">
              <div class="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                <p>
                  I recently visited this mobile shop and was pleasantly
                  surprised by the wide variety of mobile phones they had on
                  display. The staff was friendly and knowledgeable, assisting
                  me in finding the perfect phone to suit my needs and budget.
                  The prices were competitive, and they even had some great
                  ongoing promotions. The only reason I'm not giving it a 5-star
                  rating is because the store was a bit crowded and could use a
                  bit more organization. Overall, a good experience!
                </p>
                <div class="flex items-center mt-8 space-x-3">
                  <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                    <img
                      alt="Avatar"
                      src="https://i.ibb.co/8bVcJCy/361587381-3758661557789739-8841199669191703801-n-1.jpg"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div class="text-lg font-medium">Rifat</div>
                    <div class="text-gray-600 dark:text-gray-400">
                      VP Sales at Google
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="flex flex-col justify-between w-full h-full bg-gray-100 px-6 py-6 bg-gray-100md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                <p>
                  I had a disappointing experience at this mobile shop. The
                  staff seemed disinterested in assisting customers, and I had
                  to wait for a considerable amount of time before someone
                  attended to me. When I finally got assistance, the salesperson
                  was not very knowledgeable about the products and couldn't
                  answer my questions. The prices were high compared to other
                  stores I've visited. The only positive aspect was the store's
                  location, which was convenient. Overall, I wouldn't recommend
                  this shop.
                </p>
                <div class="flex items-center mt-8 space-x-3">
                  <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                    <img
                      alt="Avatar"
                      src="https://i.ibb.co/cv90trg/332704208-704932394672905-5529177286644284178-n-1.jpg"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div class="text-lg font-medium">Rakib</div>
                    <div class="text-gray-600 dark:text-gray-400">
                      Lead marketer at Website{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="flex flex-col justify-between w-full bg-gray-100 h-full px-6 py-6 bg-gray-100md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                <p>
                  I am extremely satisfied with my experience at this mobile
                  shop. The staff was exceptionally helpful and patient in
                  guiding me through the various phone options and plans
                  available. They took the time to understand my requirements
                  and offered the perfect recommendations. The store was
                  well-organized and clean, making it easy to browse and compare
                  products. Additionally, they had some fantastic deals that
                  made my purchase even more worthwhile. I highly recommend this
                  mobile shop for anyone looking to buy a new phone!
                </p>
                <div class="flex items-center mt-8 space-x-3">
                  <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                    <img
                      alt="Avatar"
                      src="https://i.ibb.co/Ct9z2nd/272659629-3334559676866598-6122847521370266447-n.jpg"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div class="text-lg font-medium">Rohan</div>
                    <div class="text-gray-600 dark:text-gray-400">
                      Co-founder of Mobile company
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
