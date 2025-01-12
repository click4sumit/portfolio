


export default function SkillSection() {
    const skills = ["html", "css", "javascript", 'React', 'MongoDb', 'NextJS', 'Node.js', 'Express' ]
    
    return (
        <>
            <section id='skills' className='py-20 bg-gray-900'>
                <div className='container mx-auto px-6'>
                    <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {
                            skills.map((skill, index) => (
                                <span key={index} className="bg-gray-800 text-purple-400 px-4 py-2 rounded-full shadow " >{skill}</span>
                            ))
                        }
                    </div>  
                </div>
            </section>            
        </>
        
    )












}