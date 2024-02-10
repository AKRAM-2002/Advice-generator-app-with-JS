import './App.css';
import DesktopDivider from './images/pattern-divider-desktop.svg';
import MobileDivider from './images/pattern-divider-mobile.svg';
import IconDice from './images/icon-dice.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';

interface Slip {
  id: number;
  advice: string;
}

function App() {
  const [slip, setSlip] = useState<Slip | null>(null);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(1);

  const fetchData = async (slipId: number) => {
    try {
      const res = await axios.get(`https://api.adviceslip.com/advice/${slipId}`);
      setSlip(res.data.slip);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch initial advice
    fetchData(counter);

    // Set up interval to fetch new advice every 5 seconds
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
      fetchData(counter);
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [counter]);

  const captureScreenshot = () => {
    // Use html2canvas to capture a screenshot of the advice-container
    const containerElement = document.querySelector('.advice-container') as HTMLElement;
    html2canvas(containerElement).then(canvas => {
      // Convert the canvas to an image
      const screenshotUrl = canvas.toDataURL('image/png');

      // Create a temporary anchor element
      const downloadLink = document.createElement('a');
      downloadLink.href = screenshotUrl;
      downloadLink.download = 'advice_screenshot.png';

      // Trigger a click on the anchor to start the download
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // Remove the temporary anchor element
      document.body.removeChild(downloadLink);
    });
  };

  return (
    <>
      {loading && <p>Loading advice...</p>}
      {!loading && slip && (
        
        <div className="advice-container">
          
          <h3>Advice #{slip.id}</h3>
          <p>{`"${slip.advice}"`}</p>
          <img src={DesktopDivider} className="desktop-divider" alt="desktop-divider" />
          <img src={MobileDivider} className="mobile-divider hidden" alt="mobile-divider" />
          <div className="iconDice-container" onClick={captureScreenshot}>
            <img src={IconDice} className="icon-dice" alt="icon-dice" />
          </div>
        </div>
      )}
      <div className="footer">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">AKRAM BOUTZOUGA</a>.
      </div>
    </>
  );
}

export default App;
