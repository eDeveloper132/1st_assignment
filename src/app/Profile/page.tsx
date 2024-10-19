export default async function Profile(){
    await new Promise((resolve) => {
        setTimeout(resolve, 2000);  // Wait for 2 seconds before resolving
      });
    return (
        <div className="bg-gradient-to-r">
            <h1>Profile</h1>
        </div>
    )
}