import React from 'react'
import './Trades.css'

const Trades = () => {
 const trades = [
  { icon: "⚡", name: "Electrician", duration: "2 Years", seats: 20, color: "#ff6b6b" },

  { icon: "🔧", name: "Fitter", duration: "2 Years", seats: 20, color: "#4ecdc4" },

  { icon: "🔥", name: "Welder", duration: "1 Year", seats: 20, color: "#ff9f43" },

  { icon: "💻", name: "COPA", duration: "1 Year", seats: 48, color: "#a29bfe" },

  { icon: "🚗", name: "MMV", duration: "2 Years", seats: 24, color: "#fd79a8" },

  { icon: "💄", name: "Cosmetology", duration: "1 Year", seats: 48, color: "#00cec9" },

  { icon: "🧵", name: "CHNM", duration: "1 Year", seats: 48, color: "#6c5ce7" },

  { icon: "⚙️", name: "Turner", duration: "2 Years", seats: 20, color: "#e17055" },

  { icon: "❄️", name: "RAC", duration: "1 Year", seats: 24, color: "#0984e3" },

  { icon: "📡", name: "Electronics Mechanic", duration: "2 Years", seats: 24, color: "#a29bfe" },

  { icon: "🩺", name: "Physiotherapy", duration: "1 Year", seats: 48, color: "#00b894" },

  { icon: "💰", name: "Finance Executive", duration: "1 Year", seats: 48, color: "#f39c12" }
];

  return (
    <section className="trades-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Trades</h2>
          <p className="section-subtitle">Industry-recognized vocational courses</p>
        </div>
        <div className="trades-grid-t">
          {trades.map((trade, index) => (
            <div key={index} className="trade-card" style={{ '--card-color': trade.color }}>
              <div className="card-icon">{trade.icon}</div>
              <h3 className="card-title">{trade.name}</h3>
              <div className="card-details">
                <span><i className="far fa-clock"></i> {trade.duration}</span>
                <span><i className="fas fa-users"></i> {trade.seats} Seats</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trades