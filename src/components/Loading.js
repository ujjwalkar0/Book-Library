export default function Loading() {
    const noResFound = () =>{
        document.getElementById("loading").innerHTML = "No result found..."
    }
    return (
        <center id="loading">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" 
                style={{ width: "200px", margin: "100px" }}
            />
            {setTimeout(noResFound, 20000)}
        </center>
    )
}