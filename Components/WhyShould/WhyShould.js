const WhyShould = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[1440px] mx-auto">
      <img
        className="hidden lg:block"
        src="https://i.ibb.co/Jrc6sGK/indian-yogi-yogi-madhav-8-Nt8-AR38-T0-I-unsplash.jpg"
        alt=""
      />
      <div className="text-black flex flex-col justify-center p-6">
        <h1 className="font-thin text-6xl mb-3">Why You Should Go To Yoga</h1>
        <p className="text-2xl font-thin mb-3">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <ul className="text-3xl font-thin">
          <li> ✅ Yoga boosts brain power</li>
          <li> ✅ Yoga helps you to breathe better</li>
          <li> ✅ Yoga improves your strength</li>
          <li> ✅ Yoga helps you to focus</li>
          <li> ✅ Yoga helps give meaning to your day</li>
        </ul>
      </div>
    </div>
  );
};

export default WhyShould;
