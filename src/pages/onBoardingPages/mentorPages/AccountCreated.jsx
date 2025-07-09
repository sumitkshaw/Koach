import React from 'react'
import WelcomeImage from '../../../assets/signup/WelcomeImage'

export const AccountCreated = () => {
  return (
        <div className="min-h-screen flex flex-col items-center justify-between bg-white p-4">
      <header className="w-full max-w-3xl text-center mt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900">Welcome aboard!</h1>
        <p className="text-lg md:text-xl text-gray-700 mt-2">
          You are finally ready, have a look around!
        </p>
      </header>

      <WelcomeImage />

      <footer className="w-full flex justify-center mb-10">
        <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg">
          Confirm
        </button>
      </footer>
    </div>
  )
}
