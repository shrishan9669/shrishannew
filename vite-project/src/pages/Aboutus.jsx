import React from 'react';
import Footer from '../components/footer';

const About = () => {
  return (
    <div >
 <section className="bg-gray-900 text-white py-32 px-8 ">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Web3India</h1>
        <p className="text-lg leading-relaxed">
          Web3India is a global platform dedicated to empowering Web3 blockchain companies by promoting their brands and products to a broader audience. With a vibrant community of over <span className="font-semibold">300,000 students</span> and partnerships with more than <span className="font-semibold">1,400 colleges</span>, we are at the forefront of blockchain innovation. Currently, we are actively engaged in <span className="font-semibold">five major Web3 projects</span>, underscoring our commitment to advancing blockchain technology.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          As a service-based blockchain enterprise, Web3India offers end-to-end support for blockchain projects, helping businesses achieve their goals in the Web3 space. Our mission is to become the go-to destination for collaboration, innovation, and growth in the blockchain ecosystem.
        </p>
      </div>
     
    </section>
    <Footer/>
    </div>
   
  );
};

export default About;
