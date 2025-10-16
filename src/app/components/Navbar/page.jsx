'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Home,
  Globe,
  Zap,
  Heart,
  User,
  Users,
  UserCheck,
  LogIn,
  Lock, // Used for mobile phone icon placeholder
  Mail,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';

/* --- APPLE STYLE DROPDOWN --- */
const Dropdown = ({ title, sections }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200); // 200ms delay to allow user to move into dropdown
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="flex items-center space-x-1 text-white hover:text-teal-200 transition">
        <span>{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>

      <div
        className={`absolute left-1/2 transform -translate-x-1/2 mt-3 w-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ease-out ${
          open ? 'opacity-100 translate-y-0 scale-100 z-[9999]' : 'opacity-0 -translate-y-3 scale-95 pointer-events-none'
        }`}
      >
        <div className="flex justify-between px-6 py-4">
          {sections.map((section, idx) => (
            <div key={idx} className="w-1/2 px-2">
              <p className="text-sm font-semibold text-teal-600 mb-3 border-b border-gray-200 pb-1">
                {section.title}
              </p>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-700 hover:text-teal-600 transition"
                    >
                      <item.icon className="w-4 h-4 text-teal-500" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* --- MOBILE SLIDE-IN MENU --- */
const MobileMenu = ({ isMenuOpen, setIsMenuOpen, setShowAuth }) => {
  return (
    <>
      {/* Mobile Menu with Cut Effect */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white text-gray-800 transform transition-transform duration-300 ease-in-out z-[1050] shadow-xl md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Top Card */}
          <div className="p-5 bg-blue-50 flex flex-col items-start space-y-2 rounded-br-2xl">
            <div className="flex items-center space-x-3">
              {/* NOTE: '/image.jpg' needs to be a valid path in your project */}
              <Image
                src="/image.jpg"
                alt="User"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <h3 className="font-semibold text-gray-900">Login or Signup</h3>
                <p className="text-sm text-gray-500">and Grab Exclusive Deals</p>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="h-px bg-gray-200 my-2 mx-2 rounded-full" />

          {/* Menu Items */}
          <div className="flex flex-col mt-2 px-2 space-y-2 overflow-y-auto">
            
            <Link href="https://www.oporooms.com" className="flex justify-between items-center bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
              <span>Hotels</span><span className="text-gray-400">›</span>
            </Link>
            <Link href="https://www.oporooms.com/Flight" className="flex justify-between items-center bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
              <span>Flight</span><span className="text-gray-400">›</span>
            </Link>
            <Link href="/" className="flex justify-between items-center bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
              <span>Home</span><span className="text-gray-400">›</span>
            </Link>
            <Link href="/tripplanner" className="flex justify-between items-center bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
              <span>Trip Planner</span><span className="text-gray-400">›</span>
            </Link>
            <Link href="/bookingThemes" className="flex justify-between items-center bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
              <span>Destinations</span><span className="text-gray-400">›</span>
            </Link>
            <Link href="/bookingThemes" className="flex justify-between items-center bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
              <span>Themes</span><span className="text-gray-400">›</span>
            </Link>
            <Link href="/career" className="flex justify-between items-center bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
              <span>Careers</span><span className="text-gray-400">›</span>
            </Link>
            <Link href="/aboutUs" className="flex justify-between items-center bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
              <span>About</span><span className="text-gray-400">›</span>
            </Link>

            {/* Sign In Button */}
            <button 
              onClick={() => { 
                setIsMenuOpen(false); 
                setShowAuth(true);
              }} 
              className="flex justify-between items-center bg-gradient-to-r from-teal-700 to-teal-500 text-white border border-gray-200 rounded-lg p-3 font-medium hover:from-teal-800 hover:to-teal-600 mt-2"
            >
              Sign In <span>›</span>
            </button>
          </div>
        </div>
      </div>

      {/* Cut Effect Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1040] md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

/* --- SIGNUP/SIGNIN POPUP INLINE (MODIFIED FOR OTP & SEPARATE REGISTER FIELDS) --- */
const AuthPopup = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState(1); // 1: Enter details, 2: Enter OTP
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [otpRecipient, setOtpRecipient] = useState('email'); // 'email' or 'mobile' - only used in Register
  const [otp, setOtp] = useState('');

  // Ref for the OTP input fields
  const otpInputRefs = useRef([]);

  const handleSubmitDetails = (e) => {
    e.preventDefault();
    
    let recipientValue = '';
    if (isLogin) {
      // Sign In: Use the combined field (currently using the email state for simplicity)
      recipientValue = email || mobile;
      if (!recipientValue) {
        alert("Please enter your email or mobile number.");
        return;
      }
    } else {
      // Register: Check for both fields, prioritize the selected OTP recipient
      if (!email || !mobile) {
         alert("Please enter both email and mobile number.");
         return;
      }
      recipientValue = otpRecipient === 'email' ? email : mobile;
    }

    // In a real app: Call API to send OTP to recipientValue
    console.log(`${isLogin ? 'Sign In' : 'Register'} - Step 1 Submitted, { 
        fullName, 
        email: email, 
        mobile: mobile,
        otpSentTo: recipientValue
    }`);
    setStep(2); // Move to OTP step
  };

  const handleSubmitOTP = (e) => {
    e.preventDefault();
    // In a real app: Call API to verify OTP
    const submittedOtp = otp;
    console.log(`${isLogin ? 'Sign In' : 'Register'} - Step 2 (OTP) Submitted, { submittedOtp }`);
    
    // Placeholder alert for demo
    alert(`OTP submitted: ${submittedOtp}. This would be verified with the backend.`);
    // onClose(); // Close popup on successful verification
  };

  const handleResendOTP = () => {
    // Determine the value the OTP was sent to for the message
    const recipientInfo = isLogin 
      ? (email || mobile) 
      : (otpRecipient === 'email' ? email : mobile);
    
    // In a real app: Re-trigger the API call to send the OTP.
    console.log('Resend OTP clicked for', recipientInfo);
    alert(`New OTP has been requested for ${recipientInfo}.`);
  };

  const handleAuthToggle = (isLoginToggle) => {
    setIsLogin(isLoginToggle);
    setStep(1); 
    setFullName('');
    setEmail('');
    setMobile('');
    setOtp('');
    setOtpRecipient('email');
  };

  // Helper component for OTP inputs
  const OTPInput = () => {
    const length = 6;

    const handleChange = (index, value) => {
      if (isNaN(value) || value.length > 1) return;

      const newOtpArray = otp.split('');
      newOtpArray[index] = value;
      for(let i = 0; i < length; i++) {
          if (newOtpArray[i] === undefined) newOtpArray[i] = '';
      }
      setOtp(newOtpArray.join(''));

      if (value !== '' && index < length - 1) {
        otpInputRefs.current[index + 1]?.focus();
      }
    };

    const handleKeyDown = (index, e) => {
      if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
        e.preventDefault();
        const newOtpArray = otp.split('');
        newOtpArray[index - 1] = '';
        setOtp(newOtpArray.join(''));
        otpInputRefs.current[index - 1]?.focus();
      }
    };

    return (
      <div className="flex justify-between space-x-2">
        {Array(length).fill(0).map((_, index) => (
          <input
            key={index}
            ref={el => otpInputRefs.current[index] = el}
            type="tel" // Use tel for mobile numeric keyboard on devices
            maxLength="1"
            value={otp[index] || ''}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-full h-12 text-center text-lg font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            required
          />
        ))}
      </div>
    );
  };

  // Determine which recipient to display in Step 2 message
  const displayRecipient = isLogin 
    ? (email || mobile) // For Sign In, show whatever was entered
    : (otpRecipient === 'email' ? email : mobile);


  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => handleAuthToggle(true)}
            className={`flex-1 py-2 px-4 rounded-md transition-all ${
              isLogin ? 'bg-white shadow-sm text-teal-600 font-medium' : 'text-gray-600'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => handleAuthToggle(false)}
            className={`flex-1 py-2 px-4 rounded-md transition-all ${
              !isLogin ? 'bg-white shadow-sm text-teal-600 font-medium' : 'text-gray-600'
            }`}
          >
            Register
          </button>
        </div>

        {/* STEP 1: Enter Details (Email/Phone) */}
        {step === 1 && (
          <form onSubmit={handleSubmitDetails} className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{isLogin ? 'Sign In' : 'Register'} with OTP</h2>

            {/* --- FORM FIELDS DEPENDING ON isLogin STATE --- */}
            {!isLogin ? (
              // Registration form with separate email and mobile fields
              <div className='space-y-4'>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <div className="relative">
                    {/* Using Lock icon placeholder for phone/mobile, rotated */}
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 rotate-90" /> 
                    <input
                      type="tel"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="91 7827392632"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      required
                    />
                  </div>
                </div>

                <div className="text-sm pt-2">
                    <label className="block font-medium text-gray-700 mb-2">Send OTP to:</label>
                    <div className="flex space-x-4">
                        <label className="flex items-center">
                            <input 
                                type="radio" 
                                name="otpRecipient" 
                                value="email" 
                                checked={otpRecipient === 'email'} 
                                onChange={() => setOtpRecipient('email')}
                                className="w-4 h-4 accent-teal-600"
                            />
                            <span className="ml-2 text-gray-700">Email</span>
                        </label>
                        <label className="flex items-center">
                            <input 
                                type="radio" 
                                name="otpRecipient" 
                                value="mobile" 
                                checked={otpRecipient === 'mobile'} 
                                onChange={() => setOtpRecipient('mobile')}
                                className="w-4 h-4 accent-teal-600"
                            />
                            <span className="ml-2 text-gray-700">Mobile</span>
                        </label>
                    </div>
                </div>

              </div>
            ) : (
              // Sign In form (Combined email/phone field)
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email or Mobile Number</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text" 
                    value={email || mobile} // Display one field's value
                    onChange={(e) => {
                        const value = e.target.value;
                        // Simple check to decide which state to update for Sign In
                        if (value.includes('@')) {
                            setEmail(value);
                            setMobile('');
                        } else {
                            setEmail('');
                            setMobile(value);
                        }
                    }}
                    placeholder="Email or Mobile"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                </div>
              </div>
            )}
            {/* --- END FORM FIELDS --- */}

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              {isLogin 
                ? ' Login with OTP' 
                : `Get Registration OTP on ${otpRecipient === 'email' ? 'Email' : 'Mobile'}`}
            </button>
          </form>
        )}

        {/* STEP 2: Enter OTP */}
        {step === 2 && (
          <form onSubmit={handleSubmitOTP} className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Verify Account</h2>
            <p className="text-sm text-gray-600 mb-4">
              Enter the 6-digit OTP sent to <span className="font-semibold text-teal-600">{displayRecipient}</span>
            </p>

            <OTPInput />

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Verify & {isLogin ? 'Sign In' : 'Register'}
            </button>

            <div className="text-center text-sm">
              <button
                type="button"
                onClick={handleResendOTP}
                className="text-teal-600 font-medium hover:text-teal-700 transition-colors"
              >
                Resend OTP
              </button>
            </div>
          </form>
        )}
        
        {/* Shared Social Sign-in Section */}
        <div className="mt-6">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px bg-gray-300 flex-1"></span>
              <span className="text-gray-400 text-sm">OR</span>
              <span className="h-px bg-gray-300 flex-1"></span>
            </div>

            <button
              type="button"
              onClick={() => console.log('Sign in with Google clicked')}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 mt-4 hover:bg-gray-100 transition"
            >
              <Image src="/logo/google.png" alt="Google" width={20} height={20} />
              <span className="text-gray-700 font-medium">Continue with Google</span>
            </button>
        </div>
        
      </div>
    </div>
  );
};

/* --- MAIN NAVBAR --- */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const destinations = [
    {
      title: 'Domestic India',
      items: [
        { label: 'Goa', href: '/bookingThemes', icon: Home },
        { label: 'Himanchal', href: '/bookingThemes', icon: Home },
        { label: 'Jammu & Kashmir', href: '/bookingThemes', icon: Home },
        { label: 'Kerala', href: '/bookingThemes', icon: Home },
        { label: 'Uttarakhand', href: '/bookingThemes', icon: Home },
        { label: 'Rajasthan', href: '/bookingThemes', icon: Home },
      ],
    },
    {
      title: 'International',
      items:[
        { label: 'Bali', href: '/bookingThemes', icon: Globe },
        { label: 'Dubai', href: '/bookingThemes', icon: Globe },
        { label: 'Maldives', href: '/bookingThemes', icon: Globe },
        { label: 'Nepal', href: '/bookingThemes', icon: Globe },
        { label: 'NewYork', href: '/bookingThemes', icon: Globe },
        { label: 'Switzerland', href: '/bookingThemes', icon: Globe },
      ],
    },
  ];

  const themes = [
    {
      title: 'By Travel Style',
      items: [
        { label: 'Solo Travel', href: '/bookingThemes', icon: User },
        { label: 'Couple Getaway', href: '/bookingThemes', icon: Heart },
        { label: 'Friends Trip', href: '/bookingThemes', icon: Users },
        { label: 'Family Vacation', href: '/themes/family', icon: UserCheck },
      ],
    },
    {
      title: 'Adventure & More',
      items: [
        { label: 'Adventure Sports', href: '/bookingThemes', icon: Zap },
        { label: 'Beach Holidays', href: '/bookingThemes', icon: Zap },
        { label: 'Cultural Tours', href: '/bookingThemes', icon: Zap },
        { label: 'Luxury Travel', href: '/bookingThemes', icon: Zap },
        { label: 'Wellness Retreats', href: '/bookingThemes', icon: Zap },
      ],
    },
  ];

  return (
    <>
      <nav className="w-full fixed top-0 left-0 bg-gradient-to-r from-teal-700 to-teal-500 text-white shadow-lg z-[1000]">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
          <Link href="/">
            <Image
              src="/logo/logo.PNG"
              alt="OPO Travels Logo"
              width={215}
              height={215}
              className="rounded-full overflow-hidden"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8 font-medium">

            <Link href="https://www.oporooms.com" className="hover:text-teal-200 transition">
              Hotels
            </Link>

            <Link href="https://www.oporooms.com/Flight" className="hover:text-teal-200 transition">
              Flight
            </Link>

            <Link href="/tripplanner" className="hover:text-teal-200 transition">
              Trip Planner
            </Link>

            <Dropdown title="Destinations" sections={destinations} />
            <Dropdown title="Themes" sections={themes} />

            <Link href="/career" className="hover:text-teal-200 transition">
              Careers
            </Link>
            <Link href="/aboutUs" className="hover:text-teal-200 transition">
              About
            </Link>

            <button
              onClick={() => setShowAuth(true)}
              className="flex items-center space-x-2 bg-white text-teal-700 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition"
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In</span>
            </button>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-white z-[1060]"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-in Menu with Cut Effect */}
      <MobileMenu 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        setShowAuth={setShowAuth}
      />

      {showAuth && <AuthPopup onClose={() => setShowAuth(false)} />}
    </>
  );
}