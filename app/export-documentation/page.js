export default function ExportDocumentationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Export Documentation</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Complete documentation support for hassle-free international trade
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Comprehensive Export Documentation Services</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We handle all export documentation requirements, ensuring compliance with international trade regulations 
              and customs requirements. Our experienced team manages the entire paperwork process, making exports smooth 
              and hassle-free for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Export Documents We Provide</h2>
            <p className="text-gray-600 text-lg">All essential documents for international shipments</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📜',
                title: 'Commercial Invoice',
                desc: 'Detailed invoice with product description, quantity, unit price, and total value'
              },
              {
                icon: '📦',
                title: 'Packing List',
                desc: 'Complete list of packages with net/gross weight, dimensions, and contents'
              },
              {
                icon: '🌍',
                title: 'Certificate of Origin',
                desc: 'Official certification stating the country of origin of goods'
              },
              {
                icon: '🌱',
                title: 'Phytosanitary Certificate',
                desc: 'Plant health certification for agricultural products (when required)'
              },
              {
                icon: '✅',
                title: 'Quality Certificate',
                desc: 'Detailed quality analysis report from accredited laboratories'
              },
              {
                icon: '🚢',
                title: 'Bill of Lading',
                desc: 'Shipping document issued by carrier acknowledging receipt of cargo'
              },
              {
                icon: '📊',
                title: 'Fumigation Certificate',
                desc: 'Certificate of fumigation treatment (for markets requiring pest control)'
              },
              {
                icon: '💰',
                title: 'Insurance Certificate',
                desc: 'Marine insurance documentation (for CIF shipments)'
              },
              {
                icon: '📝',
                title: 'Export License',
                desc: 'Government authorization for export (when applicable)'
              },
              {
                icon: '🔒',
                title: 'Health Certificate',
                desc: 'Food safety and health compliance certification'
              },
              {
                icon: '📑',
                title: 'GSP Certificate',
                desc: 'Generalized System of Preferences certificate (for eligible countries)'
              },
              {
                icon: '📧',
                title: 'Bank Documents',
                desc: 'Letter of Credit, SWIFT copy, and other bank-related documents'
              },
            ].map((doc, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-gray-100">
                <div className="text-5xl mb-4">{doc.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{doc.title}</h3>
                <p className="text-gray-600">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Terms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Shipping Terms We Support</h2>
            <p className="text-gray-600 text-lg">Flexible Incoterms to meet your requirements</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                term: 'FOB',
                full: 'Free On Board',
                desc: 'Seller delivers goods on board the vessel at the port of shipment'
              },
              {
                term: 'CIF',
                full: 'Cost, Insurance & Freight',
                desc: 'Seller pays for freight and insurance to destination port'
              },
              {
                term: 'CFR',
                full: 'Cost & Freight',
                desc: 'Seller pays freight charges to destination port'
              },
              {
                term: 'EXW',
                full: 'Ex Works',
                desc: 'Buyer collects goods from seller\'s warehouse'
              },
            ].map((term, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-200">
                <div className="text-3xl font-bold text-blue-900 mb-2">{term.term}</div>
                <h3 className="font-bold text-gray-800 mb-2">{term.full}</h3>
                <p className="text-sm text-gray-600">{term.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ports */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Export Ports</h2>
            <p className="text-gray-600 text-lg">Strategic access to major Indian seaports</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Mundra Port', state: 'Gujarat' },
              { name: 'Nhava Sheva (JNPT)', state: 'Maharashtra' },
              { name: 'Pipavav Port', state: 'Gujarat' },
              { name: 'Kandla Port', state: 'Gujarat' },
            ].map((port, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-4xl mb-3">🚢</div>
                <h3 className="font-bold text-blue-900 text-lg mb-1">{port.name}</h3>
                <p className="text-gray-600 text-sm">{port.state}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Export Process</h2>
            <p className="text-gray-600 text-lg">Seamless process from order to delivery</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { step: 1, title: 'Order Confirmation', desc: 'Receive and confirm purchase order with specifications' },
                { step: 2, title: 'Production & Quality Check', desc: 'Process products and conduct quality testing' },
                { step: 3, title: 'Documentation Preparation', desc: 'Prepare all required export documents' },
                { step: 4, title: 'Pre-Shipment Inspection', desc: 'Third-party inspection (if requested)' },
                { step: 5, title: 'Customs Clearance', desc: 'Complete customs formalities and clearance' },
                { step: 6, title: 'Shipment Dispatch', desc: 'Load and dispatch cargo to destination port' },
                { step: 7, title: 'Document Courier', desc: 'Send all original documents to buyer/bank' },
                { step: 8, title: 'Delivery Tracking', desc: 'Provide tracking updates until destination arrival' },
              ].map((process) => (
                <div key={process.step} className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-1">{process.title}</h3>
                    <p className="text-gray-600">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Export Documentation Support?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Our experienced team handles all documentation requirements. Get in touch for expert assistance.
          </p>
          <a href="/contact" className="inline-block bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition text-lg">
            Contact Our Export Team
          </a>
        </div>
      </section>
    </div>
  )
}