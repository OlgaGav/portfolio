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
    issuer: "Coursera, Authorized by IBM",
    verifyUrl:
      "https://www.credly.com/badges/40da8dbb-67b7-4d68-8946-054c9ea91a38/linked_in_profile",
  },
  {
    id: 3,
    title: "Full-Stack Development Bootcamp",
    issuer: "University of California Berkeley Extension",
    verifyUrl:
      "https://www.parchment.com/lp/award/107be205-a0ef-4e3f-8fab-ad82ac3ab561",
    pdfPath: "/certificates/BerkleyExtenstion.pdf",
  },
];

const handleDownload = (pdfPath, title) => {
  const link = document.createElement("a");
  link.href = pdfPath;
  link.download = `${title.replace(/\s+/g, "_")}_Certificate.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Certificates = () => {
  return (
    <div className="tab-container">
      <h2 className="mb-4">Certificates</h2>
      <div style={{ maxWidth: "720px" }}>
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <div className="certificate-info">
              <h5
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.97rem",
                  color: "var(--brand-slate)",
                  margin: 0,
                }}
              >
                {cert.title}
              </h5>
              <p className="certificate-issuer">{cert.issuer}</p>
            </div>
            <div className="certificate-actions">
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-teal"
                style={{ fontSize: "0.85rem", padding: "0.38rem 0.9rem" }}
              >
                Verify
              </a>
              {cert.pdfPath && (
                <button
                  type="button"
                  className="btn-coral-outline"
                  style={{ fontSize: "0.85rem", padding: "0.38rem 0.9rem" }}
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
