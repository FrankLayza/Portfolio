// import { Button } from "@/components/ui/button"
import GrainBackground from "./components/GrainyBackground";
import Navbar from "@/components/Navbar";
import Home from "./components/Home";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <>
      <GrainBackground />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
