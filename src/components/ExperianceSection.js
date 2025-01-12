


export default function ExperianceSection() {

    const experiances = [ 
        {
            company: "Tech Innovators Inc.",
            position: "Senior Full Stack Developer",
            period: "2020 - Present",
            description: "Lead development of multiple web applications using React and Node.js.",
          },
          {
            company: "Digital Solutions LLC",
            position: "Full Stack Developer",
            period: "2018 - 2020",
            description: "Developed and maintained various client projects using MERN stack.",
          },
          {
            company: "StartUp Ventures",
            position: "Junior Developer",
            period: "2016 - 2018",
            description: "Assisted in the development of web applications and gained experience in full-stack development.",
          },
        ]
    
    return (
        <>
            <section id='experience' className='py-20 bg-gray-900'>
                <div className='container mx-auto px-6'>
                    <h2 className="text-3xl font-bold mb-8 text-center text-white">Experiance</h2>
                    <div className="space-y-8">
                        {
                            experiances.map((exp, index) => (
                                <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-2 text-purple-400">{exp.position}</h3>
                                    <p className="text-gray-400 mb-2">{exp.company} | {exp.period}</p>
                                    <p className="text-gray-300">{exp.description}</p>
                                </div>
                            ))   
                        }
                    </div>  
                </div>
            </section>            
        </>
        
    )












}