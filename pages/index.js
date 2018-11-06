import Link from "next/link"
// Link comes from Next .. 
const Index = () => (
    <div>
        <h1>SSR One</h1>
    <Link href="/about" ><button>About</button></Link>

    <Link href="/robots"><button>Robots</button></Link>
    </div>
);



export default Index;