import Link from "next/link";

const About = () => {
    return (
    <div style={{fontSize: '20px' , color: 'Blue'}}>
      <h1>About</h1>  
      <Link href="/" >
        <button>Back</button>
      </Link>
      <p>I this is ServerSide Rendering with Next</p>
    </div>
    );
}

export default About ;