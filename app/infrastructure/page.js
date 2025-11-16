export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Infrastructure</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            State-of-the-art facilities ensuring quality at every step
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">World-Class Processing Facilities</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our modern infrastructure spans over 50,000 sq ft, equipped with cutting-edge machinery and 
              technology to handle large-scale processing while maintaining the highest quality standards. 
              Every facility is designed to meet international food safety and quality requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏭',
                title: 'Processing Units',
                desc: 'Advanced cleaning, grading, and sorting equipment with capacity to process 100+ tons daily'
              },
              {
                icon: '🌡️',
                title: 'Cold Storage',
                desc: 'Temperature-controlled storage facilities maintaining optimal conditions for all products'
              },
              {
                icon: '🔬',
                title: 'Quality Lab',
                desc: 'In-house laboratory with modern testing equipment for comprehensive quality analysis'
              },
              {
                icon: '📦',
                title: 'Packaging Unit',
                desc: 'Automated packaging lines with multiple options for different market requirements'
              },
              {
                icon: '🚚',
                title: 'Loading Facility',
                desc: 'Efficient loading docks with material handling equipment for quick dispatch'
              },
              {
                icon: '🛡️',
                title: 'Fumigation Chamber',
                desc: 'NSPM-compliant fumigation facilities ensuring pest-free export shipments'
              },
            ].map((facility, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                <div className="text-5xl mb-4">{facility.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Process Flow</h2>
            <p className="text-gray-600 text-lg">From procurement to export - ensuring quality at every step</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: '1', title: 'Procurement', icon: '🌾' },
                { step: '2', title: 'Cleaning & Sorting', icon: '🔧' },
                { step: '3', title: 'Quality Testing', icon: '🔬' },
                { step: '4', title: 'Packaging', icon: '📦' },
                { step: '5', title: 'Export Dispatch', icon: '🚢' },
              ].map((process, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 text-center border-2 border-blue-200">
                    <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">
                      {process.step}
                    </div>
                    <div className="text-4xl mb-2">{process.icon}</div>
                    <h3 className="font-semibold text-gray-800">{process.title}</h3>
                  </div>
                  {idx < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4">
                      <svg className="w-4 h-4 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Quality Standards & Compliance</h2>
            <p className="text-gray-600 text-lg">Adhering to international quality and safety standards</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'ISO 22000 Certified',
              'FSSAI Compliant',
              'HACCP Certified',
              'GMP Standards',
              'Organic Certification',
              'APEDA Registered',
              'Phytosanitary Standards',
              'Export Quality Control',
            ].map((standard, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="font-semibold text-gray-800">{standard}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Want to Visit Our Facilities?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            We welcome buyers to visit our processing facilities and witness our quality standards firsthand.
          </p>
          <a href="/contact" className="inline-block bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition text-lg">
            Schedule a Visit
          </a>
        </div>
      </section>
    </div>
  )
}