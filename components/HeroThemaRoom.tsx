import Image from "next/image";

const rommThemes = [
  {
    name: "Room1",
    image: "/room1.png",
  },
  {
    name: "Room2",
    image: "/room2.png",
  },
  {
    name: "Room3",
    image: "/room3.png",
  },
  {
    name: "Room4",
    image: "/room4.png",
  },
  {
    name: "Room5",
    image: "/room3.png",
  },
  {
    name: "Room6",
    image: "/room4.png",
  },
];

export default function HeroThemaRoom() {
  return (
    <>
      <div style={{ backgroundColor: "#F0F3FC" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative  -top-40  flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
            <div className="flex flex-col space-y-10 mt-4 mb-16">
              <div className="flex sm:space-x-8 sm:flex-row flex-col">
                <div>
                  <Image
                    alt="Original photo of a room"
                    src="/1.jpg"
                    className="w-full object-cover h-96 rounded-2xl"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="sm:mt-0 mt-8">
                  <Image
                    alt="Generated photo of a room with roomGPT.io"
                    width={400}
                    height={400}
                    src="/1-new.jpg"
                    className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Veja alguns de nossos temas
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Conte com mais de 20 modelos de quartos temáticos.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 pb-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {rommThemes.map((item) => (
                <li
                  key={item.name}
                  className="hover:scale-105 transition duration-300 ease-in-out "
                >
                  <a href={item.name} target="_blank" rel="noreferrer">
                    <Image
                      alt="Original photo of a room"
                      src={item.image}
                      className="w-full object-cover h-40 rounded-2xl"
                      width={400}
                      height={400}
                    />
                  </a>
                </li>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
