import Link from "next/link"


export default function ProjectSection() {

    const projects = [ 
        {
            title: "Dummy Apple Website",
            link: "https://dumywebsite.vercel.app/", 
            description: "A fully responsive website based on Nextjs",
            image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "School Website",
            link: "https://school-website-alpha-sooty.vercel.app/",
            description: "A school website with react, node, mongodb",
            image: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Fully Responsive Website",
            link: "https://responsive-website-pied-psi.vercel.app/",
            description: "Website based on Mern stack ",
            image: "https://plus.unsplash.com/premium_photo-1683288662040-5ca51d0880b2?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },

        {
            title: "Parallax Website",
            link: "https://p3-parallax-website.netlify.app/",
            description: "Website based on Parallax effect",
            image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },

        {
            title: "Background Color Code",
            link: "https://background-color-code.netlify.app/",
            description: "Applocation to get color code",
            image: "https://images.unsplash.com/photo-1524440914234-440f66215e1a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },

        {
            title: "Calculator",
            link: "https://p4-online-calculator.netlify.app/",
            description: "Calculator with react",
            image: "https://images.unsplash.com/photo-1611125832047-1d7ad1e8e48f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                                        <img src={project.image} alt={project.title} className="w-full h-60 w-96" />
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
