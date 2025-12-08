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

import shock_jockey_bottle from '../assets/shock_jockey_bottle.png'
import shock_jockey_poster from '../assets/shock_jockey.png'

import undertow_bottle from '../assets/undertow_bottle.png'
import undertow_poster from '../assets/undertow_poster.png'

import './plasmid_test.css'

function App() {

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
      {/* working title for the plasmid/vigor */}
      <h1>Ryan And Fink's Plasmid and Vigor's</h1>

      <section className="gallery">
        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">

          {/* first index for the id spinning */}
          <img 
          src= {bucking_poster}
          alt="bucking bronco poster"
          /> 

          {/* adding the vigor that will spin when clicked */}
          <img 
            src={bucking_bronco} 
            alt="fink's bucking bronco vigor" 
            className={`poster ${spin.has(0) ? 'spin' : ''}`}
            onClick={() => handleClick(0)} // on click start spinning
            onAnimationEnd={() => stopSpin(0)} // stop spinning
          />
          <h3>Fink's bucking bronco vigor</h3>
          <p>
            Knock your enemies for a loop and keep them hanging high!
          </p>
        </div>

        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">

          <img 
          src= {charge_poster}
          alt="charge poster"
          />

          <img 
            src={charge_bottle} 
            alt="charge vigor" 
            className={`poster ${spin.has(1) ? 'spin' : ''}`}
            onClick={() => handleClick(1)} // on click start spinning
            onAnimationEnd={() => stopSpin(1)} // stop spinning
          />
          <h3>Fink's Charge Vigor</h3>
          <p>
            Blow your enemies away with a powerful CHARGE! Deliver tornado blows or hold and release to devastate your enemies.
          </p>
        </div>

        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">
          
          <img 
          src= {devils_poster}
          alt="devils kiss poster"
          />
          
          <img 
            src={devils_bottle} 
            alt="devils kiss vigor" 
            className={`poster ${spin.has(2) ? 'spin' : ''}`}
            onClick={() => handleClick(2)} // on click start spinning
            onAnimationEnd={() => stopSpin(2)} // stop spinning
          />
          <h3>Fink's Devils Kiss Vigor</h3>
          <p>
            A civilized man has power over fire. A refined man handles fire with finesse: DEVIL'S KISS.
          </p>
        </div>

        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">

          <img
            src={murder_crows}
            alt="murder of crows poster"
          />
          
          <img 
            src={murder_crows_bottle} 
            alt="murder_of_crows" 
            className={`poster ${spin.has(3) ? 'spin' : ''}`}
            onClick={() => handleClick(3)} // on click start spinning
            onAnimationEnd={() => stopSpin(3)} // stop spinning
          />
          <h3>Fink's Murder of Crows</h3>
          <p>
            Stun and damage your enemies with a thousand needling beaks.
          </p>
        </div>

        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">

          <img
            src={return_sender_poster}
            alt="return to sender poster"
          />

          <img 
            src={return_sender_bottle} 
            alt="grog peeach" 
            className={`poster ${spin.has(4) ? 'spin' : ''}`}
            onClick={() => handleClick(4)} // on click start spinning
            onAnimationEnd={() => stopSpin(4)} // stop spinning
          />
          <h3>Fink's Return to Sender Vigor</h3>
          <p>
            Send your enemies' attacks back where they came from!
          </p>
        </div>

        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">

          <img 
            src={shock_jockey_poster}
            alt="shock  jockey poster"
          />

          <img 
            src={shock_jockey_bottle} 
            alt="shock jockey vigor" 
            className={`poster ${spin.has(5) ? 'spin' : ''}`}
            onClick={() => handleClick(5)} // on click start spinning
            onAnimationEnd={() => stopSpin(5)} // stop spinning
          />
          <h3>Fink's Shock Jockey Vigor</h3>
          <p>
            Harness the power of electricity and keep your enemies on their toes with SHOCK JOCKEY!
          </p>
        </div>

        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">
          <img 
            src={undertow_poster}
            alt="undertow poster"
          />

          <img 
            src={undertow_bottle} 
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
      </section>
    </>
  )
}

export default App
