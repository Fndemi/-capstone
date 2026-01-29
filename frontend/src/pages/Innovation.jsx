import React from 'react';
import styled from 'styled-components';
import VideoPlayer from '../components/VideoPlayer';

const ContentContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
  
  h2 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 2rem;
    font-size: 2.2rem;
    text-align: center;
  }
  
  h3 {
    color: ${props => props.theme.colors.primary};
    margin: 2.5rem 0 1.2rem 0;
    font-size: 1.5rem;
  }
  
  p {
    line-height: 1.8;
    margin-bottom: 1.8rem;
    color: #4a5568;
    font-size: 1.1rem;
  }
  
  ul {
    margin-bottom: 2.5rem;
    
    li {
      margin-bottom: 1rem;
      line-height: 1.7;
      color: #4a5568;
      font-size: 1.05rem;
      
      strong {
        color: ${props => props.theme.colors.primary};
        font-weight: 600;
      }
    }
  }
  
  .highlight-box {
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    padding: 2rem;
    border-radius: 12px;
    border-left: 5px solid ${props => props.theme.colors.primary};
    margin: 2.5rem 0;
    
    h4 {
      color: ${props => props.theme.colors.primary};
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }
  }
`;

const Innovation = () => {
  return (
    <section className="section" style={{ paddingTop: '2rem', marginTop: '60px' }}>
      <div className="container">
        <ContentContainer>
          <h2>Blockchain Technology Innovation</h2>
          
          <VideoPlayer 
            url="/videos/WIN_20260129_13_34_06_Pro.mp4" 
            title="Innovation Presentation - Blockchain Technology"
          />
          
          <h3>Revolutionary Distributed Ledger Technology</h3>
          <p>Blockchain represents one of the most significant technological innovations of the 21st century, fundamentally transforming how we approach data storage, transaction processing, and trust establishment in digital systems. This distributed ledger technology creates an immutable, transparent, and decentralized record-keeping system that eliminates the need for traditional intermediaries.</p>
          
          <div className="highlight-box">
            <h4>Core Innovation Principles</h4>
            <ul>
              <li><strong>Immutability:</strong> Once data is recorded in a blockchain, it becomes virtually impossible to alter, providing unprecedented data integrity</li>
              <li><strong>Decentralization:</strong> No single point of control or failure, distributing power across network participants</li>
              <li><strong>Transparency:</strong> All transactions are visible to network participants while maintaining privacy through cryptographic techniques</li>
              <li><strong>Consensus Mechanisms:</strong> Democratic validation processes ensure network agreement on transaction validity</li>
            </ul>
          </div>
          
          <h3>Technical Architecture and Components</h3>
          <p>The blockchain architecture consists of several interconnected components that work together to create a secure and efficient system. Each block contains a cryptographic hash of the previous block, transaction data, and a timestamp, creating an unbreakable chain of records.</p>
          
          <ul>
            <li><strong>Cryptographic Hashing:</strong> SHA-256 algorithms ensure data integrity and create unique digital fingerprints for each block</li>
            <li><strong>Merkle Trees:</strong> Efficient data structures that enable quick verification of large datasets without downloading entire blocks</li>
            <li><strong>Digital Signatures:</strong> Public-key cryptography ensures transaction authenticity and non-repudiation</li>
            <li><strong>Peer-to-Peer Networks:</strong> Distributed network architecture eliminates single points of failure</li>
            <li><strong>Smart Contracts:</strong> Self-executing contracts with terms directly written into code, enabling automated agreements</li>
          </ul>
          
          <h3>Consensus Mechanisms</h3>
          <p>Blockchain networks employ various consensus mechanisms to validate transactions and maintain network integrity. These mechanisms ensure all participants agree on the current state of the ledger without requiring a central authority.</p>
          
          <ul>
            <li><strong>Proof of Work (PoW):</strong> Miners compete to solve complex mathematical puzzles, securing the network through computational effort</li>
            <li><strong>Proof of Stake (PoS):</strong> Validators are chosen based on their stake in the network, offering energy-efficient consensus</li>
            <li><strong>Delegated Proof of Stake (DPoS):</strong> Token holders vote for delegates who validate transactions on their behalf</li>
            <li><strong>Proof of Authority (PoA):</strong> Pre-approved validators maintain the network, suitable for private blockchain implementations</li>
          </ul>
          
          <div className="highlight-box">
            <h4>Real-World Applications</h4>
            <ul>
              <li><strong>Financial Services:</strong> Cryptocurrencies, cross-border payments, and decentralized finance (DeFi) protocols</li>
              <li><strong>Supply Chain Management:</strong> Product traceability from origin to consumer, ensuring authenticity and quality</li>
              <li><strong>Healthcare:</strong> Secure patient data management and pharmaceutical supply chain verification</li>
              <li><strong>Digital Identity:</strong> Self-sovereign identity solutions giving users control over personal data</li>
              <li><strong>Voting Systems:</strong> Transparent and tamper-proof electoral processes</li>
              <li><strong>Intellectual Property:</strong> Timestamped proof of creation and ownership for digital assets</li>
            </ul>
          </div>
          
          <h3>Advantages and Benefits</h3>
          <p>Blockchain technology offers numerous advantages over traditional centralized systems, making it particularly valuable for applications requiring high levels of trust, transparency, and security.</p>
          
          <ul>
            <li><strong>Enhanced Security:</strong> Cryptographic protection and distributed architecture make blockchain networks highly resistant to cyber attacks</li>
            <li><strong>Reduced Costs:</strong> Elimination of intermediaries reduces transaction fees and operational expenses</li>
            <li><strong>Global Accessibility:</strong> 24/7 availability without geographical restrictions or banking hours</li>
            <li><strong>Faster Settlements:</strong> Direct peer-to-peer transactions can settle in minutes rather than days</li>
            <li><strong>Programmable Money:</strong> Smart contracts enable automated execution of complex financial agreements</li>
            <li><strong>Financial Inclusion:</strong> Provides banking services to unbanked populations worldwide</li>
          </ul>
          
          <h3>Current Challenges and Limitations</h3>
          <p>Despite its revolutionary potential, blockchain technology faces several challenges that researchers and developers are actively working to address.</p>
          
          <ul>
            <li><strong>Scalability Issues:</strong> Current blockchain networks process limited transactions per second compared to traditional payment systems</li>
            <li><strong>Energy Consumption:</strong> Proof-of-Work consensus mechanisms require significant computational power and electricity</li>
            <li><strong>Regulatory Uncertainty:</strong> Evolving legal frameworks create compliance challenges for blockchain implementations</li>
            <li><strong>User Experience:</strong> Complex interfaces and technical requirements limit mainstream adoption</li>
            <li><strong>Interoperability:</strong> Different blockchain networks often cannot communicate effectively with each other</li>
          </ul>
          
          <h3>Future Developments and Innovations</h3>
          <p>The blockchain ecosystem continues to evolve rapidly, with ongoing research and development addressing current limitations while exploring new possibilities for this transformative technology.</p>
          
          <div className="highlight-box">
            <h4>Emerging Trends</h4>
            <ul>
              <li><strong>Layer 2 Solutions:</strong> Lightning Network and other scaling solutions enable faster, cheaper transactions</li>
              <li><strong>Interoperability Protocols:</strong> Cross-chain bridges and atomic swaps enable communication between different blockchains</li>
              <li><strong>Central Bank Digital Currencies (CBDCs):</strong> Government-issued digital currencies built on blockchain technology</li>
              <li><strong>Non-Fungible Tokens (NFTs):</strong> Unique digital assets representing ownership of digital or physical items</li>
              <li><strong>Decentralized Autonomous Organizations (DAOs):</strong> Self-governing organizations operated through smart contracts</li>
              <li><strong>Green Blockchain:</strong> Environmentally sustainable consensus mechanisms and carbon-neutral networks</li>
            </ul>
          </div>
          
          <h3>Impact on Information Technology</h3>
          <p>Blockchain technology is reshaping the Information Technology landscape by introducing new paradigms for data management, system architecture, and application development. IT professionals must adapt to this decentralized approach to remain relevant in the evolving digital economy.</p>
          
          <p>As we move forward, blockchain technology will continue to drive innovation across industries, creating new opportunities for businesses and individuals while challenging traditional models of trust, ownership, and value exchange. The future of Information Technology will be significantly influenced by the continued development and adoption of blockchain solutions.</p>
        </ContentContainer>
      </div>
    </section>
  );
};

export default Innovation;