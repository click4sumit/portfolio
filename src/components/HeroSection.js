
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {

    
    return (
        <>
            <section id='home' className='min-h-screen flex items-center justify-center bg-gray-900'>
                <div className='text-center'>
                    <h1 className="text-5xl font-bold mb-4 text-white">Sumit</h1>
                    <p className="text-xl mb-8 text-gray-300">Full Stack Developers</p>
                    <a href="#contact" className="bg-purple-600 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-purple-700 transition-colors">
                        Get in touch <ArrowRight className="ml-2" /></a>  
                </div>
            </section>            
        </>
        
    )
}