import React from 'react';
import './Certifications.css';

const Certifications = ({ awscert, securitycert }) => {
  return (
    <div className="certifications-container">
      <img src={awscert} alt="AWS Solutions Architect Associate" className="cert-image aws-cert" />
      <img src={securitycert} alt="Security+" className="cert-image security-cert" />
    </div>
  );
};

export default Certifications;
