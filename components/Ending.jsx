"use client";

import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Ending({ restart }) {
  const { width, height } = useWindowSize();

  return (
    <div className="relative h-screen bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-700 overflow-hidden flex items-center justify-center p-4">

      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={350}
      />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className="
        w-full
        max-w-xl
        h-[92vh]
        rounded-3xl
        bg-[#161b22]
        border
        border-zinc-700
        shadow-2xl
        p-6
        flex
        flex-col
        "
      >

        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 4, -4, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="text-7xl text-center"
        >
          👑❤️
        </motion.div>

        <h1 className="text-4xl font-bold text-white text-center mt-4">
          Princess.exe
        </h1>

        <h2 className="text-pink-400 text-xl font-semibold text-center mt-2">
          Successfully Deployed
        </h2>

        <div
          className="
          mt-6
          flex-1
          rounded-2xl
          bg-zinc-900
          border
          border-zinc-700
          p-5
          overflow-y-auto
          "
        >

          <div className="font-mono text-green-400 text-left space-y-3">

            <p>✔ All Bugs Fixed</p>

            <p>✔ 120 Huggys Reserved</p>

            <p>✔ Princess Right Dimple Installed</p>

          </div>

          <p className="mt-8 text-zinc-300 leading-8 text-center">

            I know you're mad at me...
            <br /><br />

            Maybe I made a mistake.

            <br />

            Instead of sending lots of texts and irritating you even more,
            I thought I'd make something that would hopefully make you smile.

            <br /><br />

            <span className="text-pink-400 font-bold">
              Arz kiya hai... 🎤
            </span>

            <br /><br />

            <span className="text-yellow-300 font-semibold">
              Waah Waah toh bolo... 😌
            </span>

            <br /><br />

            Arz kiya hai...

            <br /><br />

            <span className="italic">

              Main tod leta agar tu gulaab hoti...
              <br />

              Main tod leta agar tu gulaab hoti...

              <br /><br />

              Main padh leta agar tu kitaab hoti...

              <br /><br />

              Aur tujhe pata hai ki main nasha nahi karta...

              <br />

              Aurrrrr....

              <br /><br />

              Tujhe pata hai ki main nasha nahi karta...

              <br />

              Magar main pee leta...

              <br />

              Agar tu sharaab hoti. 

            </span>

            <br /><br />

            Ab toh gussa thoda kam hua...? 

            <br /><br />
                        <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1,
              }}
              className="mt-4"
            >

              <p className="text-zinc-300 leading-8">

                Congratulations Princess 💖

                <br /><br />

                You completed every mission.

                <br />

                Dheeru officially owes you

                <span className="text-pink-400 font-bold">
                  {" "}120 Huggys{" "}
                </span>

                forever.

              </p>

            </motion.div>

          </p>

        </div>

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={restart}
          className="
          mt-5
          shrink-0
          w-full
          py-4
          rounded-xl
          bg-pink-500
          hover:bg-pink-400
          text-white
          font-bold
          text-lg
          shadow-xl
          "
        >
          🔄 Play Again
        </motion.button>

      </motion.div>

    </div>
  );
}