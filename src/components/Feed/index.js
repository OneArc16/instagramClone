import Header from "../Header";

const Feed = () => {
  return (
  <div className='w-full h-full bg-[#FAFAFA]'>
    <Header />

    <div className="grid w-full max-w-screen-lg grid-cols-3 gap-6 mx-auto mt-20">
    <div className="w-full col-span-2 bg-pink-400">
      <section className="flex p-4 space-x-4 overflow-x-scroll bg-white border border-gray-400">
        {
          new Array(10).fill(8).map((_,i) => (
          <div key={i}className="bg-black border border-white rounded-full w-14 h-14" />
          ))
        }
      </section>
      <section>posts</section>
    </div>

    <div className="col-span-1 bg-red-500">
      This is a sidebar 
    </div>
    </div>
  </div>
  );
}

export default Feed
