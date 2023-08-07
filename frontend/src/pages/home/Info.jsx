import { useState } from "react";
import { media1 } from "../../assets/images/media";
import  video  from '../../assets/Video/1.mp4'
// import video from "../../assets/Video/video.mp4";

const Info = () => {
  const [handleview, setHandleview] = useState("media");

  return (
    <>
      <div style={{ gap: "36px" }} className="p-2  flex justify-center">
        <button
          onClick={() => setHandleview("media")}
          className={
            handleview === "media"
              ? "text-xl font-[600] mb-2 mx-2 border-b-2 px-1 border-red-600 text-red-600"
              : "text-xl font-[600] mb-2 mx-2 border-b-2 px-1 border-gray-800 text-gray-800"
          }
        >
          Media
        </button>
      </div>
      <div className="container">
        {handleview === "media" && (
          <div className="col-12 flex flex-col-reverse md:flex-row gap-5 justify-around items-center py-4 h-fit overflow-hidden mb-4">
            <div className="col-12 col-lg-3 shadow border rounded-md overflow-hidden">
              {/* <img src={media3} alt="" /> */}
              <video controls autoPlay>
                <source src={video} />
              </video>
            </div>
            <div className="col-12 col-lg-8 rounded-md mt-4 mt-md-0">
              <div className="col-12 shadow flex-wrap border rounded-md overflow-hidden flex justify-center items-center gap-2">
                <img src={media1} alt="" className="w-100 rounded-lg" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Info;
