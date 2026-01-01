
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import Button from '../ui/Button';
import { Video, Loader2, Play, Download, AlertTriangle } from 'lucide-react';

// Define the scenes based on the user's reference video
const PRESET_SCENES = [
  {
    id: 'fleet',
    label: 'Fleet Truck Driving',
    prompt: "Cinematic drone shot, a clean white box truck with 'FLOOD DOCTOR' logo driving on a suburban road, sunny day, 4k, high quality restoration company commercial."
  },
  {
    id: 'warehouse',
    label: 'Warehouse Forklift',
    prompt: "Medium shot, restoration warehouse, a worker in a safety vest driving a forklift moving pallets of equipment, industrial setting, professional lighting."
  },
  {
    id: 'equipment',
    label: 'Carrying Equipment',
    prompt: "Low angle shot, two restoration technicians in safety vests carrying blue industrial air mover fans towards a house, determined expressions, sunny day."
  },
  {
    id: 'demo',
    label: 'Drywall Demolition',
    prompt: "Close up action shot, restoration worker with a pry bar removing water damaged drywall, debris falling, wearing gloves and safety gear, cinematic slow motion."
  },
  {
    id: 'tech-hallway',
    label: 'Tech in PPE',
    prompt: "Tracking shot from behind, restoration technician in a white Tyvek suit walking down a dimly lit hallway carrying a red tool case, ominous but professional atmosphere."
  }
];

const VeoGenerator: React.FC = () => {
  const [hasKey, setHasKey] = useState(false);
  const [selectedScene, setSelectedScene] = useState(PRESET_SCENES[0]);
  const [customPrompt, setCustomPrompt] = useState(PRESET_SCENES[0].prompt);
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  // Check for API Key on mount
  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio && window.aistudio.hasSelectedApiKey) {
        const has = await window.aistudio.hasSelectedApiKey();
        setHasKey(has);
      }
    };
    checkKey();
  }, []);

  const handleSelectKey = async () => {
    if (window.aistudio && window.aistudio.openSelectKey) {
      await window.aistudio.openSelectKey();
      // Assume success after dialog interaction to mitigate race condition
      setHasKey(true);
    }
  };

  const handleSceneChange = (scene: typeof PRESET_SCENES[0]) => {
    setSelectedScene(scene);
    setCustomPrompt(scene.prompt);
  };

  const generateVideo = async () => {
    setIsGenerating(true);
    setVideoUrl(null);
    setError(null);
    setStatus('Initializing generation...');

    try {
      // Initialize AI with the environment key (injected by the platform)
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      setStatus('Sending request to Google Veo...');
      
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: customPrompt,
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      setStatus('Video generating... (this may take a minute)');

      // Poll for completion
      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000)); // Poll every 5s
        operation = await ai.operations.getVideosOperation({ operation: operation });
        setStatus('Rendering frames...');
      }

      if (operation.response?.generatedVideos?.[0]?.video?.uri) {
        const downloadLink = operation.response.generatedVideos[0].video.uri;
        // Append API key for viewing
        setVideoUrl(`${downloadLink}&key=${process.env.API_KEY}`);
        setStatus('Complete!');
      } else {
        throw new Error("No video URI returned.");
      }

    } catch (err: any) {
      console.error(err);
      if (err.message && err.message.includes('Requested entity was not found')) {
         setHasKey(false); // Reset key state if invalid
         setError("API Key invalid or expired. Please select a key again.");
      } else {
         setError("Failed to generate video. Please try again.");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  if (!hasKey) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12 text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <Video size={32} />
        </div>
        <h2 className="text-2xl font-display font-medium text-gray-900 mb-4">
          Enable Video Generation
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          To generate custom Flood Doctor hero videos using Google Veo, you must connect a paid Google Cloud Project API key.
        </p>
        <Button onClick={handleSelectKey} variant="primary" className="h-12 px-8">
          Connect API Key
        </Button>
        <p className="mt-6 text-xs text-gray-400">
          <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="underline hover:text-primary">
            View billing documentation
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* Controls */}
      <div className="lg:col-span-5 space-y-8">
        
        {/* Scene Selector */}
        <div className="space-y-4">
          <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
            1. Select a Scene Style
          </label>
          <div className="grid grid-cols-1 gap-3">
            {PRESET_SCENES.map((scene) => (
              <button
                key={scene.id}
                onClick={() => handleSceneChange(scene)}
                className={`flex items-center text-left p-4 rounded-xl border transition-all ${
                  selectedScene.id === scene.id
                    ? 'border-primary bg-blue-50 ring-1 ring-primary'
                    : 'border-gray-200 hover:border-blue-200 bg-white'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 ${
                   selectedScene.id === scene.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {scene.id === 'fleet' && '🚛'}
                  {scene.id === 'warehouse' && '🏗️'}
                  {scene.id === 'equipment' && '📦'}
                  {scene.id === 'demo' && '🔨'}
                  {scene.id === 'tech-hallway' && '👷'}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{scene.label}</div>
                  <div className="text-xs text-gray-500 truncate max-w-[200px]">{scene.prompt}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Prompt Editor */}
        <div className="space-y-4">
          <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
            2. Refine Prompt (Optional)
          </label>
          <textarea
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            rows={4}
            className="w-full p-4 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-gray-700 text-sm leading-relaxed resize-none"
          />
          <div className="text-xs text-gray-500">
            Tip: Be specific about lighting ("cinematic", "sunny") and motion ("drone shot", "tracking shot").
          </div>
        </div>

        {/* Generate Button */}
        <Button 
          onClick={generateVideo} 
          disabled={isGenerating} 
          fullWidth 
          variant="primary"
          className="h-14 text-lg shadow-google hover:shadow-google-hover"
        >
          {isGenerating ? (
            <span className="flex items-center gap-2">
              <Loader2 className="animate-spin" /> {status}
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Play fill="currentColor" /> Generate Video
            </span>
          )}
        </Button>
        
        {error && (
            <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm border border-red-100 flex items-start gap-3">
                <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                {error}
            </div>
        )}
      </div>

      {/* Preview Area */}
      <div className="lg:col-span-7">
        <div className="sticky top-24">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">
                3. Preview & Download
            </label>
            
            <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative flex items-center justify-center border border-gray-800">
                {videoUrl ? (
                    <video 
                        src={videoUrl} 
                        controls 
                        autoPlay 
                        loop 
                        className="w-full h-full object-contain"
                    />
                ) : (
                    <div className="text-center p-8">
                        {isGenerating ? (
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 border-4 border-white/20 border-t-primary rounded-full animate-spin mb-6"></div>
                                <div className="text-white font-medium text-lg">{status}</div>
                                <div className="text-white/50 text-sm mt-2">AI is dreaming up your video...</div>
                            </div>
                        ) : (
                            <div className="text-white/30 flex flex-col items-center">
                                <Video size={64} className="mb-4" />
                                <div className="text-lg font-medium">Ready to Generate</div>
                                <div className="text-sm">Select a scene and click Generate</div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {videoUrl && (
                <div className="mt-6 flex justify-end">
                    <a 
                        href={videoUrl} 
                        download="flood-doctor-veo-clip.mp4" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors shadow-sm"
                    >
                        <Download size={18} /> Download MP4
                    </a>
                </div>
            )}
            
            <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-2">About Google Veo</h4>
                <p className="text-sm text-blue-800 leading-relaxed">
                    Veo is Google's most capable generative video model. It creates high-quality, 1080p resolution clips. 
                    Use these clips to build your own hero videos or social media content.
                </p>
            </div>
        </div>
      </div>

    </div>
  );
};

export default VeoGenerator;
