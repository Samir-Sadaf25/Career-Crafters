const BestCompanies = () => {
  const companies = [
    {
      name: "Google",
      logo: "https://i.ibb.co/TvvzXfq/google.png",
      vacancy: 10,
    },
    {
      name: "Apple",
      logo: "https://i.ibb.co/r5WyzKm/icons8-apple-logo-100.png",
      vacancy: 10,
    },
    {
      name: "Amazon",
      logo: "https://i.ibb.co/pvG4Ph9/icons8-amazon-logo-96.png",
      vacancy: 10,
    },
    {
      name: "Microsoft",
      logo: "https://i.ibb.co/MhsV6wz/microsoft.png",
      vacancy: 10,
    },
    { name: "Tesla", logo: "https://i.ibb.co/26n3Jp7/tesla.png", vacancy: 10 },
    { name: "IBM", logo: "https://img.icons8.com/?size=100&id=F6H2fsqXKBwH&format=png&color=000000", vacancy: 10 },
  ];

  return (
    <section className="container mx-auto px-4 py-10 bg-white  md:px-10 lg:px-20 mb-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text + Grid */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Find Best Companies
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30,000+ companies worldwide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {companies.map((company, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 border border-gray-200 rounded-md hover:shadow-sm transition"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <h4 className="font-medium text-gray-800">{company.name}</h4>
                  <p className="text-sm text-gray-500">
                    {company.vacancy} vacancy
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <button className="text-blue-600 text-sm font-medium hover:underline">
              See More Companies →
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center items-center">
          <div className="relative  justify-center">
            <img
              src="https://i.ibb.co/QBw6yMY/best-Companies1.jpg"
              alt="Office"
              className="rounded-lg  w-full max-w-md shadow-md"
            />
            <img
              src="https://i.ibb.co/HTQNBfXg/best-Companies2.jpg"
              alt="Office"
              className="absolute rounded-lg z-50 p-2 w-70 h-80 -bottom-10 -left-27 shadow-md"
            />
            <img className="absolute top-48 z-50 -left-11" src="https://img.icons8.com/?size=100&id=63671&format=png&color=000000" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestCompanies;
