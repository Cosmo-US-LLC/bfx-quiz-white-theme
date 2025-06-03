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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizPage />} />
        <Route path="/quiz/step=1" element={<QuizPage />} />
        <Route path="/quiz/fact-check" element={<QuizStep1 />} />
        <Route path="/quiz/step=2" element={<QuizStep2 />} />
        <Route path="/quiz/step=3" element={<QuizStep3 />} />
        <Route path="/quiz/step=4" element={<QuizStep4 />} />
        <Route path="/quiz/step=5" element={<QuizStep5 />} />
        <Route path="/quiz/step=6" element={<QuizStep6 />} />
        <Route path="/quiz/fact-check-2" element={<QuizStep7 />} />
        <Route path="/quiz/step=7" element={<QuizStep8 />} />
        <Route path="/quiz/fact-check-3" element={<QuizStep9 />} />
        <Route path="/quiz/step=8" element={<QuizStep10 />} />
        <Route path="/quiz/step=9" element={<QuizStep11 />} />
        <Route path="/quiz/fact-check-no=3" element={<QuizStep12 />} />
        <Route path="/quiz/step=10" element={<QuizStep13 />} />
        <Route path="/quiz/step=11" element={<QuizStep14 />} />
        <Route path="/quiz/step=12" element={<QuizStep15 />} />
        <Route path="/quiz/fact-check-no=4" element={<QuizStep16 />} />
        <Route path="/quiz/step=13" element={<QuizStep17 />} />
        <Route path="/quiz/step=14" element={<QuizStep18 />} />
        <Route path="/quiz/step=15" element={<QuizStep19 />} />
        <Route path="/quiz/step=16" element={<QuizStep20 />} />
        <Route path="/quiz/step=17" element={<QuizStep21 />} />
        <Route path="/quiz/step=18" element={<QuizStep22 />} />
        <Route path="/quiz/step=18_28" element={<QuizStep18_28 />} />
        <Route path="/quiz/step=19_28" element={<QuizStep19_28 />} />
        {/* <Route path="/quiz/step=19" element={<QuizStep23 />} /> */}
        <Route path="/quiz/fact-check-no=5" element={<QuizStep24 />} />
        <Route path="/quiz/best-crypto-project" element={<BestCrypto />} />
        {/* <Route path="/quiz/fact-check-no=6" element={<QuizStep25 />} /> */}
        <Route path="/quiz/fact-check-no=7_1" element={<QuizStep26 />} />
        {/* <Route path="/quiz/fact-check-no=7_2" element={<QuizStep27 />} /> */}
        <Route path="/quiz/results" element={<Results />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </Router>
  )
}

export default App
