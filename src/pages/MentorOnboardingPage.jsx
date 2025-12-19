import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import OnboardingNav from '../components/OnboardingNav';
import { saveOnboardingProgress, completeMentorOnboarding } from '../utils/database/profiles';

export default function MentorOnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Expertise
    expertise: [],
    primaryField: '',
    yearsOfExperience: 0,
    
    // Step 2: Credentials
    education: [],
    certifications: [],
    notableAchievements: '',
    
    // Step 3: Teaching Style
    teachingStyle: '',
    availabilityHours: '',
    communicationPreferences: [],
    
    // Step 4: Professional Details
    hourlyRate: '',
    bio: '',
    linkedinProfile: '',
    portfolioUrl: '',
  });
  
  const { user } = useAuth();
  const navigate = useNavigate();

  // Auto-save progress on step change
  useEffect(() => {
    const autoSave = async () => {
      if (user?.$id && currentStep > 1) {
        try {
          await saveOnboardingProgress(user.$id, currentStep - 1, formData);
          console.log(`✅ Auto-saved step ${currentStep - 1}`);
        } catch (error) {
          console.warn('Auto-save failed:', error);
        }
      }
    };
    
    autoSave();
  }, [currentStep, formData, user]);

  // Load saved progress on mount
  useEffect(() => {
    const loadProgress = async () => {
      // TODO: Load saved data from database
    };
    if (user?.$id) loadProgress();
  }, [user]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayToggle = (field, value) => {
    setFormData(prev => {
      const currentArray = prev[field] || [];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      return { ...prev, [field]: newArray };
    });
  };

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleComplete = async () => {
    if (!user?.$id) return;
    
    setLoading(true);
    try {
      // Save final data
      await completeMentorOnboarding(user.$id, formData);
      
      // Redirect to mentor dashboard
      navigate("/dashboard_mentor");
    } catch (error) {
      console.error('Failed to complete onboarding:', error);
      alert('Failed to save. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Step configurations
  const steps = [
    {
      title: "Your Expertise",
      description: "Tell us about your skills and experience",
      fields: [
        {
          type: "multiselect",
          label: "Areas of Expertise",
          field: "expertise",
          options: [
            "Software Development", "Product Management", "Data Science", 
            "UX/UI Design", "Marketing", "Finance", "Leadership", 
            "Career Coaching", "Entrepreneurship", "Other"
          ],
          required: true
        },
        {
          type: "select",
          label: "Primary Field",
          field: "primaryField",
          options: ["Technology", "Business", "Design", "Science", "Arts", "Education"],
          required: true
        },
        {
          type: "number",
          label: "Years of Professional Experience",
          field: "yearsOfExperience",
          min: 1,
          max: 50,
          required: true
        }
      ]
    },
    {
      title: "Credentials",
      description: "Share your educational background and certifications",
      fields: [
        {
          type: "multiselect",
          label: "Highest Level of Education",
          field: "education",
          options: ["High School", "Bachelor's", "Master's", "PhD", "Other"],
          required: true
        },
        {
          type: "text",
          label: "Certifications (comma separated)",
          field: "certifications",
          placeholder: "e.g., PMP, AWS Certified, Google Analytics"
        },
        {
          type: "textarea",
          label: "Notable Achievements",
          field: "notableAchievements",
          placeholder: "Awards, publications, or significant projects",
          rows: 4
        }
      ]
    },
    {
      title: "Teaching Style & Availability",
      description: "How do you prefer to mentor?",
      fields: [
        {
          type: "select",
          label: "Preferred Teaching Style",
          field: "teachingStyle",
          options: ["Structured", "Casual", "Project-based", "Q&A focused", "Mixed"],
          required: true
        },
        {
          type: "select",
          label: "Weekly Availability",
          field: "availabilityHours",
          options: ["1-5 hours", "5-10 hours", "10-20 hours", "20+ hours"],
          required: true
        },
        {
          type: "multiselect",
          label: "Communication Preferences",
          field: "communicationPreferences",
          options: ["Video Calls", "Voice Calls", "Text Chat", "Email", "In-person"],
          required: true
        }
      ]
    },
    {
      title: "Professional Details",
      description: "Finalize your mentor profile",
      fields: [
        {
          type: "select",
          label: "Hourly Rate (USD)",
          field: "hourlyRate",
          options: ["$0 (Volunteer)", "$20-50", "$50-100", "$100-200", "$200+"],
          required: true
        },
        {
          type: "textarea",
          label: "Professional Bio",
          field: "bio",
          placeholder: "Tell mentees about your background and approach...",
          rows: 6,
          required: true
        },
        {
          type: "text",
          label: "LinkedIn Profile URL",
          field: "linkedinProfile",
          placeholder: "https://linkedin.com/in/yourprofile"
        },
        {
          type: "text",
          label: "Portfolio/Website",
          field: "portfolioUrl",
          placeholder: "https://yourwebsite.com"
        }
      ]
    }
  ];

  const currentStepConfig = steps[currentStep - 1];

  return (
    <div className="min-h-screen bg-gray-50">
      <OnboardingNav />
      
      {/* Fixed the padding-top: mobile gets pt-20, desktop gets pt-8 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-8 pt-20 sm:pt-20">
        {/* Progress Header - Consistent styling */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Complete Your Mentor Profile
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
            {currentStepConfig.description}
          </p>
          
          {/* Step Indicator - Mobile responsive with consistent colors */}
          <div className="mb-6 sm:mb-8">
            {/* Mobile Step Indicator */}
            <div className="block sm:hidden text-center mb-4">
              <div className="flex justify-center items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
                  {currentStep}
                </div>
                <span className="text-sm font-medium">
                  Step {currentStep} of {steps.length}: {currentStepConfig.title}
                </span>
              </div>
            </div>
            
            {/* Desktop Step Indicator - Same styling as mobile */}
            <div className="hidden sm:flex items-center justify-between">
              {steps.map((step, index) => {
                const stepNumber = index + 1;
                const isActive = stepNumber === currentStep;
                const isCompleted = stepNumber < currentStep;
                
                return (
                  <div key={stepNumber} className="flex-1 flex items-center">
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                        isActive 
                          ? 'bg-blue-600 text-white border-2 border-blue-600' 
                          : isCompleted 
                          ? 'bg-green-500 text-white' 
                          : 'bg-white text-gray-400 border-2 border-gray-300'
                      }`}>
                        {isCompleted ? '✓' : stepNumber}
                      </div>
                      <span className={`text-sm font-medium text-center ${
                        isActive ? 'text-blue-600' : 
                        isCompleted ? 'text-green-600' : 
                        'text-gray-500'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                    
                    {stepNumber < steps.length && (
                      <div className={`flex-1 h-1 mx-4 ${
                        stepNumber < currentStep ? 'bg-green-500' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Form Content - Consistent styling */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
            {currentStep === 1 ? '' : `Step ${currentStep}: `}{currentStepConfig.title}
          </h2>
          
          <div className="space-y-4 sm:space-y-6">
            {currentStepConfig.fields.map((field) => (
              <div key={field.field} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                
                {field.type === 'multiselect' ? (
                  <div className="flex flex-wrap gap-2">
                    {field.options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleArrayToggle(field.field, option)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          formData[field.field]?.includes(option)
                            ? 'bg-blue-100 text-blue-700 border border-blue-300'
                            : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                        }`}
                      >
                        {option}
                        {formData[field.field]?.includes(option) && ' ✓'}
                      </button>
                    ))}
                  </div>
                ) : field.type === 'select' ? (
                  <select
                    value={formData[field.field] || ''}
                    onChange={(e) => handleInputChange(field.field, e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    required={field.required}
                  >
                    <option value="">Select an option</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                ) : field.type === 'textarea' ? (
                  <textarea
                    value={formData[field.field] || ''}
                    onChange={(e) => handleInputChange(field.field, e.target.value)}
                    rows={field.rows || 4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                ) : field.type === 'number' ? (
                  <div>
                    <input
                      type="number"
                      value={formData[field.field] || ''}
                      onChange={(e) => handleInputChange(field.field, parseInt(e.target.value) || 0)}
                      min={field.min}
                      max={field.max}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                      required={field.required}
                    />
                    {field.min && field.max && (
                      <p className="text-xs text-gray-500 mt-1">
                        Range: {field.min} - {field.max} years
                      </p>
                    )}
                  </div>
                ) : (
                  <input
                    type="text"
                    value={formData[field.field] || ''}
                    onChange={(e) => handleInputChange(field.field, e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                )}
                
                {field.required && !formData[field.field] && currentStep === steps.length && (
                  <p className="text-sm text-red-500">This field is required</p>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Buttons - Consistent styling */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`w-full sm:w-auto px-8 py-3 rounded-lg font-medium transition-colors ${
              currentStep === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            ← Back
          </button>
          
          <div className="text-sm text-gray-500 order-first sm:order-none">
            Step {currentStep} of {steps.length}
          </div>
          
          {currentStep < steps.length ? (
            <button
              onClick={handleNext}
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Continue →
            </button>
          ) : (
            <button
              onClick={handleComplete}
              disabled={loading}
              className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Saving...' : 'Complete Onboarding'}
            </button>
          )}
        </div>
        
        {/* Save Status */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Your progress is automatically saved. You can close and return anytime.
          </p>
        </div>
      </div>
    </div>
  );
}