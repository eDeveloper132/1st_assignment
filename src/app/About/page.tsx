
export default async function About(){
    // await new Promise((resolve) => {
    //     setTimeout(resolve, 2000);  // Wait for 2 seconds before resolving
    //   });
    return(
        <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-md">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
            Second About Demo Page
          </h2>
          <p className="text-gray-600 text-center mb-6">
            This is a second demo page with a different layout and gradient background. Feel free to explore!
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              Feature 1: Responsive Layout
            </li>
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              Feature 2: Beautiful Gradient Background
            </li>
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              Feature 3: Tailwind Utility Classes
            </li>
          </ul>
  
          <div className="text-center mt-6">
            <a
              href="/"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    )
}