export default async function Gallery(){
    await new Promise((resolve) => {
        setTimeout(resolve, 2000);  // Wait for 2 seconds before resolving
      });
    return (
        <div className="bg-gradient-to-r">
            <h1>Gallery</h1>
        </div>
    )
}