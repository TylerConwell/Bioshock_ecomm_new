import { useState } from 'react'

import bucking_bronco from '../assets/bucking_bronco_bottle.png'
import bucking_poster from '../assets/bucking_bronco.png'

import charge_bottle from '../assets/charge_bottle.png'
import charge_poster from '../assets/charge_poster.png'

import devils_bottle from '../assets/devils_kiss_bottle.png'
import devils_poster from '../assets/devils_kiss.png'

import murder_crows_bottle from '../assets/murder_of_crows_bottle.png'
import murder_crows from '../assets/murder_of_crows.png'

import possession_bottle from '../asset/possession_bottle.png'
import possession_poster from '../asset/possession_poster.png'

import return_sender_bottle from '../assets/return_to_sender_bottle.png'
import return_sender_poster from '../assets/return_to_sender_poster.png'



import './plasmid_test.css'

function App() {
  // simple click counter for stimming, may add sound later
  const [count, setCount] = useState(0)

  // state for spinning images on click, may make a dark version later
  // state var. for spin which is a set with number (poster id) type in it
  const [spin, setSpin] = useState<Set<number>>(new Set())

  // event handling the click, for when the poster is clicked so it spins
  // function controls the add/remove of the id in the set for spinning
  const handleClick = (id: number) => {
    setSpin((prevSpin) => {
      // copy of previous spin set that gets modified and returned with the new
      const next = new Set(prevSpin)
      next.add(id) // add images index to spin set
      return next
    })
  }

  // stop spinning function, removes the id from the set
  const stopSpin = (id: number) => {
    setSpin((prevSpin) => {
      const next = new Set(prevSpin) // copy of previous spin set
      next.delete(id) // remove images index from spin set
      return next
    })
  }

  return (
    <>
      {/* working title for the gallery */}
      <h1>Cold Ones Art Gallery</h1>

      {/* Stim button for randomly pressing */}
      <div className="fun_button">
        <button onClick={() => setCount((count) => count + 1)}>
          Wow you clicked this button {count} times
        </button>

        <p>
          Incase you needed a way to relieve stress, 
          or use it as a voting mechanism since I havent made one yet.
        </p>
      </div>

      <section className="gallery">
        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">

          {/* first index for the id spinning */}
          <img 
            src={beerju} 
            alt="beerju coldones" 
            className={`poster ${spin.has(0) ? 'spin' : ''}`}
            onClick={() => handleClick(0)} // on click start spinning
            onAnimationEnd={() => stopSpin(0)} // stop spinning
          />
          <h3>Beerju Poster</h3>
          <p>
            So, like from what I see its a beer and a big one at that,
            and its walking around destroying stuff.
          </p>
        </div>

        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">
          <img 
            src={skull} 
            alt="coldones org" 
            className={`poster ${spin.has(1) ? 'spin' : ''}`}
            onClick={() => handleClick(1)} // on click start spinning
            onAnimationEnd={() => stopSpin(1)} // stop spinning
          />
          <h3>Cold Ones Skull Poster</h3>
          <p>
            Some kinda bottom text with a skull and a concrete dog. What the dog doing?
          </p>
        </div>

        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">
          <img 
            src={grape} 
            alt="grog grape" 
            className={`poster ${spin.has(2) ? 'spin' : ''}`}
            onClick={() => handleClick(2)} // on click start spinning
            onAnimationEnd={() => stopSpin(2)} // stop spinning
          />
          <h3>Grape Grog Poster</h3>
          <p>
            A lovey grape grop would hit pretty good right now.
            Mmmmm.
          </p>
        </div>

        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">
          <img 
            src={lemon} 
            alt="grog lemonice" 
            className={`poster ${spin.has(3) ? 'spin' : ''}`}
            onClick={() => handleClick(3)} // on click start spinning
            onAnimationEnd={() => stopSpin(3)} // stop spinning
          />
          <h3>Lemon Ice Grog Poster</h3>
          <p>
            Hold up is that a Lemon Ice Grog? Yea i'll take two.
          </p>
        </div>

        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">
          <img 
            src={peeach} 
            alt="grog peeach" 
            className={`poster ${spin.has(4) ? 'spin' : ''}`}
            onClick={() => handleClick(4)} // on click start spinning
            onAnimationEnd={() => stopSpin(4)} // stop spinning
          />
          <h3>Peach Grog Poster</h3>
          <p>
            Wait wait wait your telling me they have Peach Grog now?
          </p>
        </div>

        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">
          <img 
            src={chad} 
            alt="japanese chad" 
            className={`poster ${spin.has(5) ? 'spin' : ''}`}
            onClick={() => handleClick(5)} // on click start spinning
            onAnimationEnd={() => stopSpin(5)} // stop spinning
          />
          <h3>Japanese Chad Grog Poster</h3>
          <p>
            Some kinda old japanese themed Chad from cold ones. JojiVlogs?
          </p>
        </div>

        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">
          <img 
            src={max} 
            alt="japanese max" 
            className={`poster ${spin.has(6) ? 'spin' : ''}`}
            onClick={() => handleClick(6)} // on click start spinning
            onAnimationEnd={() => stopSpin(6)} // stop spinning
            />
          <h3>Japanese Max Grog Poster</h3>
          <p>
            Ah, now thats a classic old japanese stye max, or is that chinese style?
          </p>
        </div>

        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">
          <img 
            src={mexicanMax} 
            alt="max chuco" 
            className={`poster ${spin.has(7) ? 'spin' : ''}`}
            onClick={() => handleClick(7)} // on click start spinning
            onAnimationEnd={() => stopSpin(7)} // stop spinning
            />
          <h3>Mexican Max Poster</h3>
          <p>
            Wait your telling me I can get this and like hang it up in my casa?
          </p>
        </div>
      </section>
    </>
  )
}

export default App
