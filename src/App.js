import React from 'react'
import OTP from './components/OTP';

const App = () => {
    const TOTAL_DIGITS = 6;
  return (
    <div>
      <OTP digits={TOTAL_DIGITS} />
    </div>
  )
}

export default App
