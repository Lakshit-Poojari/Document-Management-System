"use client"

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-8 bg-amber-50">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-amber-900 mb-6">
              This is Document System Management
          </h1>
        </div>

        <br />

        <div >
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Manage, organize, and access your documents from one centralized platform. 
              Upload files, categorize documents, track document details, and securely 
              store important information with ease.
          </p>
        </div>

        <br />

        <div className="bg-white shadow-2xl rounded-2xl p-8">
          <h2 className="text-3xl font-semibold text-amber-800 mb-6">Features</h2>
          <br />
          <ul className="space-y-4 text-lg text-gray-700">   
            <li>🔐 Secure User Authentication</li>
            <li>📄 Document Upload and Download</li>
            <li>📁 Category-Based Organization</li>
            <li>🔍 Search and Manage Documents</li>
            <li>👥 Role-Based Access Control</li>
            <li>⚡ Fast and Reliable Document Access</li>
          </ul>
        </div>
      </div>     
    </>
  );
}
