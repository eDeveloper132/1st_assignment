export default async function Products(){
    await new Promise((resolve) => {
        setTimeout(resolve, 2000);  // Wait for 2 seconds before resolving
      });
    return (
        <div className="bg-gradient-to-r">
            <h1>Products</h1>
        </div>
    )
}