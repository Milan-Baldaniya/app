export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Krushi World Export</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your Trusted Partner in Premium Agro Exports Since 2010
          </p>
        </div>
      </div>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Founded in 2010, Krushi World Export has grown to become one of India's leading exporters 
                of premium quality agro products. With over 15 years of experience in the international trade 
                of spices, grains, pulses, oil seeds, and dry fruits, we have established a reputation for 
                excellence and reliability.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Our commitment to quality begins at the farm level, working closely with farmers across India 
                to ensure sustainable practices and superior product quality. Every product undergoes rigorous 
                quality checks at our state-of-the-art processing facilities before reaching global markets.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, we proudly serve clients in over 50 countries across Asia, Europe, North America, and 
                the Middle East, delivering not just products but trust and partnership.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-blue-900 mb-2">50+</div>
                <p className="text-gray-700 font-semibold">Countries Served</p>
              </div>
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-amber-700 mb-2">15+</div>
                <p className="text-gray-700 font-semibold">Years Experience</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-green-700 mb-2">500+</div>
                <p className="text-gray-700 font-semibold">Happy Clients</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-purple-700 mb-2">100+</div>
                <p className="text-gray-700 font-semibold">Products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To deliver premium quality Indian agro products to global markets while maintaining the highest 
                standards of quality, sustainability, and customer satisfaction. We strive to bridge the gap 
                between Indian farmers and international buyers, creating value for all stakeholders.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the world's most trusted name in Indian agro exports, recognized for our commitment to 
                quality, innovation, and sustainable practices. We envision a future where we empower farming 
                communities while serving the diverse needs of global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: '✅',
                title: 'Quality First',
                desc: 'Uncompromising commitment to delivering the highest quality products'
              },
              {
                icon: '🤝',
                title: 'Integrity',
                desc: 'Honest, transparent, and ethical in all our business dealings'
              },
              {
                icon: '🌱',
                title: 'Sustainability',
                desc: 'Supporting sustainable farming practices and environmental responsibility'
              },
              {
                icon: '💡',
                title: 'Innovation',
                desc: 'Continuously improving our processes and embracing new technologies'
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Certifications</h2>
            <p className="text-xl text-gray-200">Certified for quality, safety, and excellence</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'ISO 22000', desc: 'Food Safety Management System' },
              { name: 'FSSAI', desc: 'Food Safety and Standards Authority of India' },
              { name: 'Organic India', desc: 'Certified Organic Products' },
              { name: 'APEDA', desc: 'Agricultural and Processed Food Products Export' },
            ].map((cert, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center hover:bg-white/20 transition">
                <div className="text-5xl mb-3">🏆</div>
                <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                <p className="text-gray-200 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can meet your agro product requirements with our premium quality offerings.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/products" className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition text-lg">
              View Products
            </a>
            <a href="/contact" className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition text-lg">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}