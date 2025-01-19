import Link from "next/link"


export default function ProjectSection() {

    const projects = [ 
        {
            title: "E-commerce Platform",
            link: "https://dumywebsite.vercel.app/", 
            description: "A full-stack e-commerce solution with React and Node.js",
            image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Task Management App",
            link: "https://school-website-alpha-sooty.vercel.app/",
            description: "A React Native mobile app for managing daily tasks",
            image: "https://images.unsplash.com/photo-1736131660777-8b7aa6bb0efe?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Weather Dashboard",
            link: "https://dumywebsite.vercel.app/",
            description: "A real-time weather dashboard using OpenWeatherMap API",
            image: "https://images.unsplash.com/photo-1713427607338-8edc529eeaa4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },


    ]
    
    return (
        <>
            <section id='projects' className='py-20 bg-gray-800'>
                <div className='container mx-auto px-6'>
                    <h2 className="text-3xl font-bold mb-8 text-center text-white">Project</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            projects.map((project, index) => (
                                <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-md">
                                    <Link href={project.link} target="blank">
                                        <img src={project.image} alt={project.title} width={300} height={200} className="w-full" />
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold mb-2 text-purple-400">{project.title}</h3>
                                            <p className="text-gray-300">{project.description}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))   
                        }
                    </div>  
                </div>
            </section>            
        </>
        
    )












}