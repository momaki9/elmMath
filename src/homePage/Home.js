// import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Topics from '../components/Topics';

function Home() {
    return (
        <>

            <Alert variant="primary">
                <Alert.Heading>Welcome To Math Practice at home</Alert.Heading>
                <p>
                    Some tips: enter answers as is without any space before or after. For decimals ending in 0 (i.e. 2.40), omit the trailing 0.
                </p>
                <p>
                    Also, do not enter commas when reporting large numbers.
                </p>
                <hr />
                <p className="mb-0">
                    Select from the topics below to get started!
                </p>
            </Alert>
            <Topics />
        </>
        // <>

        //     <h1></h1>
        //     <h1></h1>
        //     <a href="../fifthGradeMath/index.html"><button>Grade 5 Math</button></a>
        //     <a href="#"><button>Grade 7 Math</button></a>
        //     <Link to={"/test"} >Link</Link>
        // </>
    )
};

export default Home;