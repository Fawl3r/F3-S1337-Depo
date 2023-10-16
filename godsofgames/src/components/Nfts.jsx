import React from "react";

const NFTGrid = () => {
  const nfts = [
    {
      index: 1,
      imageUrl: "/images/img1.png",
    },
    {
      index: 2,
      imageUrl: "/images/img2.png",
    },
    {
      index: 3,
      imageUrl: "/images/img3.png",
    },
    {
      index: 4,
      imageUrl: "/images/img4.png",
    },
    {
      index: 5,
      imageUrl: "/images/img5.png",
    },
    {
      index: 6,
      imageUrl: "/images/img6.png",
    },
    {
      index: 7,
      imageUrl: "/images/img7.png",
    },
    {
      index: 8,
      imageUrl: "/images/img8.png",
    },
  ];

  return (
    <div className="container mx-auto h-full  p-4 bg-black my-8" id="nftart">
      <h1 className="text-xl md:text-3xl text-center antialiased font-bold">
        NFT Art Work
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-4">
        {nfts.map((nft, index) => (
          <div key={index} className="p-2 rounded-lg shadow">
            <div
              className="relative w-full h-0"
              style={{ paddingBottom: "100%" }}
            >
              <img
                src={nft.imageUrl}
                alt={`NFT ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover rounded-md hover:shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTGrid;
