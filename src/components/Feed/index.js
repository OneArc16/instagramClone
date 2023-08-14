import { BsThreeDots } from "react-icons/bs";
import Header from "../Header";
import Post from "../Post";

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
      <section className="gap-y-3 flex flex-col">
         {
          new Array(5).fill(1).map((_, i) =>(
            <Post key={i} index={i}/>
          ))
         }
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
