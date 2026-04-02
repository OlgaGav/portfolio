const certificates = [
  {
    id: 1,
    title: "Claude Code in Action",
    issuer: "Anthropic",
    verifyUrl: "https://verify.skilljar.com/c/eb4vsb9agkk3",
    pdfPath: "/certificates/certificate-eb4vsb9agkk3-1775153964.pdf",
  },
    {
    id: 2,
    title: "Generative AI: Prompt Engineering for Developers",
    issuer: "Coursers, Authorized by IBM",
    verifyUrl: "https://www.credly.com/badges/40da8dbb-67b7-4d68-8946-054c9ea91a38/linked_in_profile",
  },
    {
    id: 3,
    title: "Berkley Coding Bootcamp: Full Stack Development",
    issuer: "University of California Berkeley Extension",
    verifyUrl: "https://www.parchment.com/lp/award/107be205-a0ef-4e3f-8fab-ad82ac3ab561",
    pdfPath: "/certificates/BerkleyExtenstion.pdf",
  },
];

const Certificates = () => {
  const handleDownload = (pdfPath, title) => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = `${title.replace(/\s+/g, "_")}_Certificate.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="tab-container">
      <h2>Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <div className="certificate-info">
              <h4>{cert.title}</h4>
              <p className="certificate-issuer">{cert.issuer}</p>
            </div>
            <div className="certificate-actions">
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary custom-button certificate-btn"
              >
                Verify
              </a>
              {cert.pdfPath && (
                <button
                  type="button"
                  className="btn btn-outline-primary custom-button certificate-btn"
                  onClick={() => handleDownload(cert.pdfPath, cert.title)}
                >
                  Download PDF
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
