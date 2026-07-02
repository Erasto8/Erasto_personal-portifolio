import React, { useState } from 'react'
import Modal from './Modal.jsx'

export default function Insights() {
  const [activeModal, setActiveModal] = useState(null) // 'survey' | 'cv' | 'defects' | null

  return (
    <section className="extra-section bg-gradient-to-br from-lime-50 to-yellow-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-4 font-bold text-2xl sm:text-3xl">📝 Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="card bg-white rounded-xl p-3 shadow-card hover:-translate-y-2 hover:shadow-card-hover transition-all duration-300 h-full">
              <h5 className="font-semibold">🏚️ 5 Signs Your Building Needs a Condition Survey</h5>
              <p className="text-sm text-gray-600">March 2026</p>
              <p>Learn how early defect detection saves thousands in repairs.</p>
              <button className="border-2 border-primary text-primary font-semibold py-1 px-3 rounded-full text-sm hover:bg-primary hover:text-white transition-colors duration-300" onClick={() => setActiveModal('survey')}>Read more →</button>
            </div>
          </div>
          <div>
            <div className="card bg-white rounded-xl p-3 shadow-card hover:-translate-y-2 hover:shadow-card-hover transition-all duration-300 h-full">
              <h5 className="font-semibold">🚀 Why an Online CV Boosts Your Career</h5>
              <p className="text-sm text-gray-600">February 2026</p>
              <p>Modern recruiters love personal websites – here's why.</p>
              <button className="border-2 border-primary text-primary font-semibold py-1 px-3 rounded-full text-sm hover:bg-primary hover:text-white transition-colors duration-300" onClick={() => setActiveModal('cv')}>Read more →</button>
            </div>
          </div>
          <div>
            <div className="card bg-white rounded-xl p-3 shadow-card hover:-translate-y-2 hover:shadow-card-hover transition-all duration-300 h-full">
              <h5 className="font-semibold">🔧 Top 10 Defects in Tanzanian Buildings</h5>
              <p className="text-sm text-gray-600">January 2026</p>
              <p>From foundation cracks to poor drainage – what to watch for.</p>
              <button className="border-2 border-primary text-primary font-semibold py-1 px-3 rounded-full text-sm hover:bg-primary hover:text-white transition-colors duration-300" onClick={() => setActiveModal('defects')}>Read more →</button>
            </div>
          </div>
        </div>
      </div>

      {activeModal === 'survey' && (
        <Modal title="Why Your Building Needs a Condition Survey" icon="fa-building" onClose={() => setActiveModal(null)}>
          <p>A professional building condition survey is essential for:</p>
          <ul>
            <li><strong>Identifying hidden defects</strong> – Cracks, dampness, structural movement, roof leaks.</li>
            <li><strong>Safety assurance</strong> – Prevents accidents from failing walls or wiring.</li>
            <li><strong>Financial planning</strong> – Budget for repairs, avoid emergency costs.</li>
            <li><strong>Legal compliance</strong> – Required for insurance or sale.</li>
            <li><strong>Extending building lifespan</strong> – Early detection of corrosion, termites, foundation settlement.</li>
          </ul>
          <p><strong>Real example:</strong> A commercial building in Dar es Salaam had minor wall cracks. A survey revealed severe foundation movement that would have collapsed within 2 years. The owner saved over 80 million TZS by repairing early.</p>
          <p><em>Don't wait until it's too late. Schedule a condition survey today.</em></p>
        </Modal>
      )}

      {activeModal === 'cv' && (
        <Modal title="Why an Online CV Boosts Your Career" icon="fa-globe" onClose={() => setActiveModal(null)}>
          <p>An online CV (personal website) gives you a massive advantage:</p>
          <ul>
            <li><strong>First impression matters</strong> – 78% of recruiters look online before calling.</li>
            <li><strong>Showcase your portfolio</strong> – Photos, reports, videos build trust.</li>
            <li><strong>Always accessible</strong> – No attachments, just a link.</li>
            <li><strong>SEO for job searches</strong> – Recruiters Google your name, your site appears.</li>
            <li><strong>Analytics</strong> – See who viewed your CV.</li>
          </ul>
          <p><strong>Case study:</strong> A Tanzanian engineer with a simple online CV got contacted by 3 international firms within a month. Without it, her PDF CV was lost in email inboxes.</p>
          <p><em>I build custom, mobile-friendly CV websites starting at Tsh. 3,500. Contact me for a demo, or order directly at mimis57-onlinecv.co.tz.</em></p>
        </Modal>
      )}

      {activeModal === 'defects' && (
        <Modal title="Top 10 Building Defects in Tanzania" icon="fa-tools" onClose={() => setActiveModal(null)}>
          <ol>
            <li><strong>Foundation cracks</strong> – Poor soil compaction or water infiltration.</li>
            <li><strong>Roof leaks</strong> – Poor quality iron sheets, no underlay.</li>
            <li><strong>Dampness & rising damp</strong> – No damp-proof course (DPC).</li>
            <li><strong>Wall cracking</strong> – Differential settlement or thermal movement.</li>
            <li><strong>Poor drainage & water pooling</strong> – Damages foundations.</li>
            <li><strong>Electrical faults</strong> – Undersized wiring, no earthing, fire hazard.</li>
            <li><strong>Termite infestation</strong> – Destroys wood and weakens concrete.</li>
            <li><strong>Corrosion of reinforcement</strong> – Salt air near coast rusts steel bars.</li>
            <li><strong>Plaster delamination</strong> – Poor mix or lack of bonding agent.</li>
            <li><strong>Inadequate ventilation</strong> – Condensation, mould, respiratory issues.</li>
          </ol>
          <p>Most defects are preventable or repairable if detected early. A condition survey identifies them before they become catastrophic.</p>
        </Modal>
      )}
    </section>
  )
}
