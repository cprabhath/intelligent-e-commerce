import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { BsMic, BsSearch } from "react-icons/bs";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import ProductCard from "./ProductCard";

const Navbar = ({ setShowCart }) => {
  const [description, setDescription] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null); // Use useRef for recognition

  useEffect(() => {
    // Check if browser supports speech recognition
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      recognitionRef.current = recognition;

      recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        setTranscript(speechResult);
        setDescription(speechResult);
      };

      recognition.onend = () => {
        setListening(false);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        toast.error("Speech recognition error. Try again.");
        setListening(false);
      };
    } else {
      toast.error("Speech recognition not supported in your browser.");
    }
  }, []);

  const startListening = async () => {
    try {
      // Request microphone permissions
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      if (recognitionRef.current) {
        setListening(true);
        // Start recognition
        recognitionRef.current.start(); 
      }
    } catch (error) {
      console.error("Error accessing microphone:", error);
      toast.error("Microphone access denied. Please enable it in your browser settings.");
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  const handleDialog = () => {
    if (openPopup) {
      stopListening();
    } else {
      startListening();
    }
    setOpenPopup(!openPopup);
  }

  const VoiceSearch = async (description) => {
    const result  = await axios.post('http://localhost:3000/api/v1/products/find', { description });

    if (result.data.success) {
      return <ProductCard productid={result.data.id}/>;
    }

    return <p>Sorry! <br /> No products found for "{description}".</p>;
  }

  // Dummy cart count
  const cartCount = 3;

  VoiceSearch(description);
  return (
    <>
      <div className="pt-4 bg-white top-0 sticky border-b border-gray-200 shadow-sm pe-5 px-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <a href="/">
              <img
                src="/logo.png"
                alt="logo"
                className="w-[150px]"
                width={150}
                height={150}
              />
            </a>
            <div className="lg:flex hidden w-full max-w-[500px]">
              <input
                className="border-2 border-[#ffb929] px-6 py-2 w-full"
                type="text"
                placeholder="Search for products..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <div className="bg-[#ffb929] text-white text-[26px] grid place-items-center px-4 me-2">
                <BsSearch />
              </div>
              <div
                className="bg-[#ffb929] text-white text-[26px] grid place-items-center px-4"
                onClick={() => handleDialog()}
              >
                <BsMic />
              </div>
            </div>

            <div className="flex gap-4 md:gap-8 items-center">
              <a href="/auth/userlogin" className="md:flex gap-3 hidden">
                <div className="rounded-full border-2 border-gray-300 text-gray-500 text-[32px] w-[50px] h-[50px] grid place-items-center">
                  <AiOutlineUser />
                </div>

                <div>
                  <p className="text-gray-500">Hello, Sign in</p>
                  <p className="font-medium">Your Account</p>
                </div>
              </a>
              <div
                className="text-gray-500 text-[32px] relative cursor-pointer transition ease-in-out delay-100"
                onClick={() => setShowCart(true)}
              >
                <AiOutlineShoppingCart />
                <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center">
                  {cartCount}
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4" />
        </div>
      </div>

      <Dialog open={openPopup} onOpenChange={setOpenPopup}>
        <DialogTrigger asChild>
          <button className="hidden"></button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="justify-center items-center">
            <DialogTitle>Say what you want... Start with Search..</DialogTitle>
            <DialogDescription className="text-xl pt-4">
              {listening ? "Listening..." : "Start with search..."}
              <br />
              {transcript && <p>"{transcript}"</p>}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
Navbar.propTypes = {
  setShowCart: PropTypes.func.isRequired,
};

export default Navbar;
