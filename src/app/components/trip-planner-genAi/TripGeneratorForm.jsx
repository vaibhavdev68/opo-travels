'use client';
import { useState, useEffect, useRef } from 'react';

export default function TripGeneratorForm() {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    travelDate: '',
    days: 1,
    budget: '',
    travelType: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState('');
  const [error, setError] = useState('');
  const [copySuccess, setCopySuccess] = useState('');
  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);

  // ONLY remove asterisks for clean formatting
  const cleanGeneratedText = (text) => {
    if (!text) return '';
    return text.replace(/\*\*/g, '').replace(/\*/g, '');
  };

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setGeneratedPlan('');
    setCopySuccess('');

    try {
      const response = await fetch('/api/generate-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          origin: formData.origin,
          destination: formData.destination,
          travelDate: formData.travelDate,
          duration: formData.days,
          budget: formData.budget,
          travelType: formData.travelType
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate travel plan');
      }

      setGeneratedPlan(data.plan);
    } catch (err) {
      setError(err.message);
      console.error('Error generating plan:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectDay = (day) => {
    setFormData((prev) => ({ ...prev, days: day }));
    setIsDropdownOpen(false);
  };

  // Copy function
  const copyTextToClipboard = () => {
    const textToCopy = cleanGeneratedText(generatedPlan);
    
    if (!textToCopy.trim()) {
      setCopySuccess('No text to copy');
      setTimeout(() => setCopySuccess(''), 2000);
      return;
    }

    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    
    try {
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      
      if (successful) {
        setCopySuccess('✓ Text copied successfully!');
      } else {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            setCopySuccess('✓ Text copied successfully!');
          }).catch(() => {
            setCopySuccess('❌ Please copy manually');
          });
        } else {
          setCopySuccess('❌ Please copy manually');
        }
      }
    } catch (err) {
      setCopySuccess('❌ Please copy manually');
    } finally {
      document.body.removeChild(textArea);
    }
    
    setTimeout(() => setCopySuccess(''), 3000);
  };

  // Download PDF function
  const downloadPDF = async () => {
    const downloadBtn = document.getElementById('download-btn');
    
    if (!downloadBtn) return;

    const originalBtnText = downloadBtn.innerHTML;
    
    try {
      downloadBtn.innerHTML = '🔄 Preparing PDF...';
      downloadBtn.disabled = true;

      const pdfContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>OPO Travel Plan - ${formData.origin} to ${formData.destination}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              text-align: center;
              border-bottom: 2px solid #079790;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            .header h1 {
              color: #079790;
              margin: 0;
              font-size: 28px;
            }
            .header .subtitle {
              color: #6B7280;
              font-size: 18px;
              margin-top: 5px;
            }
            .trip-info {
              background: #F3F4F6;
              padding: 15px;
              border-radius: 8px;
              margin-bottom: 20px;
              border-left: 4px solid #079790;
            }
            .footer {
              text-align: center;
              margin-top: 40px;
              padding-top: 20px;
              border-top: 1px solid #E5E7EB;
              color: #6B7280;
              font-size: 14px;
            }
            pre {
              white-space: pre-wrap;
              font-family: Arial, sans-serif;
              font-size: 14px;
              line-height: 1.5;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>OPO Travel Plan</h1>
            <div class="subtitle">${formData.origin} to ${formData.destination}</div>
          </div>
          
          <div class="trip-info">
            <strong>Duration:</strong> ${formData.days} days<br>
            <strong>Travel Date:</strong> ${formData.travelDate}<br>
            <strong>Budget:</strong> ${formData.budget}<br>
            <strong>Travel Type:</strong> ${formData.travelType}
          </div>

          <div class="content">
            <pre>${cleanGeneratedText(generatedPlan)}</pre>
          </div>

          <div class="footer">
            Crafted by OPO Trip Planner • Generated on ${new Date().toLocaleDateString()}
          </div>
        </body>
        </html>
      `;

      try {
        const html2pdf = (await import('html2pdf.js')).default;
        
        const opt = {
          margin: 10,
          filename: `OPO_Travel_Plan_${formData.origin}_to_${formData.destination}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { 
            scale: 2, 
            useCORS: true,
            windowWidth: 800
          },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        await html2pdf().set(opt).from(pdfContent).save();
        
      } catch (pdfError) {
        console.warn('html2pdf failed, using print fallback:', pdfError);
        const printWindow = window.open('', '_blank');
        printWindow.document.write(pdfContent);
        printWindow.document.close();
        printWindow.print();
      }
      
    } catch (error) {
      console.error('PDF generation error:', error);
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <html>
          <head><title>OPO Travel Plan</title></head>
          <body>
            <h1>OPO Travel Plan</h1>
            <h2>${formData.origin} to ${formData.destination}</h2>
            <pre>${cleanGeneratedText(generatedPlan)}</pre>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    } finally {
      downloadBtn.innerHTML = '📥 Download PDF';
      downloadBtn.disabled = false;
    }
  };

  // Print function
  const printPlan = () => {
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>OPO Travel Plan - ${formData.origin} to ${formData.destination}</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            margin: 20px; 
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .header { 
            text-align: center; 
            margin-bottom: 30px;
            border-bottom: 2px solid #079790;
            padding-bottom: 20px;
          }
          .trip-info { 
            background: #f5f5f5; 
            padding: 15px; 
            margin-bottom: 20px;
            border-radius: 8px;
          }
          pre {
            white-space: pre-wrap;
            font-family: Arial, sans-serif;
            font-size: 14px;
            line-height: 1.5;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>OPO Travel Plan</h1>
          <h2>${formData.origin} to ${formData.destination}</h2>
        </div>
        <div class="trip-info">
          <strong>Duration:</strong> ${formData.days} days | 
          <strong>Travel Date:</strong> ${formData.travelDate} | 
          <strong>Budget:</strong> ${formData.budget} | 
          <strong>Travel Type:</strong> ${formData.travelType}
        </div>
        <div class="content">
          <pre>${cleanGeneratedText(generatedPlan)}</pre>
        </div>
      </body>
      </html>
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  };

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        dropdownButtonRef.current &&
        !dropdownButtonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Animate step change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const budgetOptions = [
    { value: 'low', label: 'Budget', range: '₹5K–15K', icon: '💰' },
    { value: 'medium', label: 'Standard', range: '₹15K–45K', icon: '💸' },
    { value: 'high', label: 'Luxury', range: '₹45K–1L', icon: '💎' }
  ];

  const travelTypeOptions = [
    { value: 'solo', label: 'Solo', icon: '🧍', color: 'from-blue-400 to-cyan-400' },
    { value: 'couple', label: 'Couple', icon: '👩‍❤️‍👨', color: 'from-pink-400 to-rose-400' },
    { value: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦', color: 'from-green-400 to-emerald-400' },
    { value: 'friends', label: 'Friends', icon: '👥', color: 'from-teal-400 to-indigo-400' }
  ];

  const dayOptions = Array.from({ length: 30 }, (_, i) => i + 1);
  
  const opoFeatures = [
    { icon: '✨', text: 'Smart Itinerary' },
    { icon: '⚡', text: 'Instant Planning' },
    { icon: '🎯', text: 'Personalized Routes' },
    { icon: '💫', text: 'Expert Suggestions' }
  ];

  return (
    <div className="min-h-[600px] bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 py-8 px-4 flex items-center justify-center mt-20 relative overflow-visible">
      {/* Floating Backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/4 -right-10 w-16 h-16 bg-green-200 rounded-full blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-teal-200 rounded-full blur-xl opacity-30 animate-pulse delay-500"></div>
        <div className="absolute bottom-10 right-1/4 w-12 h-12 bg-cyan-200 rounded-full blur-xl opacity-30 animate-pulse delay-1500"></div>
      </div>

      <div className="max-w-4xl w-full bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-4 md:p-6 lg:p-8 relative z-10 border border-white/20 overflow-visible">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-teal-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                ✈️
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                OPO
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent mb-2">
            OPO Trip Planner
          </h1>
          <p className="text-gray-600 text-base mb-6">Let OPO craft your perfect journey with smart travel planning</p>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {opoFeatures.map((f, i) => (
              <div key={i} className="flex items-center justify-center space-x-2 p-3 bg-white/50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <span className="text-2xl">{f.icon}</span>
                <span className="text-sm font-medium text-gray-700">{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step Progress */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            {['Destination', 'Preferences', 'Generate'].map((step, i) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-all duration-500 ${
                  currentStep === i ? 'bg-gradient-to-r from-blue-500 to-teal-600 scale-110 shadow-lg' : 'bg-gray-300'
                }`}>{i + 1}</div>
                <span className={`ml-2 text-sm transition-all ${currentStep === i ? 'text-blue-600 scale-105' : 'text-gray-500'}`}>
                  {step}
                </span>
                {i < 2 && <div className="w-8 h-0.5 bg-gray-300 mx-2"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Origin + Destination */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 items-center">📍 Origin City</label>
              <input
                type="text"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
                placeholder="Where are you starting from?"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 shadow-inner hover:shadow-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 items-center">🎯 Dream Destination</label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Where do you want to explore?"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 shadow-inner hover:shadow-md"
                required
              />
            </div>
          </div>

          {/* Travel Date + Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <div className="relative z-50">
              <label className="block text-sm font-semibold text-gray-700 mb-2 items-center">📅 Travel Date</label>
              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-inner hover:shadow-md bg-white relative z-50"
                required
                min={new Date().toISOString().split('T')[0]}
                style={{ fontSize: isMobile ? '16px' : 'inherit' }}
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2 items-center">⏱️ Trip Duration</label>
              <button
                ref={dropdownButtonRef}
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex justify-between items-center px-4 py-3 border-2 border-gray-200 rounded-xl bg-white shadow-inner hover:shadow-md focus:ring-2 focus:ring-blue-500"
              >
                <span>📆 {formData.days} {formData.days === 1 ? 'Day' : 'Days'}</span>
                <svg className={`w-5 h-5 text-gray-500 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute z-50 w-full mt-1 bg-white border-2 border-gray-200 rounded-xl shadow-2xl transition-all duration-300 animate-fadeIn"
                  style={{ maxHeight: isMobile ? '200px' : '280px', overflowY: 'auto' }}
                >
                  {dayOptions.map((day) => (
                    <div key={day} onClick={() => handleSelectDay(day)} className="px-4 py-2 cursor-pointer hover:bg-blue-50 border-b last:border-0">
                      {day} {day === 1 ? 'Day' : 'Days'}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-4 text-center">💰 Select Your Budget Range</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {budgetOptions.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex flex-col items-center p-6 border-2 rounded-2xl cursor-pointer transition-all duration-500 ${
                    formData.budget === opt.value
                      ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-blue-300 bg-white shadow-md'
                  }`}
                >
                  <input type="radio" name="budget" value={opt.value} checked={formData.budget === opt.value} onChange={handleChange} className="sr-only" />
                  <span className="text-3xl mb-2">{opt.icon}</span>
                  <span className="font-bold text-gray-800 text-lg">{opt.label}</span>
                  <span className="text-sm text-gray-600 mt-1">{opt.range}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Travel Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-4 text-center">👥 Who's Traveling?</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {travelTypeOptions.map((t) => (
                <label
                  key={t.value}
                  className={`flex flex-col items-center p-5 border-2 rounded-2xl cursor-pointer transition-all duration-500 ${
                    formData.travelType === t.value
                      ? `border-blue-500 bg-gradient-to-br ${t.color}/20 shadow-lg scale-105`
                      : 'border-gray-200 hover:border-gray-300 bg-white shadow-md'
                  }`}
                >
                  <input type="radio" name="travelType" value={t.value} checked={formData.travelType === t.value} onChange={handleChange} className="sr-only" />
                  <span className="text-4xl mb-3">{t.icon}</span>
                  <span className="font-bold text-gray-800 text-lg">{t.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl relative overflow-hidden group disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center justify-center">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    OPO is Planning Your Trip...
                  </>
                ) : (
                  <>
                    ✨ Generate My OPO Travel Plan 🚀
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {isLoading && (
              <div className="text-center mt-4 text-gray-600 animate-pulse">
                ✨ OPO is crafting your perfect itinerary...
              </div>
            )}
          </div>
        </form>

        {/* Error Display */}
        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-2xl">
            <div className="flex items-center text-red-800">
              <span className="text-lg mr-2">⚠️</span>
              <span className="font-medium">{error}</span>
            </div>
          </div>
        )}

        {/* Generated Plan Display */}
        {generatedPlan && (
          <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border-2 border-green-200 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🎉</span>
                <h3 className="text-xl font-bold text-gray-800">Your OPO Travel Plan</h3>
              </div>
              <button
                id="download-btn"
                onClick={downloadPDF}
                className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-md"
              >
                <span>📥</span>
                <span>Download PDF</span>
              </button>
            </div>
            
            <div className="prose max-w-none">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed bg-white p-6 rounded-lg border max-h-96 overflow-y-auto">
                {cleanGeneratedText(generatedPlan)}
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-green-200">
              {/* Copy Success Message */}
              {copySuccess && (
                <div className="mb-3 p-3 bg-green-100 border border-green-300 rounded-lg text-green-700 text-sm text-center animate-pulse">
                  {copySuccess}
                </div>
              )}
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">✨ Crafted by OPO Trip Planner</span>
                <div className="flex space-x-2">
                  <button
                    onClick={copyTextToClipboard}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-md"
                  >
                    <span>📋</span>
                    <span>Copy Text</span>
                  </button>
                  <button
                    onClick={printPlan}
                    className="flex items-center space-x-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors shadow-md"
                  >
                    <span>🖨️</span>
                    <span>Print</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          🔒 Secure & Private • ⚡ Instant Results • 🎯 100% Personalized by OPO
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }

        input[type="date"]::-webkit-calendar-picker-indicator {
          z-index: 9999;
          position: relative;
        }

        @media (max-width: 768px) {
          input[type="date"] {
            min-height: 44px;
          }
        }
      `}</style>
    </div>
  );
}