import React from 'react'
import './Trades.css'

const Trades = () => {
  const trades = [
    { icon: "⚡", name: "Electrician", duration: "2 Years", seats: 42, color: "#ff6b6b" },
    { icon: "🔧", name: "Fitter", duration: "2 Years", seats: 42, color: "#4ecdc4" },
    { icon: "🔥", name: "Welder", duration: "1 Year", seats: 28, color: "#ff9f43" },
    { icon: "💻", name: "COPA", duration: "1 Year", seats: 28, color: "#a29bfe" },
    { icon: "🏗️", name: "MMV", duration: "2 Years", seats: 28, color: "#fd79a8" },
    { icon: "🖥️", name: "Cosmetology", duration: "1 Year", seats: 28, color: "#00cec9" },
    { icon: "💻", name: "CHNM", duration: "1 Year", seats: 28, color: "#a29bfe" },
    { icon: "🏗️", name: "Turner", duration: "2 Years", seats: 28, color: "#fd79a8" },
    { icon: "🖥️", name: "RAC", duration: "1 Year", seats: 28, color: "#00cec9" },
    { icon: "💻", name: "Electronics Mechanic", duration: "1 Year", seats: 28, color: "#a29bfe" },
    { icon: "🏗️", name: "Physiotherapy", duration: "2 Years", seats: 28, color: "#fd79a8" },
    { icon: "🖥️", name: "Finance Executive", duration: "1 Year", seats: 28, color: "#00cec9" }
  ]

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
              <button className="card-btn">Learn More <i className="fas fa-arrow-right"></i></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trades