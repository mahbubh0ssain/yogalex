const Membership = () => {
  const cardInfo = [
    {
      type: "Weekly Card",
      price: 100,
      duration: " For 1 Week",
      features: [
        "Group Classes",
        "Discuss Fitness Goals",
        "-",
        "Fitness Orientation",
      ],
    },
    {
      type: "Monthly Card",
      price: 200,
      duration: " For 1 Month",
      features: [
        "Group Classes",
        "Discuss Fitness Goals",
        "Group Trainer",
        "Fitness Orientation",
      ],
    },
    {
      type: "Yearly Card",
      price: 500,
      duration: " For 1 Year",
      features: [
        "Onetime Access To All Club",
        "Discuss Fitness Goals",
        "Group Trainer",
        "Fitness Orientation",
      ],
    },
  ];

  return (
    <div className="my-12 bg-[#FAFAFA] py-6">
      <h1 className="font-thin text-6xl text-center text-black my-5">
        Membership Cards
      </h1>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3 mb-12  px-6">
        {cardInfo?.map((card, i) => (
          <div
            key={i}
            className="card w-full bg-[#FFFFFF] text-black mx-auto text-center mb-6 "
          >
            <div className="card-body">
              <h2 className="text-2xl">{card.type}</h2>
              <h1 className="text-5xl font-bold text-[#E2B9D4]">
                ${card.price}
              </h1>
              <h2 className="text-xl">{card.duration}</h2>
              <>
                {card.features.map((feature, i) => (
                  <p className="text-lg" key={i}>
                    {feature}
                  </p>
                ))}
              </>
              <div className="justify-center -mb-14">
                <button className="btn w-2/4 ">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
