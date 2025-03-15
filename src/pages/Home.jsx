import profilePicture from "../assets/images/me.jpeg";

export default function Home() {
  return (
    <div className="bg-background h-screen flex">
      <div className="w-1/2 flex flex-col items-end justify-center space-y-10">
        <div className="flex flex-col space-y-2">
          <div className="space-y-10">
            <h2 className="text-primary text-4xl font-bold">Hi,I'm</h2>
            <h1 className="text-primary text-7xl font-bold">Caner Tanrıverdi</h1>
          </div>

          <h3 className="text-gray-400 text-2xl">Front-end Developer</h3>
        </div>
      </div>
      <div className="w-1/2 h-full relative bg-background bg-right">
        <img
          src={profilePicture}
          alt=""
          className="profileClipPath w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}
