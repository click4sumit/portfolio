'use client'
import { useState } from "react"



export default function ContactSection() {
    const [formData, setFormData] = useState ({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prevState => ({...prevState, [name]: value}) )
    }

    const hadleSubmit = (e) => {
        e.preventDefault();
        setFormData ({name: '', email: '', message: ''})
    }
    
    return (
        <>
            <section id='contact' className='py-20 bg-gray-800'>
                <div className='container mx-auto px-6'>
                    <h2 className="text-3xl font-bold mb-8 text-center text-white">Contact Me</h2>
                    <form onSubmit={hadleSubmit} className="max-w-lg mx-auto">
                        <div className="mb-4">
                            <label htmlFor="" className="block mb-2 text-gray-300">Name</label>
                            <input type="text" 
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-purple-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="" className="block mb-2 text-gray-300">Email</label>
                            <input type="email" 
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-purple-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="" className="block mb-2 text-gray-300">Message</label>
                            <textarea type="message" 
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-purple-500"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-purple-700 transition-colors">Send Message</button>
                    </form>  
                </div>
            </section>            
        </>
        
    )












}