import { useState } from 'react'

import big_daddy from '../assets/plasmids/befriend_big_daddy_plasmid_screen.png'
import big_daddy_use from '../assets/plasmids/big_daddy.png'

import electro_icon from '../assets/plasmids/elecro_bolt_plasmid_icon.png'
import electro from '../assets/plasmids/plasmids_hand_poster.png'

import frost_gif from '../assets/plasmids/frost_gif_plasmid.gif'
import winter_blast_icon from '../assets/plasmids/winter_blast_plasmid_icon.png'
import frost from '../assets/plasmids/frost_plasmid_screen.png'

import incenerate_icon from '../assets/plasmids/incenerate_plasmid_icon.png'
import incenerate from '../assets/plasmids/incinerate_plasmid_screen.png'

import insect_icon from '../assets/plasmids/insect_swarm_plasmid_icon.png'
import swarm from '../assets/plasmids/swarm_plasmid.png'

import sonic_boom_icon from '../assets/plasmids/sonic_boom_plasmid_icon.png'
import sonic_boom_screen from '../assets/plasmids/wind_plasmid.png'

import telekensis_icon from '../assets/plasmids/telekensis_plasmid_icon.png'
import telekensis from '../assets/plasmids/telekensis_screen_plasmid.png'

import plasmid from '../assets/plasmids/basic_plasmid_bottle.png'
import plasmid_poster from '../assets/plasmids/classic_plasmid_poster.png'
import pin_up_poster from '../assets/plasmids/pin_up_plasmid_poster.png'
import all_in_one_poster from '../assets/plasmids/plasmids_all_in_one_poster.png'

import './plasmid_test.css'

function App() {

  // state for spinning images on click, may make a dark version later
  // state var. for spin which is a set with number (poster id) type in it
  const [spin, setSpin] = useState(new Set())

  // event handling the click, for when the poster is clicked so it spins
  // function controls the add/remove of the id in the set for spinning
  const handleClick = (id) => {
    setSpin((prevSpin) => {
      // copy of previous spin set that gets modified and returned with the new
      const next = new Set(prevSpin)
      next.add(id) // add images index to spin set
      return next
    })
  }

  // stop spinning function, removes the id from the set
  const stopSpin = (id) => {
    setSpin((prevSpin) => {
      const next = new Set(prevSpin) // copy of previous spin set
      next.delete(id) // remove images index from spin set
      return next
    })
  }

  return (
    <>
      {/* working title for the plasmid/vigor */}
      <h1>Fontaine Futuristics</h1>

      <section className="gallery">
        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">

          {/* adding the vigor that will spin when clicked */}
          <img 
            src={big_daddy} 
            alt="big daddy screen" 
            className={`poster ${spin.has(0) ? 'spin' : ''}`}
            onClick={() => handleClick(0)} // on click start spinning
            onAnimationEnd={() => stopSpin(0)} // stop spinning
          />

          {/* plasmid bottle basic
          <img 
            src={plasmid}
            alt="basic plasmid bottle"
          /> */}


          <h3>Hypnotize Big Daddy</h3>
          <p>
            Cry out for Big Daddy's help, make him think you're a Little Sister. Watch as he fights to protect you.
          </p>
        </div>

        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">

          <img 
          src= {electro_icon}
          alt="electro plasmid icon"
          className="plasmid-icon"
          />

          <img 
            src={electro} 
            alt="electro plasmid" 
            className={`poster ${spin.has(1) ? 'spin' : ''}`}
            onClick={() => handleClick(1)} // on click start spinning
            onAnimationEnd={() => stopSpin(1)} // stop spinning
          />
          <h3>Electro Bolt</h3>
          <p>
           Don't be a dolt - use Electro Bolt!
          </p>
        </div>

        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">
          
          <img 
          src= {frost_gif}
          alt="frost plasmid gif"
          className="plasmid-icon"
          />

          <img 
          src={winter_blast_icon}
          alt="winter/frost icon"
          className="plasmid-icon"
          />
          
          <img 
            src={frost} 
            alt="frost plasmid" 
            className={`poster ${spin.has(2) ? 'spin' : ''}`}
            onClick={() => handleClick(2)} // on click start spinning
            onAnimationEnd={() => stopSpin(2)} // stop spinning
          />
          <h3>Winter Blast</h3>
          <p>
           Don't get caught without this powerful self-defense tool at the ready. Give your foes the cold shoulder with Winter Blast!
          </p>
        </div>

        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">

          <img
            src={incenerate_icon}
            alt="incenerate plasmid icon"
            className="plasmid-icon"
          />
          
          <img 
            src={incenerate} 
            alt="incenerate plasmid"
            className={`poster ${spin.has(3) ? 'spin' : ''}`}
            onClick={() => handleClick(3)} // on click start spinning
            onAnimationEnd={() => stopSpin(3)} // stop spinning
          />
          <h3>Incinerate!</h3>
          <p>
            Fire at your Fingertips!
          </p>
        </div>

        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">
          <img 
            src={insect_icon}
            alt="insect swarm plasmid icon"
            className="plasmid-icon"
          />

          <img 
            src={swarm} 
            alt="insect swarm plasmid"
            className={`poster ${spin.has(6) ? 'spin' : ''}`}
            onClick={() => handleClick(6)} // on click start spinning
            onAnimationEnd={() => stopSpin(6)} // stop spinning
            />
          <h3>Insect Swarm</h3>
          <p>
            Nothing clears a room like swarms of stinging bees
          </p>
        </div>


        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">

          <img
            src={sonic_boom_icon}
            alt="sonic boom plasmid icon"
            className="plasmid-icon"
          />

          <img 
            src={sonic_boom_screen} 
            alt="sonic boom plasmid"
            className={`poster ${spin.has(4) ? 'spin' : ''}`}
            onClick={() => handleClick(4)} // on click start spinning
            onAnimationEnd={() => stopSpin(4)} // stop spinning
          />
          <h3>Sonic Boom</h3>
          <p>
            When just yelling GET BACK isn't working, it's nice to have some repelling force to back up your request. Sonic Boom -- when push comes to shove.
          </p>
        </div>

        <div className="gallery-item hover:shadow-lg hover:shadow-blue-500">

          <img 
            src={telekensis_icon}
            alt="telekensis plasmid icon"
            className="plasmid-icon"
          />

          <img 
            src={telekensis} 
            alt="telekinesis plasmid"
            className={`poster ${spin.has(5) ? 'spin' : ''}`}
            onClick={() => handleClick(5)} // on click start spinning
            onAnimationEnd={() => stopSpin(5)} // stop spinning
          />
          <h3>Telekinesis</h3>
          <p>
            Pick up big stuff with your mind. Throw them at your enemies. What else do you need to know?
          </p>
        </div>
      </section>
    </>
  )
}

export default App
