
export default async function Home() {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 2000);  // Wait for 2 seconds before resolving
  // });
  return (

    <main className="flex flex-col items-center mt-10 p-6 bg-white shadow-lg rounded-lg">
    <p className="text-lg text-gray-700 mb-4">
      This is a simple Home demo page built with React, TypeScript, and Tailwind CSS.
    </p>
    <button className="px-4 py-2 bg-blue-500 text-white font-semibold hover:bg-gray-600 rounded-md transition duration-300">
      Get Started
    </button>
  </main>
    );
  }

