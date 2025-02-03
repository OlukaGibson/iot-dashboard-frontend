import React from 'react'
import Break from './Break'

const Footer = () => {
  return (
    <div className=" flex flex-col bg-cover bg-center bg-no-repeat">
      {/* Main content above footer */}
      <div className="flex-grow">
        <Break />
      </div>

      {/* Footer */}
      <div className="bg-black text-white">
        <div className="flex justify-around py-10">
          <div>
            <h3 className="font-bold">Explore</h3>
            <ul>
              <li>Products</li>
              <li>Services</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Connect</h3>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>TikTok</li>
              <li>YouTube</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Location</h3>
            <p>Makerere University</p>
            <p>Kampala</p>
            <p>+256 785 783 596</p>
            <p>gibsonoluka7@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
