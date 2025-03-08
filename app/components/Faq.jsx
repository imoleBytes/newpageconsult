import React from 'react';

const Faq = () => {
    return (
        // <!-- FAQ Section -->
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Find answers to common questions about our tutoring services.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-6">
                        <div className="border border-gray-200 rounded-lg">
                            <button className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold focus:outline-none" onClick="toggleFAQ(this)">
                                <span>How do you match students with tutors?</span>
                                <i className="fas fa-chevron-down text-primary transition-transform"></i>
                            </button>
                            <div className="px-6 pb-4 hidden">
                                <p className="text-gray-600">
                                    We match students with tutors based on the student's academic needs, learning style, personality, and schedule. We take into account the tutor's expertise, teaching style, and availability to ensure the best possible match for effective learning.
                                </p>
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg">
                            <button className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold focus:outline-none" onClick="toggleFAQ(this)">
                                <span>How often should my child meet with a tutor?</span>
                                <i className="fas fa-chevron-down text-primary transition-transform"></i>
                            </button>
                            <div className="px-6 pb-4 hidden">
                                <p className="text-gray-600">
                                    The frequency of tutoring sessions depends on your child's needs and goals. For students who need ongoing support, we typically recommend 1-2 sessions per week. For test preparation or help with specific topics, sessions can be scheduled as needed.
                                </p>
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg">
                            <button className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold focus:outline-none" onClick="toggleFAQ(this)">
                                <span>Do you offer group tutoring?</span>
                                <i className="fas fa-chevron-down text-primary transition-transform"></i>
                            </button>
                            <div className="px-6 pb-4 hidden">
                                <p className="text-gray-600">
                                    Yes, we offer small group tutoring sessions for students who prefer a collaborative learning environment or want a more cost-effective option. Groups are limited to 3-4 students to ensure each student receives adequate attention.
                                </p>
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg">
                            <button className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold focus:outline-none" onClick="toggleFAQ(this)">
                                <span>What qualifications do your tutors have?</span>
                                <i className="fas fa-chevron-down text-primary transition-transform"></i>
                            </button>
                            <div className="px-6 pb-4 hidden">
                                <p className="text-gray-600">
                                    All our tutors have at minimum a bachelor's degree in their subject area, and many have advanced degrees. They undergo a rigorous screening process, including background checks, and receive ongoing training in effective teaching methods.
                                </p>
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg">
                            <button className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold focus:outline-none" onClick="toggleFAQ(this)">
                                <span>How do online tutoring sessions work?</span>
                                <i className="fas fa-chevron-down text-primary transition-transform"></i>
                            </button>
                            <div className="px-6 pb-4 hidden">
                                <p className="text-gray-600">
                                    Online tutoring sessions take place on our secure, interactive platform that includes video conferencing, a virtual whiteboard, screen sharing, and document uploading capabilities. All you need is a computer or tablet with internet access.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    );
}

export default Faq;
