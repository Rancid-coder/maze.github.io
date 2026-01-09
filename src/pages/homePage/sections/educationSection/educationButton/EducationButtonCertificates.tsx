const OpenCertificates = (pdfPath: string) => {
    return () => {
      const url = `${import.meta.env.BASE_URL}${pdfPath}`;
      window.open(url, "_blank", "noopener,noreferrer");
    };
};

export default OpenCertificates;