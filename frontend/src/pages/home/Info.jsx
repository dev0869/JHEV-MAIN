import { useState } from "react";
import { media1,media2,media3 } from "../../assets/images/media";
import YouTube from 'react-youtube'
import video from "../../assets/Video/1.mp4";
import video1 from "../../assets/Video/2.mp4";
import video2 from "../../assets/Video/5.mp4";
import video3 from "../../assets/Video/6.mp4";
// import video from "../../assets/Video/video.mp4";

const Info = () => {
  const opts = {
    height: "690",
    width: "340",
    playerVars: {
      autoplay: 1,
      modestbranding: 1, // Hide YouTube logo
      controls: 0, // Hide controls
      showinfo: 0, // Hide video title and uploader information
      fs: 0, // Hide fullscreen button
      loop: 1, // Enable looping
    },
  };
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
        <button
          onClick={() => setHandleview("Gallery")}
          className={
            handleview === "media"
              ? "text-xl font-[600] mb-2 mx-2 border-b-2 px-1 border-red-600 text-red-600"
              : "text-xl font-[600] mb-2 mx-2 border-b-2 px-1 border-gray-800 text-gray-800"
          }
        >
          Gallery
        </button>
      </div>
      <div className="container">
        {handleview === "media" && (
          <div className="row gap-2 justify-center">
            <div className="max-sm:w-100 md:w-[48%] lg:w-[24%] shadow border rounded-md overflow-hidden">
              {/* <img src={media3} alt="" /> */}
              <video controls autoPlay>
                <source src={video} />
              </video>
            </div>
            <div className="max-sm:w-100 md:w-[48%] lg:w-[24%] shadow border rounded-md overflow-hidden">
              {/* <img src={media3} alt="" /> */}
              <video controls autoPlay>
                <source src={video1} />
              </video>
            </div>
            <div className="max-sm:w-100 md:w-[48%] lg:w-[24%] shadow border rounded-md overflow-hidden">
              {/* <img src={media3} alt="" /> */}
              <video controls autoPlay>
                <source src={video3} />
              </video>
            </div>
            <div className="max-sm:w-100 md:w-[48%] lg:w-[24%] shadow border rounded-md overflow-hidden">
              {/* <img src={media3} alt="" /> */}
              <video controls autoPlay>
                <source src={video2} />
              </video>
            </div>
          </div>
        )}

        {handleview === "Gallery" && (
          <div className="row gap-4 justify-center">
            <div className="w-[49%] shadow border rounded-md overflow-hidden">
              <img src={media1} alt="" />
            </div>
            <div className="w-[49%] shadow border rounded-md overflow-hidden">
              <img src={media1} alt="" />
            </div>
            <div className="w-[49%] object-cover shadow border rounded-md overflow-hidden">
              <img src={media2} alt="" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Info;
