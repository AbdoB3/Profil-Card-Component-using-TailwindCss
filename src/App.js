
function App() {
  return (
    
    <div className="App flex justify-center items-center h-screen bg-cyan bg-no-repeat"
    
    style={{
      backgroundImage: "url({'./images/bg-pattern-top.svg'}), url({'./images/bg-pattern-bottom.svg'})",
      backgroundPosition: 'right 52vw bottom 35vh, left 48vw top 52vh',
    }}
    
    >
    <div className=" max-w-sm rounded-xl overflow-hidden shadow-xl ">
    
      <div className="card bg-white">
      
        <div className="card-header">
          <img src="./images/bg-pattern-card.svg"  className="w-full" alt="top"/>
        </div>
        <div className="card-body grid justify-items-center	">
          <img src="./images/image-victor.jpg " className="rounded-full -mt-5 border-4 border-white " alt=""/>
          <div className="flex space-x-2 text-xl mt-4">
          <p className="text-lg font-bold text-gray-700">Victor Crest </p><span className="text-neutral-400">26</span>
          </div>
          <p className="  text-neutral-400">London</p>
        </div>
        <div className="card-footer border-t-[1px] border-slate-100 mt-5 flex justify-around p-5">
          <div>
            <p className="text-lg font-bold text-gray-700">80K</p>
            <p className="  text-neutral-400">Followers</p>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-700">803K</p>
            <p className="  text-neutral-400">Likes</p>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-700">1.4K</p>
            <p className="text-neutral-400">Photos</p>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
