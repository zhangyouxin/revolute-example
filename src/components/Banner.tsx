import { Carousel } from "./Carousel";

export const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-lg gap-4 md:gap-6 pt-8">
      <h1 className="banner-title text-[2rem] self-start md:self-auto leading-none font-black uppercase px-4">
        Make your spend, well-spent
      </h1>
      <p className="text-[1.2rem]  md:text-[1.75rem] leading-[1.5rem] md:leading-[2rem] md:text-center  max-w-[80rem] px-4">
        Updating your wardrobe? Get cashback. When in Japan? Spend in Yen. Big
        life goals? Reach them faster. However you spend — Revolut is all you
        need.
      </p>

      <button className="bg-black text-white px-6 py-2.5 rounded-full self-start md:self-auto mx-4">
        Get started
      </button>

      <Carousel />
    </div>
  );
};
