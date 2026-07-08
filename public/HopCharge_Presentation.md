---
marp: true
theme: default
class: lead
paginate: true
backgroundColor: #ffffff
style: |
  section {
    font-family: 'Inter', sans-serif;
  }
  h1, h2, h3, h4 {
    color: #1a3a5c;
  }
  strong {
    color: #2D8B75;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .highlight-box {
    background-color: #f8f9fa;
    border-left: 5px solid #2D8B75;
    padding: 15px;
    margin-bottom: 15px;
  }
---

# PM School Challenge Concept
## HopCharge ⚡
**Improving Customer Retention and Average Revenue Per User (ARPU)**

---

## 1. Problem Statement

### Redefined Problem Statement
HopCharge provides on-demand, mobile EV charging to users without access to home infrastructure. However, with the rapid expansion of fixed fast-charging networks, HopCharge needs to transition ad-hoc users into loyal, recurring subscribers. We need to develop product features to increase **Customer Retention by 25%** and **ARPU by 15%** by Q4 2025.

### Problem Teardown
High Churn Rate $\rightarrow$ Decreased ARPU $\rightarrow$ Underutilized Mobile Vans $\rightarrow$ Reduced Margins $\rightarrow$ Slower Expansion

### Value Proposition
- **To Customers:** Unparalleled convenience, time saved, and elimination of range anxiety.
- **To HopCharge:** Predictable recurring revenue, optimized van routing, and increased fleet utilization.

---

## 2. Company Overview

**About HopCharge**
HopCharge operates a "virtual energy cloud" using specialized vans equipped with proprietary energy pods to deliver fast charging directly to a customer's location, eliminating grid dependencies.

**Revenue Model**
- **Pay-Per-Use:** Ad-hoc mobile charging for emergencies or top-ups.
- **Subscription (HopchargeX):** Monthly plans for regular charging.
- **B2B / OEM:** Bundled charging for new EV buyers (e.g., Tata.ev).

**Target Audience**
- Tier 1 Urban Residents living in multi-story apartments without dedicated parking.
- Busy professionals who value time over the premium cost of mobile charging.

---

## 3. Competitor Analysis

| Parameters | HopCharge | Tata Power (Fixed) | Mobec (Mobile) |
|---|---|---|---|
| **Model** | Mobile / On-Demand | Fixed Stations | Mobile / On-Demand |
| **Target User** | Convenience / No home charger | Highway / Routine | Convenience |
| **Pricing** | Premium + Subscription | Standard Pay-per-kWh | Premium |
| **Delivery Time** | Scheduled / On-Demand | N/A (Travel required) | Scheduled |
| **Key Advantage** | Zero grid setup, doorstep delivery | Massive nationwide network | Emerging flexibility |

---

## 4. Market Sizing (India EV Charging)

<div class="highlight-box">
  <strong>TAM (Total Addressable Market): $5.5 Billion</strong><br>
  The projected EV charging infrastructure market in India by 2027.
</div>

<div class="highlight-box">
  <strong>SAM (Serviceable Available Market): $1.2 Billion</strong><br>
  Urban residential and commercial EV charging demand (Tier-1 cities).
</div>

<div class="highlight-box">
  <strong>SOM (Serviceable Obtainable Market): $150 Million</strong><br>
  Targeted revenue for on-demand mobile charging solutions in major metros over the next 3 years.
</div>

---

## 5. User Personas

<div class="grid-container">
  <div>
    <h3>🏢 Apartment Resident (Aarav, 34)</h3>
    <ul>
      <li><strong>Characteristics:</strong> Lives in a high-rise without a dedicated EV charger. Relies on public networks.</li>
      <li><strong>Pain Points:</strong> Waiting in queues at public chargers; "charging anxiety" before long trips.</li>
      <li><strong>Needs:</strong> Reliable, recurring charging at home.</li>
    </ul>
  </div>
  <div>
    <h3>⏱️ Busy Professional (Neha, 29)</h3>
    <ul>
      <li><strong>Characteristics:</strong> Values time heavily. Drives to the office daily.</li>
      <li><strong>Pain Points:</strong> Wasting 45+ minutes at a fast-charging station during work hours.</li>
      <li><strong>Needs:</strong> Seamless charging while the car is parked at the office.</li>
    </ul>
  </div>
</div>

---

## 6. Proposed Features

### Feature 1: Predictive Smart Scheduling 🤖
The app integrates with the vehicle's telematics (or learns usage patterns) to predict when the battery will drop below 20%. It preemptively sends a push notification to schedule a HopCharge van exactly when the car is parked at home/office.
* **Benefit:** Increases frequency of use and reduces user cognitive load.

### Feature 2: Neighborhood Pod-Sharing 🏘️
Users can "host" a charging slot. If multiple EVs in the same apartment complex or office park book the same HopCharge van in a 2-hour window, all users get a 15% discount.
* **Benefit:** Massively improves van utilization, reduces travel time between customers, and creates community-driven virality.

---

## 7. Proposed Features (Cont.)

### Feature 3: HopCoins Gamification 🪙
Introduce a reward system where users earn "HopCoins" for maintaining a charging streak (e.g., booking 3 times a month). Coins can be redeemed for free premium time-slots, priority routing during peak hours, or car cleaning add-ons.
* **Benefit:** Directly tackles retention by creating switching costs and habit-building.

---

## 8. RICE Prioritization

| Features | Reach (1-10) | Impact (1-10) | Confidence (%) | Effort (1-10) | Score |
|---|---|---|---|---|---|
| **Neighborhood Sharing** | 8 | 9 | 80% | 6 | **9.6** (1st) |
| **Predictive Scheduling** | 6 | 8 | 70% | 8 | **4.2** (3rd) |
| **HopCoins Gamification** | 10 | 7 | 90% | 7 | **9.0** (2nd) |

---

## 9. Go-To-Market (GTM) Strategy

**Phase 1: Neighborhood Sharing (Months 1-2)**
- Launch a pilot in dense tech parks and specific high-rise societies in Gurgaon/Bengaluru.
- Distribute referral codes to Residents' Welfare Associations (RWAs).

**Phase 2: HopCoins Rollout (Months 3-4)**
- Introduce the wallet system via an app update.
- Seed existing HopchargeX subscribers with bonus coins to kickstart engagement.

**Phase 3: Predictive Analytics (Months 5-6)**
- Partner with OEMs for telematics API integration.
- Soft launch to heavy users first to train the prediction algorithm.

---

## 10. Key Metrics to Track

**North Star Metric:**
- **Average Revenue Per User (ARPU):** Track the shift from single ad-hoc uses to recurring monthly spend.

**Primary Metrics:**
- **Customer Retention Rate:** Percentage of users who book >2 times a month.
- **Van Utilization Rate:** Average hours per day a HopCharge van is actively charging vs. travelling.

**Secondary Metrics:**
- **Community Adoption:** Number of multi-car bookings per location (Neighborhood sharing).
- **Gamification Engagement:** Percentage of HopCoins redeemed within 30 days of earning.
