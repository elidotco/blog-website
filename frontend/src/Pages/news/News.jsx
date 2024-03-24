import React from "react";
import { Footer, Header, NewsCard } from "../../components";

const News = () => {
  return (
    <div>
      <Header />
      <div className="px-5 md:px-10 lg:px-20 py-20">
        <div className="flex items-center  flex-wrap">
          <h1 className="text-[80px] font-bold">
            Today's Headlines: Stay Informed
          </h1>
          <p className="text-[#98989a]">
            Explore the latest news from around the world. We bring you
            up-to-the-minute updates on the most significant events, trends, and
            stories. Discover the world through our news coverage.
          </p>
        </div>
      </div>
      <NewsCard
        index={1}
        imglink="https://shorturl.at/dmwRU"
        title="Global Climate Summit Addresses Urgent Climate Action"
        desc="World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets."
      />
      <Footer />
    </div>
  );
};

export default News;
