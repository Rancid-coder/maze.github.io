const OpenInstitution = (instPath: string) => {
  return () => {
    const url = `${instPath}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };
};

export default OpenInstitution;
