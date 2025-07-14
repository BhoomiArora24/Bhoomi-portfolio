import React from 'react';

const PortfolioCard = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg border border-gray-600 max-w-md mx-auto font-sans">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700">
          <img 
            src="/api/placeholder/48/48" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-lg font-medium">Hi, I'm Bhoomi Arora 👋</h2>
          <p className="text-gray-300 text-sm">
            Aspiring Full-Stack Developer | Frontend<br />
            Specialist | Java DSA Learner
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Currently building real-world projects while<br />
            mastering data structures through Java.
          </p>
        </div>
      </div>

      {/* What I've Built So Far Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-4">What I've Built So Far--</h3>
        
        {/* Smart Farming Project */}
        <div className="flex gap-3 mb-4">
          <div className="flex-1">
            <h4 className="text-yellow-400 font-medium mb-2">🌾 Smart Farming E-commerce Website</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              A centralized platform that allows small-scale farmers to list and sell their products online. Users can browse items from multiple vendors, manage carts, and place orders easily. Built using HTML, CSS, JavaScript, PHP, and MySQL, the project aims to improve digital access for local farmers and streamline the customer shopping experience.
            </p>
          </div>
          <div className="w-20 h-20 bg-gray-700 rounded overflow-hidden flex-shrink-0">
            <img 
              src="/api/placeholder/80/80" 
              alt="Smart Farming Project" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Taskify Project */}
        <div className="flex gap-3 mb-4">
          <div className="flex-1">
            <h4 className="text-yellow-400 font-medium mb-2">⚫ Taskify - Employee Management System</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              A web-based system to manage employee data, work tracking, revenue, profit/loss, and performance rankings — all in one place. Built using HTML, CSS, JavaScript, PHP, MySQL, and phpMyAdmin, Taskify helps streamline company operations through centralized data management.
            </p>
          </div>
          <div className="w-20 h-20 bg-gray-700 rounded overflow-hidden flex-shrink-0">
            <img 
              src="/api/placeholder/80/80" 
              alt="Taskify Project" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* PDF Editor Project */}
        <div className="flex gap-3">
          <div className="flex-1">
            <h4 className="text-yellow-400 font-medium mb-2">📄 PDF Editor (In-Browser Text Editor)</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              A dynamic web tool that allows users to upload PDFs, add custom text, and make edits directly within the browser. The tool enables real-time PDF editing without the need for any external software.
            </p>
          </div>
          <div className="w-20 h-20 bg-gray-700 rounded overflow-hidden flex-shrink-0">
            <img 
              src="/api/placeholder/80/80" 
              alt="PDF Editor Project" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;