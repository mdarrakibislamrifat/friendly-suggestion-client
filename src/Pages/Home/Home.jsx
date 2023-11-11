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
        Historic Place
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div class="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img
              src="https://i.ibb.co/8zjBzVB/hatirjhil.webp"
              class=" w-full object-cover"
            />
          </div>
          <div class="p-6">
            <div class="mb-2 flex items-center justify-between">
              <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                Hatirjheel
              </p>
              <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                $95.00
              </p>
            </div>
            <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            The wetlands' name, Hatirjheel, comes from the fact that the elephants of Dhaka's Pilkhana used to bathe there. The Elephant Road and Hatirpool were used to transport the elephants to the marshes in Hatirjheel, which is, now a recreational site, easing traffic congestion for the citizens
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              go to visit
            </button>
          </div>
        </div>

        {/* second arival phone */}
        <div class="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img
              src="https://i.ibb.co/cbDgGQf/palacio-cor-de-rosa.jpg"
              class=" w-full object-cover"
            />
          </div>
          <div class="p-6">
            <div class="mb-2 flex items-center justify-between">
              <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                Ahsan Manjil
              </p>
              <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                $75.00
              </p>
            </div>
            <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            Ahsan Manzil is one of the most significant architectural monuments of Bangladesh. The building structure was established on a raised platform of 1 meter, the two-storied palace measures 125.4 m by 28.75 m. The height of the first floor is 5 meters and the height of the first floor is 5.8 meters.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Go To Visit
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
          Your friendly location suggestion website stands out as a delightful companion for explorers and adventurers alike. The user-friendly interface makes it easy for visitors to discover hidden gems and popular destinations alike. The thoughtful curation of locations ensures a diverse range of options, catering to various preferences.
          </p>
        </div>
        <div class="container p-6 mx-auto mb-10 xl:px-0">
          <div class="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
            <div class="lg:col-span-2 xl:col-auto">
              <div class="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                <p>
                I stumbled upon friendly suggestion while searching for a platform to share and receive friendly suggestions. The interface is so user-friendly, making it a breeze to navigate and submit my ideas. I love the positive and supportive community here. The suggestions I received were not only helpful but also encouraging. This site has truly made a positive impact on my decision-making process. Kudos to the team behind friendly suggestion!
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
                friendly suggestion is a fantastic space for creative minds seeking inspiration and feedback. I've been using it for a few weeks now, and the diverse range of suggestions I've received has fueled my creativity. The only reason I'm not giving it a full five stars is that I wish there were more categories for suggestions. Nonetheless, the community is welcoming, and the feedback I've received has been constructive. Great job, team!
                </p>
                <div class="flex items-center mt-8 space-x-3">
                  <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                    <img
                      alt="Avatar"
                      src="https://i.ibb.co/LCvGkSp/269847802-1316739332130699-3863527174668482195-n.jpg"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div class="text-lg font-medium">Shihab</div>
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
                I can't express how grateful I am to have found [Your Website Name]. It's more than just a suggestion platform; it's a supportive community that genuinely cares about helping each other. The personalized suggestions I've received have been invaluable in making important decisions. The positive vibes on this site are contagious, and it's become a go-to place for me whenever I need friendly advice. Thank you, [Your Website Name], for creating such a wonderful online space!
                </p>
                <div class="flex items-center mt-8 space-x-3">
                  <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                    <img
                      alt="Avatar"
                      src="https://i.ibb.co/xKnyTy0/289778541-3322455734678746-473716568199081736-n.jpg"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div class="text-lg font-medium">Ronok</div>
                    <div class="text-gray-600 dark:text-gray-400">
                      Co-founder 
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
