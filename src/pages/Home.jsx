
function Home() {
    return(
        <div style={{
                backgroundImage: "url('/fr.jpeg')", // replace with your image path
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh", // makes sure it covers full screen height
                padding: "20px",
                color: "#fff" // optional: make text visible on dark background
            }}
        ><h1>ABOUT SHOP DATABASES</h1>
        <h2>Key Feature:</h2>
         <ol>
            <li>Keeps Product Info – Stores details like product name, price, and quantity.</li><br />
            <li>Tracks Sales – Records what items are sold and when.</li><br />
            <li>Manages Stock – Helps know what items are in or out of stock.</li><br />
            <li>Helps in Billing – Makes it easy to create bills for customers.</li>
         </ol>
         <img
                src="/hi.jpeg" aria-placeholder="A simple shop database"
                style={{
                    
                     // replace with your image path
                    Position: "right",
                    width: "30%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginLeft: "20px",
                    
                    

                    
                }}
         />

        </div>
    );
}

export default Home;