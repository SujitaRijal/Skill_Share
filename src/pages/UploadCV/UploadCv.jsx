import { useState } from 'react';
import { ClipboardList } from 'lucide-react';
// import axios from 'axios';
import toast from 'react-hot-toast';

function UploadCV() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const MAX_FILE_SIZE_MB = 5;

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (file.type !== 'application/pdf') {
      setSelectedFile(null);
      setUploadStatus('Only PDF files are allowed.');
      return;
    }

    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setSelectedFile(null);
      setUploadStatus(`File size must be less than ${MAX_FILE_SIZE_MB}MB.`);
      return;
    }

    setSelectedFile(file);
    setUploadStatus('');
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus('No file selected.');
      return;
    }

    try {
      setIsUploading(true);
      setUploadStatus('Uploading...');

      const formData = new FormData();
      formData.append('cv', selectedFile);

    //   const response = await axios.post(`${import.meta.env.VITE_API_URL}/upload-cv`, formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   });

      setUploadStatus(`Successfully uploaded: ${selectedFile.name}`);
      toast.success("CV uploaded successfully!");
      setSelectedFile(null);
    } catch (error) {
      console.error(error);
      setUploadStatus('Upload failed. Please try again.');
      toast.error("Upload failed.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Upload CV</h1>
      <p className="text-gray-600 text-lg">Upload your professional resume or curriculum vitae (PDF only, max 5MB).</p>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your CV Document</h2>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-4">
            <label
              htmlFor="cv-upload"
              className="cursor-pointer flex items-center px-6 py-3 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition-all transform hover:scale-105"
            >
              <ClipboardList className="w-5 h-5 mr-2" />
              Choose File (PDF)
            </label>
            <input
              id="cv-upload"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
            />
            {selectedFile && (
              <span className="text-gray-700 text-lg truncate max-w-sm">{selectedFile.name}</span>
            )}
          </div>

          {uploadStatus && (
            <p className={`mt-4 text-sm ${uploadStatus.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
              {uploadStatus}
            </p>
          )}

          <button
            onClick={handleUpload}
            disabled={!selectedFile || isUploading}
            className={`mt-6 px-6 py-3 rounded-xl shadow-md transition-all transform hover:scale-105 ${
              selectedFile && !isUploading
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isUploading ? 'Uploading...' : 'Upload CV'}
          </button>
        </div>
      </section>
    </div>
  );
}

export default UploadCV;
