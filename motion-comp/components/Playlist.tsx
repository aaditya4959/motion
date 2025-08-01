import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const data = [
  {
    name: "Softly",
    artist: "Karan Aujla",
    description: "A smooth blend of romantic and urban Punjabi vibes.",
    thumbnail: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
  },
  {
    name: "Admirin' You",
    artist: "Karan Aujla",
    description: "A melodic tribute expressing deep admiration and affection.",
    thumbnail: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29"
  },
  // ... other songs
];

export const Playlist = () => {
  const [current, setCurrent] = useState<typeof data[0] | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-800">
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <motion.div
            layoutId={`card-${index}`}
            className="bg-white rounded-lg w-72 p-4 m-4 cursor-pointer shadow-lg"
            key={index}
            onClick={() => setCurrent(item)}
          >
            <motion.img
              layoutId={`image-${index}`}
              src={item.thumbnail}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <div className="mt-2">
              <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
              <p className="text-gray-700">{item.artist}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              key="modal-content"
              layoutId={`card-${data.indexOf(current)}`}
              className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-md"
            >
              <motion.img
                layoutId={`image-${data.indexOf(current)}`}
                src={current.thumbnail}
                alt={current.name}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{current.name}</h2>
              <p className="text-lg font-medium text-gray-700 mb-1">{current.artist}</p>
              <p className="text-sm text-gray-600 mb-4">{current.description}</p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setCurrent(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
