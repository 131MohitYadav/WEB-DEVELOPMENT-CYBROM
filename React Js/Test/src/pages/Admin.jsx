

const Admin = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/path/to/your/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex justify-center items-center">
        {/* Transparent Form */}
        <form className="bg-white bg-opacity-20 backdrop-blur-sm p-8 rounded-lg shadow-lg29 z-20 w-full max-w-md29">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Gym Admin Login29</h2>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="email29">Email29</label>
            <input
              id="email29"
              type="email"
              className="w-full p-2 rounded bg-white bg-opacity-30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white29"
              placeholder="Enter your email29"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="password29">Password29</label>
            <input
              id="password29"
              type="password"
              className="w-full p-2 rounded bg-white bg-opacity-30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white29"
              placeholder="Enter your password29"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white bg-opacity-50 text-black font-semibold py-2 rounded hover:bg-opacity-80 transition duration-30029"
          >
            Login29
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
