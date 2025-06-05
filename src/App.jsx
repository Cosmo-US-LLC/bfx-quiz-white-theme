import { useEffect, useState } from "react"


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import QuizStep1 from "./pages/QuizStep1"
import QuizStep2 from "./pages/QuizStep2"
import QuizStep3 from "./pages/QuizStep3"
import QuizStep4 from "./pages/QuizStep4"
import QuizStep5 from "./pages/QuizStep5"
import QuizStep6 from "./pages/QuizStep6"
import QuizStep7 from "./pages/QuizStep7"
import QuizStep8 from "./pages/QuizStep8"
import QuizStep9 from "./pages/QuizStep9"
import QuizStep10 from "./pages/QuizStep10"
import QuizStep11 from "./pages/QuizStep11"
import QuizStep12 from "./pages/QuizStep12"
import QuizStep13 from "./pages/QuizStep13"
import QuizStep14 from "./pages/QuizStep14"
import QuizStep15 from "./pages/QuizStep15"
import QuizStep16 from "./pages/QuizStep16"
import QuizStep17 from "./pages/QuizStep17"
import QuizStep18 from "./pages/QuizStep18"
import QuizStep19 from "./pages/QuizStep19"
import QuizStep20 from "./pages/QuizStep20"
import QuizStep21 from "./pages/QuizStep21"
import QuizStep22 from "./pages/QuizStep22"
import QuizStep23 from "./pages/QuizStep23"
import QuizStep24 from "./pages/QuizStep24"
import QuizStep25 from "./pages/QuizStep25"
import QuizStep26 from "./pages/QuizStep26"
import Results from "./pages/Results"
import Loading from "./components/Loading"
import QuizPage from "./pages/QuizPage"
import QuizStep18_28 from "./pages/QuizStep18_28"
import QuizStep19_28 from "./pages/QuizStep19_28"
import QuizStep27 from "./pages/QuizStep27"
import BestCrypto from "./pages/BestCrypto"
import MobileQuizPage from "./mobile/MobileQuizPage"
import MobileQuizStep16 from "./mobile/MobileQuizStep16"
import MobileQuizStep17 from "./mobile/MobileQuizStep17"
import MobileQuizStep18_28 from "./mobile/MobileQuizStep18_28"
import MobileQuizStep18 from "./mobile/MobileQuizStep18"
import MobileQuizStep19 from "./mobile/MobileQuizStep19"
import MobileQuizStep20 from "./mobile/MobileQuizStep20"
import MobileQuizStep21 from "./mobile/MobileQuizStep21"
import MobileQuizStep22 from "./mobile/MobileQuizStep22"
import MobileQuizStep19_28 from "./mobile/MobileQuizStep19_28"
import MobileQuizStep24 from "./mobile/MobileQuizStep24"
import MobileResults from "./mobile/MobileResults"
import MobileQuizStep27 from "./mobile/MobileQuizStep27"


function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [breakpoint])

  return isMobile
}

function App() {
const isMobile = useIsMobile()

  return (
    <Router>
      <Routes>
        <Route path="/" element={!isMobile ? <QuizPage /> : <MobileQuizPage />} />
        <Route path="/quiz/step=1" element={!isMobile ? <QuizPage /> : <MobileQuizPage />} />
        <Route path="/quiz/fact-check" element={!isMobile ? <QuizStep1 /> : ""} />
        <Route path="/quiz/step=2"  element={!isMobile ? <QuizStep2 /> : ""} />
        <Route path="/quiz/step=3"  element={!isMobile ? <QuizStep3 /> : ""} />
        <Route path="/quiz/step=4" element={!isMobile ? <QuizStep4 /> : ""} />
        <Route path="/quiz/step=5"  element={!isMobile ? <QuizStep5 /> : ""} />
        <Route path="/quiz/step=6" element={!isMobile ? <QuizStep6 /> : ""} />
        <Route path="/quiz/fact-check-2" element={!isMobile ? <QuizStep7 /> : ""} />
        <Route path="/quiz/step=7" element={!isMobile ? <QuizStep8 /> : ""} />
        <Route path="/quiz/fact-check-3"  element={!isMobile ? <QuizStep9 /> : ""} />
        <Route path="/quiz/step=8"  element={!isMobile ? <QuizStep10 /> : ""} />
        <Route path="/quiz/step=9" element={!isMobile ? <QuizStep11 /> : ""} />
        <Route path="/quiz/fact-check-no=3"  element={!isMobile ? <QuizStep12 /> : ""} />
        <Route path="/quiz/step=10"  element={!isMobile ? <QuizStep13 /> : ""} />
        <Route path="/quiz/step=11"  element={!isMobile ? <QuizStep14 /> : ""}  />
        <Route path="/quiz/step=12"  element={!isMobile ? <QuizStep15 /> : ""} />
        <Route path="/quiz/fact-check-no=4" element={!isMobile ? <QuizStep16 /> : <MobileQuizStep16 />}  />
        <Route path="/quiz/step=13" element={!isMobile ? <QuizStep17 /> : <MobileQuizStep17 />}  />
        <Route path="/quiz/step=14" element={!isMobile ? <QuizStep18 /> : <MobileQuizStep18 />} />
        <Route path="/quiz/step=15" element={!isMobile ? <QuizStep19 /> : <MobileQuizStep19 />} />
        <Route path="/quiz/step=16" element={!isMobile ? <QuizStep20 /> : <MobileQuizStep20 /> } />
        <Route path="/quiz/step=17" element={!isMobile ? <QuizStep21 /> : <MobileQuizStep21 />} />
        <Route path="/quiz/step=18" element={!isMobile ? <QuizStep22 /> : <MobileQuizStep22 />} />
        <Route path="/quiz/step=18_28" element={!isMobile ? <QuizStep18_28 /> : <MobileQuizStep18_28 />} />
        <Route path="/quiz/step=19_28" element={!isMobile ? <QuizStep19_28 /> : <MobileQuizStep19_28 />} />
        {/* <Route path="/quiz/step=19" element={<QuizStep23 />} /> */}
        <Route path="/quiz/fact-check-no=5" element={!isMobile ? <QuizStep24 /> : <MobileQuizStep24 />} />
        <Route path="/quiz/best-crypto-project"  element={!isMobile ? <BestCrypto /> : ""} />
        {/* <Route path="/quiz/fact-check-no=6" element={<QuizStep25 />} /> */}
        {/* <Route path="/quiz/fact-check-no=7_1"  element={!isMobile ? <QuizStep26 /> : ""} /> */}
        <Route path="/quiz/fact-check-no=7_2" element={!isMobile ? <QuizStep27 /> :  <MobileQuizStep27  />} />
        <Route path="/quiz/results" element={!isMobile ? <Results /> : <MobileResults />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </Router>
  )
}

export default App
