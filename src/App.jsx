// import { Button } from "@/components/ui/button"
import GrainBackground from "./components/GrainyBackground";
import Navbar from "@/components/Navbar";
import Home from "./components/Home";
// import Page from "./Page";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <GrainBackground />
        <Navbar />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
