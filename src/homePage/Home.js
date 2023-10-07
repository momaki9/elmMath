import { Link } from "react-router-dom";
function Home() {
    return (
        <>
            <h1>Welcome To Math Practice</h1>
            <h1>Some tips: Enter answers as is without any space before or after. For decimals ending in 0 (i.e. 2.40), omit the trailing 0.</h1>
            <a href="../fifthGradeMath/index.html"><button>Grade 5 Math</button></a>
            <a href="#"><button>Grade 7 Math</button></a>
            <Link to={"./src/fifthGradeMath/index.html"}>ok</Link>
            <Link to={"/test"} >Link</Link>
        </>
    )
};

export default Home;