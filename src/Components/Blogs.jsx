const Blogs = () => {
  const blogs = [
    {
      title: "11 Tips to Help You Get New Clients Through Cold Calling",
      category: "Arts",
      author: "Google",
      date: "31st October 2023",
      readTime: "5 min read",
      image: "https://iili.io/F7f3lGp.jpg",
    },
    {
      title: "DigitalOcean launches first Canadian data centre in Toronto",
      category: "Illustration",
      author: "Facebook",
      date: "31st October 2023",
      readTime: "5 min read",
      image: "https://iili.io/F7f306N.jpg",
    },
    {
      title: "Using Banner Stands To Increase Trade Show Traffic",
      category: "Music",
      author: "LinkedIn",
      date: "31st October 2023",
      readTime: "5 min read",
      image: "https://iili.io/F7f3cnR.jpg",
    },
  ];

  return (
    <section className="px-4 py-12 lg:px-20 w-10/12 mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Latest Blog or News</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Search all the open positions on the web. Get your own personalized salary estimate.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="group relative overflow-hidden rounded-md shadow hover:shadow-lg transition duration-300">
            {/* Image container */}
            <div className="relative h-52 w-full overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark overlay at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white px-4 py-2">
                <span className="text-xs font-semibold uppercase">{blog.category}</span>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white p-5 space-y-2">
              <p className="text-xs text-gray-400">
                {blog.date} • {blog.readTime}
              </p>
              <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-xs text-gray-500">By {blog.author}</p>
              <button className="text-blue-600 text-xs font-medium hover:underline mt-1">
                Read Now →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
