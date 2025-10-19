document.getElementById('downloadBtn').addEventListener('click', () => {
  const fileUrl = './resume.pdf'; // Make sure this path is correct
  fetch(fileUrl)
    .then(res => {
      if (!res.ok) throw new Error('File not found');
      return res.blob();
    })
    .then(blob => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'Antony Amal Rekshin A Frontend Development.pdf';
      link.click();
      URL.revokeObjectURL(link.href);
    })
    .catch(err => alert('⚠️ Unable to download file: ' + err.message));
});