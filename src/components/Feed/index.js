import Header from "../Header";

const Feed = () => {
  return (
  <div className='w-full h-full bg-[#FAFAFA]'>
    <Header />

    <div className="grid w-full max-w-screen-lg grid-cols-3 gap-6 mx-auto mt-20">
      <div className="flex flex-col w-full col-span-2 space-y-5 border-t-2 border-pink-500">
        <section className="flex p-4 space-x-4 overflow-x-scroll bg-white border border-black/10">
          {
            new Array(10).fill(0).map((_,i) => (
            <div key={i} className="bg-black rounded-full w-14 h-14 ring-pink-500 ring-offset-2 ring-[2px] flex-none" />
            ))
          }
        </section>
      <section className="">
        <div className="flex flex-col w-full border border-gray-100 bg-black/50 border-1 max-h-72">
          <div className="flex w-full p-1 space-x-2 bg-pink-400 justify-between items-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-10 h-10 bg-gray-400 border-2 border-pink-400 rounded-full" />
              <div>Username</div>
            </div>
            <div className="w-4 select-none">...</div>
          </div>
          <div className="w-full h-full bg-black aspect-square">

          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </div>

    <div className="fixed right-[15%] max-w-sm">
      <div className="flex">
        lorem ipsum dolor sit amet, consect
      </div> 
    </div>
    </div>
  </div>
  );
}

export default Feed
